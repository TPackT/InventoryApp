import express from "express"
import { addProduct, deleteProduct, getAllProducts } from "../database/products.js"

export const router = express.Router()

router.get("/products", async (req, res) => {
    const products = await getAllProducts()

    res.render("products", {
        products: products,
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

    res.redirect("/")

    return product

})



router.delete("/products/:id", async (req, res) => {

    const idToDelete = Number(req.params.id)

    //call db method
    const product = await deleteProduct(idToDelete)


    res.redirect("/")



})