const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');


describe('pokemon routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/pokemon should return a list of pokemon', async () => {
    const res = await request(app).get('/pokemon');
    expect(res.body[0]).toEqual({ id: expect.any(String), name: expect.any(String) });
  });


  it('/pokemon/:id should return pokemon detail', async () => {
    const res = await request(app).get('/pokemon/1');
    const Pikachu = {
      id: '1',
      name: 'Pikachu',
      type: 'electric',
      index: 25
    };
    expect(res.body).toEqual(Pikachu);
  });
  afterAll(() => {
    pool.end();
  });
});


