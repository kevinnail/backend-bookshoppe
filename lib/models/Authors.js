const pool = require('../utils/pool');

class Author {
  id;
  name;
  date_of_birth;
  place_of_birth;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.date_of_birth = row.date_of_birth;
    this.place_of_birth = row.place_of_birth;
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
        SELECT * FROM authors
        `
    );

    return rows.map((authorRow) => new Author(authorRow));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
        SELECT
        authors.*,
        coalesce(
          json_agg(to_jsonb(books))
          filter (where books.id is not null), '[]') as books
          from authors
          left join authors_books on authors.id = authors_books.authors_id
          left join books on authors_books.books_id = books.id
          where authors.id=$1
          group by authors.id
          `,
      [id]
    );
    return rows[0];
  }
}

module.exports = Author;
