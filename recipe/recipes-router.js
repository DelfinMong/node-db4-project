const express = require('express');

const Cooking = require('./recipes-model.js');

const router = express.Router();

router.get('/',(req,res) => {
    Cooking.find()
    .then(cook=> {
        res.status(200).json(cook);
    })
    .catch( err => {
        res.status(500).json({msg:'Failed'});
    })
})  

module.exports = router