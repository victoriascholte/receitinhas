const express = require('express')
const controller = require('../controller/recipeController')
const router = express.Router()

router.post("/recipes", controller.createRecipes)
router.get("/recipes", controller.allRecipes)
router.get("/recipes/:id", controller.findRecipeById)
router.put("/recipes/:id", controller.updateRecipes)
router.delete("/recipes/:id", controller.deleteRecipeById)

module.exports = router