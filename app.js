require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('./src/database/mongooseConnect')
const index = require('./src/routes/index')

console.log("Hello world!")

const app = express()
app.use(express.json())
app.use(cors())
app.use('/', index)
mongoose.connect()


module.exports = app