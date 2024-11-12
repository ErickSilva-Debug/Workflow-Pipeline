const request = require('supertest');
const app = require('../App');

describe('GET /api/planets/:name', () => {
  it('Deve retornar o planeta "Yavin IV"', async () => {
    const res = await request(app).get('/api/planets/Yavin IV');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('name', 'Yavin IV');
  });

  it('Deve retornar 404 para um planeta inexistente', async () => {
    const res = await request(app).get('/api/planets/NonExistent');
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty('message', 'Planet not found');
  });
});
