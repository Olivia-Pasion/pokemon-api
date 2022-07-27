const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { pokemon } = require('../data/pokemon')

describe('pokemon routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/pokemon:id should return pokemon detail', async () => {
    const res = await request(app).get('/pokemon/1');
    const Pikachu = {
      id: '1',
      name: 'Pikachu',
      type: 'electric',
      index: 025
    };
    expect(res.body).toEqual(Pikachu);
  });
  afterAll(() => {
    pool.end();
  });
});
