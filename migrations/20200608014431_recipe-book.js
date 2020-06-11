exports.up = function(knex) {
    return knex.schema
      .createTable("recipes", (tbl) => {
        tbl.increments("id");
        tbl.varchar("recipeType", 255)
        .notNullable()
        .unique();
      })

      .createTable("instructions", (tbl) => {
        tbl.increments("id");
        tbl.text("What_ToDo", 128)
        .notNullable()
        .unique();
        tbl.integer('recipes_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      })

      .createTable("ingredients", (tbl) => {
        tbl.increments("id");
        tbl.varchar("ingredientType", 255)
           .notNullable();
        tbl.float("measurements")
           .notNullable();
        tbl.integer('recipes_id')
           .unsigned()
           .notNullable()
           .references('id')
           .inTable('recipes')
           .onUpdate('CASCADE')
           .onDelete('CASCADE');
        
      })
      
      
      .createTable("recipe_ingredients", (tbl) => {
        tbl.increments();
        tbl
          .integer("recipe_id")
          .unsigned()
          .references("id")
          .inTable("recipes")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        tbl
          .integer("ingredients_id")
          .unsigned()
          .references("id")
          .inTable("ingredients")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");

      });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('recipe_ingredients')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('instructions')
  .dropTableIfExists('recipes')
};
