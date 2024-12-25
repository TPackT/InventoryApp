import express from "express"
import { addProduct } from "../database/products.js"

export const router = express.Router()

router.post("/add-product", async (req, res) => {

    const productEntry = {
        name: req.body.name,
        barcode: "0000000000000",
        size: req.body.size, 
        price: req.body.price, 
        quantity: req.body.quantity, 
        created_at: new Date(),
        updated_at: new Date()
    }

    const product = await addProduct(productEntry)

    return product

    res.redirect("back")
})