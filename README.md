# Steps

GIT init & Master
- git init
- git remote add origin git@github.com:username/repo
- git push origin -u master

Add/Commit/Push
- git add *
- git commit -m "comment"
- git push

Branch + Feature
- git checkout -b feature
- git push origin -u feature

-------------------------------------------
NPM Setup
    - npm init => package.json
    - adjust package.json 
        - add "type": "module"
        - add scripts (dev, prod, test, migrate)
    - npm install packages
        - nodemon
        - express
        - ejs
        - sqlite3
        - knex
        - crypto
        - cookie-parser
        - ava
        - supertest


Create files 
- main > index.js
- run using "node index.js"



--------------------------------------------------------
Folder setup
- src
    - database
    - routes
    - middleware
- views (ejs)
- public ()
- tests

--------------------------------------
Express server with index.ejs

- npm install express

HTTP methods
.get
.post
.patch
.put
.delete
.use

-----
Express server - main.js + app.js
Index.ejs



----
Database

- knex + sqlite3
- > knexfile.js
    - check with npx knex migrate:currentVersion > mydb.sqlite
- Create migration
    - npx knex migrate:make create_todos_table
    - adjust due to ESM (type:module v package.json)
    - adjust migration
    table.increments/string/integer/boolean
    - npx knex migrate:latest

--
    import knex from "knex"
    import knexfile from "../knexfile.js"

    export const app = express()
    const db = knex(knexfile)

 -------------------------------------
 CRUD 

 Create routers
 Create db methods

