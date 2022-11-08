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

    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: expect.any(String),
      name: expect.any(String),
      date_of_birth: expect.any(String),
      place_of_birth: expect.any(String),
      books: [
        {
          id: expect.any(Number),
          title: expect.any(String),
          released: expect.any(Number),
        },
      ],
    });
  });

  it('/books should return a list of books', async () => {
    const resp = await request(app).get('/books');
    expect(resp.status).toBe(200);
    expect(resp.body.length).toBe(10);
    expect(resp.body[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      released: expect.any(String),
    });
  });

  afterAll(() => {
    pool.end();
  });
});
