
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('RecipeSteps').del()
    .then(function () {
      // Inserts seed entries
      return knex('RecipeSteps').insert([
        // Carnitas Tacos
        {recipe_id: 1, step_id: 1},
        {recipe_id: 1, step_id: 2},
        {recipe_id: 1, step_id: 3},
        {recipe_id: 1, step_id: 4},
        
        //Pizza
        {recipe_id: 2, step_id: 5},
        {recipe_id: 2, step_id: 6},
        {recipe_id: 2, step_id: 7},
        {recipe_id: 2, step_id: 8},
        {recipe_id: 2, step_id: 9},
        {recipe_id: 2, step_id: 10},
        {recipe_id: 2, step_id: 11},
      ]);
    });
};
