const express = require('express');

const ingredient = require('./recipes-model.js');

const router = express.Router();

router.get('/',(req,res) => {
    ingredient.findIngredient()
    .then(recipe=> {
        res.status(200).json(recipe);
    })
    .catch( err => {
        res.status(500).json({msg:'Failed'});
    })
})  

module.exports = router