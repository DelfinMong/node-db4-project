const express = require('express');

const instruction = require('./recipes-model.js');

const router = express.Router();

router.get('/',(req,res) => {
        instruction.findInstruction()
    .then(recipe=> {
        res.status(200).json(recipe);
    })
    .catch( err => {
        res.status(500).json({msg:'Failed'});
    })
})  

module.exports = router