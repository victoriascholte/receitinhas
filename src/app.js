require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('./database/mongooseConnect')
const index = require('./routes/index')
const recipeRoutes = require('./routes/recipeRoutes')

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger/swagger_output.json')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use('/', index)
app.use(recipeRoutes)

mongoose.connect()

module.exports = app

console.log("Projeto Receitinhas")