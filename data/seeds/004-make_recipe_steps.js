
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('Steps').insert([
        // Carnitas Tacos Steps
        {step_num: 1, todo: `fry up some Carnitas.`, recipe_id: 1},
        {step_num: 2, todo: `Lightly fry tortilla's.`, recipe_id: 1},
        {step_num: 3, todo: `put carnitas in tortillas with garnishings; onions, cilantro, lime`, recipe_id: 1},
        {step_num: 4, todo: `Serve it up.`, recipe_id: 1},

        // Deep Dish Pizza
        {step_num: 1, todo: `Prep pizza crust.`, recipe_id: 2},
        {step_num: 2, todo: `Prehead oven to 425`, recipe_id: 2},
        {step_num: 3, todo: `spread marinara sauce on crust.`, recipe_id: 2},
        {step_num: 4, todo: `Spread Mozarella cheese.`, recipe_id: 2},
        {step_num: 5, todo: `spread pepperoni slices.`, recipe_id: 2},
        {step_num: 6, todo: `Add more Mozarella cheese.`, recipe_id: 2},
        {step_num: 7, todo: `put pizza in oven for 23 minutes`, recipe_id: 2},
      ]);
    });
};
