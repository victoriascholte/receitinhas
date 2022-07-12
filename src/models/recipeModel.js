const mongoose = require('mongoose')

// Modelo de Receita:
// title: nome da receita; dificulty: dificuldade da receita; time: tempo de preparo
// portions: número de porções; ingredients: lista de ingredientes;
// tools: lista de utensilios; age: recomendado a partir de x anos de idade;
// category: lista de categorias da receita; cost: custo da receita 

const recipesSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    title: { type: string },
    dificulty: { type: string },
    time: { type: string },
    portions: { type: string },
    ingredients: [{ type: string }],
    tools: [{ type: string }],
    age: { type: string },
    category: [{ type: string }],
    cost: { type: string },
},{
    versionKey: false,
});

const recipes = mongoose.model('recipes', recipesSchema);

modules.export = recipes