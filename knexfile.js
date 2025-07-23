import dotenv from "dotenv"
dotenv.config()



export default {
        client: "pg",
        connection: {
            host: process.env.DATABASE_HOST,
            database: process.env.DATABASE_NAME,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            ssl: true,
        },
        useNullAsDefault: true,
        debug: false,
        pool: {
            min: 0,
            max: 64
        },
        //wrapIdentifier: (value, origImpl) => origImpl(value.toUpperCase())
        
    }

