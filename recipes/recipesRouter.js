const express = require('express');
const Recipes = require('./recipesModel');
const router = express.Router();

router.get('/', (req, res) => {
  Recipes.find()
  .then(recipes => {
    res.json(recipes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipe' });
  });
});

module.exports = router;