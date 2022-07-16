const RecipeModel = require('../models/recipeModel')
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

// const { title, age, ingredients } = req.body
// equivale a:
// const name = req.body.title
// const age = req.body.age
// const team = req.body.ingredients

const createRecipe = async (req, res) => {
  try {
      const { title, ingredients, preparation, age, category } = req.body
      // preciso passar esse dado pra minha Model, para poder criar uma nova recipe model
      const newRecipe = new RecipeModel({
          title, ingredients, preparation, age, category
      })
      // agora precisamos salvar a recipe no banco de dados
      // e deixar isso sincrono, para poder dar o feedback 
      const savedRecipe = await newRecipe.save()

      // passa o savedRecipe porque é o mais atualizado
      res.status(201).json(savedRecipe)
      
  } catch (error) {
      console.error(error) //  vai mostrar no terminal qual foi o motivo do erro
      res.status(500).json({ message: error.message })
  }
}

//// TODAS AS RECEITAS 
// const allRecipes 

//// BUSCAR POR ID
// findRecipeById

// ATUALIZAR RECEITA
// updateRecipe

// DELETAR RECEITA
// deleteRecipe


module.exports = {
    createRecipe
}



