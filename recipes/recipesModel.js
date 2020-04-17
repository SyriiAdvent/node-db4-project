const db = require('../data/db-config');

const find = () => {
  return db('recipes');
}

const getShoppingList = id => {
  return db('Ingredients')
    .where('recipe_id', '=', id)
    .then(items => {
      console.log(items)
    })
}

const getInstructions = id => {
  return db('Steps')
    .where('recipe_id', '=', id)
    .then(steps => {
      console.log(steps)
    })
}

getInstructions(1)
module.exports = {
  find
}