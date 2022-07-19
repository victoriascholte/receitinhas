const recipeModel = require('../models/recipeModel')
const SECRET = process.env.SECRET

// // const { title, age, ingredients } = req.body
// // equivale a:
// // const name = req.body.title
// // const age = req.body.age
// // const team = req.body.ingredients

const allRecipes = async (req, res) => {
    try {
        const allRecipes = await recipeModel.find()
        res.status(200).json(allRecipes)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const createRecipes = async (req, res) => {
  try {
      const { title, ingredients, preparation, age, categories } = req.body
      // preciso passar esse dado pra minha Model, para poder criar uma nova recipe model
      const newRecipe = new recipeModel({
          title, ingredients, preparation, age, categories
      })
      // agora precisamos salvar a recipe no banco de dados
      // e deixar isso sincrono, para poder dar o feedback ddd
      const savedRecipe = await newRecipe.save()

      // passa o savedRecipe porque é o mais atualizado
      res.status(201).json(savedRecipe)
      
  } catch (error) {
      console.error(error) //  vai mostrar no terminal qual foi o motivo do erro
      res.status(500).json({ message: error.message })
  }
}

// Buscar por Id 

const findRecipeById = async (req, res) => {
    try {
        const findRecipe = await recipeModel.findById(req.params.id)
            if(findRecipe == null) {
                return res.status(404).json({ message: 'Receita não encontrada.'})
            }
        res.status(200).json(findRecipe)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message})
    }
}

// Atualizar receita

const updateRecipes = async (req, res) => {
    try {
        const { title, ingredients, preparation, age, categories } = req.body
        const updatedRecipe = await recipeModel.findByIdAndUpdate(req.params.id, {
            title, ingredients, preparation, age, categories
        }) 
        res.status(200).json(updatedRecipe)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

// Deletar receita

const deleteRecipeById = async (req, res) => {
    try {
        const { id } = req.params 
        const deletedRecipe = await recipeModel.findByIdAndDelete(id)
        let message = ""
        if (deletedRecipe == null) {
            message = "Não existe nenhuma receita com esse id."
        } else {
            message = `A receita ${deletedRecipe.title} foi deletada com sucesso!`
        }
        res.status(200).json({ message })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    createRecipes, allRecipes, findRecipeById, updateRecipes, deleteRecipeById
}