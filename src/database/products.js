import { db } from "../database.js"



export const getProductById = async (productId) => {
    
}

export const getAllProducts = async () => {
    const products = await db("products").select("*")

    return products
}




export const addProduct = async (product) => {
    await db("products").insert(product)
}

export const updateProduct = async (productId) => {

}

export const deleteProduct = async (productId) => {

}