const mongoose = require('mongoose')

// Modelo de Receita:
// title: nome da receita; ingredients: lista de ingredientes; preparation: modo de preparo;
// age: idades recomendadas; category: lista de categorias da receita;

const recipesSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    title: { type: string },
    ingredients: [{ type: string }],
    preparation: { type: string },
    age: [{ type: string }],
    category: [{ type: string }],
},{
    versionKey: false,
});

const recipes = mongoose.model('recipes', recipesSchema);

modules.export = recipes