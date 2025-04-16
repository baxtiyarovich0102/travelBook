const express = require("express")
const connectdB = require("./config/db")
require('dotenv').config()


connectdB()

const app = express()

app.get('/', (req,res) => {
    res.send("Wassup")
})

const PORT = process.env.PORT

app.listen(PORT,console.log("Server is running on port: ", PORT))