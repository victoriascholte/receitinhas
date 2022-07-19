const mongoose = require('mongoose')

// Modelo de Receita:
// title: nome da receita; ingredients: lista de ingredientes; preparation: modo de preparo;
// age: idades recomendadas; category: lista de categorias da receita;

modules.export = recipes

const RecipesSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    title: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    preparation: {
        type: String,
        required: true,
    },

    age: {
        type: [String],
        required: true
    },
},{ timestamp: true })

const Model = mongoose.model('recipe', RecipesSchema)
module.exports = Model