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

  static async getById(id) {
    const { rows } = await pool.query(
      `
      select 
      books.*, 
      coalesce(
        json_agg(to_jsonb(authors))
      filter (where authors.id is not null), '[]') as authors
      from books
      left join authors_books on books.id = authors_books.books_id
      left join authors on authors_books.authors_id =authors.id
      where books.id=$1
      group by books.id
            `,
      [id]
    );

    return rows[0];
  }
}
module.exports = Book;
