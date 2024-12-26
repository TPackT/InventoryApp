import express from "express"
import { getAllProducts } from "./database/products.js"
import { router as ProductsRouter } from "./routes/products.js"
import methodOverride from "method-override"

export const app = express()

app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true})) 

app.use(methodOverride('_method'))


app.get("/", async (req, res) => {

    const products = await getAllProducts()


    res.render("index", {
        products: products,
    })
})

app.use(ProductsRouter)


