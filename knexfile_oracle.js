import dotenv from "dotenv"
dotenv.config()


export default {
        client: "oracledb",
        connection: {
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            connectString: process.env.DB_CONNECT_STRING,
            /*
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            database: process.env.DB_SERVICE_NAME
            */
        },
        useNullAsDefault: true,
        debug: false,
        pool: {
            min: 0,
            max: 64
        },
        //wrapIdentifier: (value, origImpl) => origImpl(value.toUpperCase())
        
    }

