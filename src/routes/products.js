import express from "express"
import { addProduct, deleteProduct } from "../database/products.js"

export const router = express.Router()

router.post("/add-product", async (req, res) => {

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



router.delete("/delete-product/:id", async (req, res) => {

    const idToDelete = Number(req.params.id)

    //call db method
    const product = await deleteProduct(idToDelete)


    res.redirect("/")



})