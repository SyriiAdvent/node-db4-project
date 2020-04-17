exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('Recipes')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('Recipes').insert([
				{
					name: 'Carnitas Tacos',
					description:
						'Delicious mexican Carnitas in a soft, lightly fried taco shell with cilantro,cheese and onion.',
				},
				{
					name: 'Deep-Dish Pizza',
					description:
						'A thick crust pizza with a crispy crust and soft airy layer crust.',
				}
			]);
		});
};
