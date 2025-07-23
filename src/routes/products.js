import express from "express"
import { addProduct, deleteProduct, getAllProducts, getProductById, updateProduct, getProductByBarcode } from "../database/products.js"
import axios from "axios"
import fs from "fs"


export const router = express.Router()

router.get("/products", async (req, res) => {
    let products = await getAllProducts()

    products.sort((a, b) => a.id - b.id)

    products = products.map(product => ({
        ...product,
        size: product.size.replace(/(\d+)[.](\d+)/, '$1,$2') // Replace '.' with ','
                         .replace(/(\d+[\.,]?\d*)([a-zA-Z]+)/, (match, num, unit) => `${num} ${unit.toLowerCase()}`)
    }));

    res.render("products", {
        products: products,
    })
        
})

router.get("/products/new", async (req, res) => {

    //const products = JSON.parse(req.query.products)
    const products = await getAllProducts()

    console.log("List of " + products)
    res.render("productForm", {
        products: products
    })
})

router.get("/products/export", async (req, res) => {
    const products = await getAllProducts()

    console.log("First: " + JSON.stringify(products))
    console.log ("\n Size: " + products.length + "\n")

    
    
    
    const rows = products.map((product, index) => {
         
        const id = String(index + 1).padStart(6, "0")
        return `${product.name};${product.size};${product.price};Baarova-25-2;${id}`
    })

    const csvContent = rows.join("\n") 

    console.log(csvContent)
    
    fs.writeFile("productsOutput.csv", csvContent, (e) => {
        if(e) throw e
        console.log("CSV file saved")
    })
    
    res.render("exportSuccess")
}) 


router.get("/products/:id", async (req, res) => {

    const idToGet = req.params.id

    const product = await getProductById(idToGet)
    
    res.render("productDetail", {
        product: product,
    })
    
})

router.get("/products/barcode/scan", async (req, res) => {

    res.render("scanner")
})




router.post("/products", async (req, res) => {


    //map product atributes
    const productEntry = {
        name: req.body.name,
        description: req.body.description,
        barcode: req.body.barcode || "0000000000000",
        size: req.body.size, 
        price: req.body.price, 
        quantity: req.body.quantity, 
        created_at: new Date(),
        updated_at: new Date()
    }

    console.log("Product body for insert: " + JSON.stringify(productEntry))
    //call db method
    const product = await addProduct(productEntry)

    res.redirect("/products")

    return product

})



router.delete("/products/:id", async (req, res) => {

    const idToDelete = Number(req.params.id)

    //call db method
    const product = await deleteProduct(idToDelete)


    res.redirect("/products")



})

router.put("/products/:id", async (req, res) => {

    const idToUpdate = Number(req.params.id)

    const productBody = {
        name: req.body.name,
        barcode: req.body.barcode,
        size: req.body.size, 
        price: req.body.price, 
        quantity: req.body.quantity, 
        created_at: req.body.created_at,
        updated_at: new Date()
    }




    //call db method
    const product = await updateProduct(idToUpdate, productBody)

    res.redirect("/products")

})


router.get("/products/barcode/:barcode", async (req, res) => {

    const barcodeToSearch = req.params.barcode
   

    try {
        const product = await getProductByBarcode(barcodeToSearch)
        
        console.log("Searching for barcode: " + barcodeToSearch)
        if (product) {
            //return res.status(200).json(product)
            return res.json(product)
        } 
        
        console.log("Not found in db")



        //if not found in db

        const externalApiUrl = `https://world.openfoodfacts.org/api/v0/product/${barcodeToSearch}.json`
        const response = await axios.get(externalApiUrl)

        if (response.data && response.data.product) {
            const externalProduct = response.data.product

            const apiProduct = {
                name: externalProduct.product_name || "Unknown Name",
                barcode: barcodeToSearch,
                size: externalProduct.quantity || "Unknown Size",
                price: 0,
                quantity: 0,
            }
            console.log("Api product: " + JSON.stringify(apiProduct))

            return res.status(200).json(apiProduct)
            //return res.json(apiProduct)
          
        } else {

            return res.status(404).json({
                message: "Product not found in the API",
                barcode: barcodeToSearch
            }) 
        }


        
    
    } catch (e) {
        console.error("Error fetching product by barcode: ", e.message)
        res.status(500).json({ error: "Failed to fetch product by barcode" })
    }

        
    }

)