const db = require('../data/db-config');

const find = () => {
  return db('recipes');
}

module.exports = {
  find
}