import express from "express"
import { router as ProductsRouter } from "./routes/products.js"
import methodOverride from "method-override"

export const app = express()

app.set("view engine", "ejs")

app.use(express.static("public"))
app.use(express.urlencoded({extended: true})) 
app.use(methodOverride('_method'))


app.get("/", async (req, res) => {

    res.redirect("/products")

})



app.use(ProductsRouter)


