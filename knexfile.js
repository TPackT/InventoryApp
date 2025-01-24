import dotenv from "dotenv"
dotenv.config()

export default {
        client: "pg",
        connection: process.env.DB_URL,
        useNullAsDefault: true,
        debug: false
    }