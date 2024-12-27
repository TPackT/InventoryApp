import express from "express"
import { addProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../database/products.js"

export const router = express.Router()

router.get("/products", async (req, res) => {
    const products = await getAllProducts()

    res.render("products", {
        products: products,
    })
        
})

router.get("/products/:id", async (req, res) => {

    const idToGet = req.params.id

    const product = await getProductById(idToGet)

    res.render("productDetail", {
        product: product,
    })
        
})

router.post("/products", async (req, res) => {


    //map product atributes
    const productEntry = {
        name: req.body.name,
        barcode: "0000000000000",
        size: req.body.size, 
        price: req.body.price, 
        quantity: req.body.quantity, 
        created_at: new Date(),
        updated_at: new Date()
    }

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

    console.log("ID: " + idToUpdate)
    console.log("Body: " + JSON.stringify(productBody))

    

    //call db method
    const product = await updateProduct(idToUpdate, productBody)


    res.redirect("/products")



})