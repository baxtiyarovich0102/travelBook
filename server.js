const express = require("express")
const connectdB = require("./config/db")
require('dotenv').config()


connectdB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/travel", require("./routes/travel.route"))

const PORT = process.env.PORT

app.listen(PORT,console.log("Server is running on port: ", PORT))