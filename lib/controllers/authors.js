const { Router } = require('express');
const Author = require('../models/Authors.js');

module.exports = Router().get('/', async (req, res) => {
  const authors = await Author.getAll();
  const authorDisplay = authors.map((author) => {
    return {
      id: author.id,
      name: author.name,
    };
  });

  res.json(authorDisplay);
});
