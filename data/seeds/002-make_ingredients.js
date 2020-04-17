
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('Ingredients').insert([
        {name: 'Carnitas'},
        {name: 'Onions'},
        {name: 'Tomatoes'},
        {name: 'Tortillas'},
        {name: 'Butter'},
        {name: 'Pizza Crust'},
        {name: 'Pepperoni'},
        {name: 'Mexican Cheese'},
        {name: 'Mozarella'},
        {name: 'Sourcream'},
        {name: 'Cilantro'},
        {name: 'Lime'},
        {name: 'Marinera Sauce'}
      ]);
    });
};
