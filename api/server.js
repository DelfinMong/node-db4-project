const express = require("express"); 
const helmet = require("helmet");
const recipeRouter = require('../recipe/recipes-router.js');
const instructionRouter = require('../recipe/instruction-router.js');
const ingredientRouter = require('../recipe/ingredient-router.js');

const server = express();

server.use(helmet()); 
server.use(express.json());

server.use('/api/recipes',recipeRouter);
server.use('/api/instruction',instructionRouter);
server.use('/api/ingredient',ingredientRouter);

server.get("/",(req, res) => {
    res.send(`
      <h2>Delfin Mongende Sprint</h2>
      <p>Lambda Coding School</p>
    `);
  });
  
  
  module.exports = server;