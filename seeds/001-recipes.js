
exports.seed = function(knex) {
  // Deletes ALL existing entries
    return knex('recipes').insert([
      {
             id: 1,
             recipeType: "Hamburger"
            },
            {
              id: 2,
              recipeType: "Pizza"
             },
             {
              id: 3,
              recipeType: "Taco"
             }
    ])
}


