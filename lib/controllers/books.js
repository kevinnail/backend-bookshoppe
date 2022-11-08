const { Router } = require('express');
const Book = require('../models/Books.js');

module.exports = Router().get('/', async (req, res) => {
  const books = await Book.getAll();
  // return books;
  res.json(books);
});
