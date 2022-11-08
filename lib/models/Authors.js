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
}

module.exports = Author;
