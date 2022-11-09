const pool = require('../utils/pool');

class Book {
  id;
  title;
  released;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.released = row.released;
    // this.authors = row.authors && row.authors;
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
        SELECT * FROM books
        `
    );
    return rows.map((bookRow) => new Book(bookRow));
  }
}
module.exports = Book;
