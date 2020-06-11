exports.seed = function(knex) {
  // Deletes ALL existing entries
    return knex('ingredients').insert([
      {
       id: 1,
       ingredientType: "flour",
       measurements: 2.5,
       recipes_id: 2

      },
      {
        id: 2,
        ingredientType: "tomatos",
        measurements:3,
        recipes_id: 1
       },
       {
        id: 3,
        ingredientType: "meat",
        measurements: 5,
        recipes_id: 1
        
       }
    ])
}
