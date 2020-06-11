const db = require('../data/db.config.js')

module.exports = {
   find,
   findInstruction,
   findIngredient
}

function find() {
    return db('recipes')
}

function findInstruction() {
    return db('instructions')
}

function findIngredient() {
    return db('ingredients') 
}