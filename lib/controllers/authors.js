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
  //   console.log('authors', authors);

  res.json(authorDisplay);
});
