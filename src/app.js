require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('./src/database/mongooseConnect')
const index = require('./src/routes/index')

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');

const app = express()
app.use(express.json())
app.use(cors())
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use('/', index)


mongoose.connect()

module.exports = app

console.log("Estamos aqui...")