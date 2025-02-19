import { db } from "../database.js"



export const getProductById = async (productId) => {

    const product = await db("products").where("id", productId).first()


    return product
    
}

export const getProductByBarcode = async (productBarcode) => {

    const product = await db("products").where("barcode", productBarcode).first()

    return product
    
}



export const getAllProducts = async () => {
    const products = await db("products").select("*")
    return products
}




export const addProduct = async (productObject) => {

    const product = await db("products").insert(productObject)
    return product
}

export const updateProduct = async (productId, newProductObject) => {

    const product = await db("products").where("id", productId).first()

    if(!product) {
        console.log("Product not found")
        return res.redirect("/products")
    }

    await db("products").where("id", productId).update(newProductObject)

    return product

}

export const deleteProduct = async (productId) => {

    const product = await db("products").where("id", productId).first()

    if(!product) {
        console.log("Product not found")
        return res.redirect("/")
    }

    await db("products").where("id", productId).delete()

}