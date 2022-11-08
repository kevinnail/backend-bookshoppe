const { Router } = require('express');
const Author = require('../models/Authors.js');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const author = await Author.getById(req.params.id);

    res.json(author);
  })

  .get('/', async (req, res) => {
    const authors = await Author.getAll();
    const authorDisplay = authors.map((author) => {
      return {
        id: author.id,
        name: author.name,
      };
    });

    res.json(authorDisplay);
  });
