const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('authors and books routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/authors should return a list of authors', async () => {
    const resp = await request(app).get('/authors');
    expect(resp.status).toBe(200);
    expect(resp.body.length).toBe(13);
    expect(resp.body[0]).toEqual({
      id: expect.any(String),
      name: expect.any(String),
    });
  });

  it('/authors/:id should return author detail and a nested list of books', async () => {
    const resp = await request(app).get('/authors/1');
    expect(resp.body.length).toEqual(7);
    const george = resp.body.find((char) => char.id === '1');
    expect(george).toHaveProperty('name', 'George J. Thompson');
    expect(george).toHaveProperty('date_of_birth', '12/4/1940');
    expect(george).toHaveProperty('place_of_birth', 'Seattle, WA');
    expect(george).toHaveProperty('books');
    expect(george.books[0]).toHaveProperty('title');
    expect(george.books[0]).toHaveProperty('released');
  });

  afterAll(() => {
    pool.end();
  });
});
