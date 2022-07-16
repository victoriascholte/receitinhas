const controller = require('../controller/recipeController')
const express = require('express')
const router = express.Router()

router.post("/recipes", controller.createRecipe)
//router.get("/recipes", controller.getAll)
//router.get("/recipes/:id", controller.findById)
//router.put("/recipes/:id", controller.update)
//router.delete("/recipes/:id", controller.deleteById)

module.exports = router