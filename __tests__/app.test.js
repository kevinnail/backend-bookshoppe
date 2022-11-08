const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('/authors should return a list of authors', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('example test - delete me!', async () => {
    const resp = await request(app).get('/owners');
    expect(resp.status).toBe(200);
    expect(resp.body.length).toBe(10);
    expect(resp.body[0]).toEqual({
      id: expect.any(String),
      name: expect.any(String),
      date_of_birth: expect.any(String),
      place_of_birth: expect.any(String),
    });
  });

  afterAll(() => {
    pool.end();
  });
});
