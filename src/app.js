import express from "express"
import knex from "knex"
import knexfile from "../knexfile.js"

export const app = express()
const db = knex(knexfile)

app.set("view engine", "ejs")


app.get("/", async (req, res) => {
    res.render("index")
})
