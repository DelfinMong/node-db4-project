
exports.seed = function(knex) {

  return knex("instructions").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("instructions").insert([
        {
          id: 1,
          What_ToDo: "clean the stove",
          recipes_id: 1
         },
         {
           id: 2,
           What_ToDo: "prepare the oven pan",
           recipes_id: 1
          },
          {
           id: 3,
           What_ToDo: "buy small ingredient",
           recipes_id: 2
          }
       ])

    })}
  // Deletes ALL existing entries
    // return knex('instructions').insert([
    //   {
    //    id: 1,
    //    What_ToDo: "clean the stove",
    //    recipes_id: 1
    //   },
    //   {
    //     id: 2,
    //     What_ToDo: "prepare the oven pan",
    //     recipes_id: 1
    //    },
    //    {
    //     id: 3,
    //     What_ToDo: "buy small ingredient",
    //     recipes_id: 2
    //    }
    // ])



