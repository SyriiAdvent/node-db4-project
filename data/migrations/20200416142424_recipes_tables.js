exports.up = function (knex) {
	return knex.schema
		.createTable('Recipes', t => {
			t.increments('id').primary();
			t.string('name', 255).notNullable().index();
			t.text('description');
    })
    
		.createTable('Ingredients', t => {
			t.increments('id').primary();
			t.string('name', 255).notNullable().unique().index();
    })
    
		.createTable('Steps', t => {
			t.increments('id').primary();
      t.integer('step_num', 255).notNullable();
      t.string('todo', 255).notNullable()
      t.integer('recipe_id')
        .unsigned()
        .notNullable()
        // .references('RecipeSteps.recipe_id')
        .references('Recipes.id')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    })
    
		.createTable('RecipeIngredients', t => {
			t.increments('id').primary();
			t.integer('recipe_id')
				.unsigned()
				.notNullable()
				.references('Recipes.id')
				.onDelete('RESTRICT')
        .onUpdate('CASCADE');

      t.integer('ingredient_id')
				.unsigned()
				.notNullable()
				.references('Ingredients.id')
				.onDelete('RESTRICT')
				.onUpdate('CASCADE');

			t.integer('ingredient_amount')
		})

		.createTable('RecipeSteps', t => {
			t.increments('id').primary();
			t.integer('recipe_id')
				.unsigned()
				.notNullable()
				.references('Recipes.id')
				.onDelete('RESTRICT')
        .onUpdate('CASCADE');

      t.integer('step_id')
				.unsigned()
				.notNullable()
				.references('Steps.id')
				.onDelete('RESTRICT')
				.onUpdate('CASCADE');
		});
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('RecipeSteps')
    .dropTableIfExists('RecipeIngredients')
    .dropTableIfExists('Steps')
    .dropTableIfExists('Ingredients')
    .dropTableIfExists('Recipes')
};
