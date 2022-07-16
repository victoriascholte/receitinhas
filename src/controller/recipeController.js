const RecipeModel = require('../models/recipeModel')
const SECRET = process.env.SECRET

//// NOVA RECEITA

const createRecipe = (req, res) => {
    ;
      const newRecipe = new recipeModel(req.body);
      newRecipe.save((err) => {
        if (err) {
          return res.status(404).send({ message: err.message });
        }
        res.status(201).send({
          message: "A receita foi cadastrada com sucesso!",
        });
      });
      };


//// TODAS AS RECEITAS 

const allRecipes = (req, res) => {
    recipeModel.find((err, recipe) => {
      if (err) { 
        return res.status(404).send({ message: err.message });
      }
      res.status(200).send(recipe);
    });
  };

module.exports = {
    createRecipe, allRecipes,
}


// listar Receitas
// const allRecipes

// buscar por Id
// findRecipeById

// atualizar Receita
// updateRecipe

// deletar Receita
// deleteRecipe