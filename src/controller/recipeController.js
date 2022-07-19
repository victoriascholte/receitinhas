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
      const { title, ingredients, preparation, age, categories } = req.body
      // preciso passar esse dado pra minha Model, para poder criar uma nova recipe model
      const newRecipe = new RecipeModel({
          title, ingredients, preparation, age, categories
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

const allRecipes = async (req, res) => {
    try {
        const allRecipes = await RecipeModel.find()
        res.status(200).json(allRecipes)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

//// BUSCAR POR ID

const findRecipeById = async (req, res) => {
    try {
        const findRecipe = await RecipeModel.findById(req.params.id)
            if(findRecipe == null) {
                return res.status(404).json({ message: 'Receita não encontrada.'})
            }
        res.status(200).json(findRecipe)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message})
    }
}


// ATUALIZAR RECEITA
// updateRecipe

const updateRecipe = async (req, res) => {
    try {
        const { title, ingredients, preparation, age, category } = req.body
        const updateRecipe = await RecipeModel.findByIdAndUpdate(req.params.id, {

        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

// DELETAR RECEITA

const deleteRecipeById = async (req, res) => {
    try {
        const { id } = req.params 
        await RecipeModel.findByIdAndDelete(id)
        const message = `A receita ${deletedrecipe.name} foi deletada com sucesso!`
        res.status(200).json({ message })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}


module.exports = {
    createRecipe, allRecipes, findRecipeById, updateRecipe, deleteRecipeById
}