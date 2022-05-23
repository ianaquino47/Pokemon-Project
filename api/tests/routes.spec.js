const request = require('supertest');
const express = require('express');
const router = require('../routes/pokemon');
const { mockResponse } = require('./mockData/response');

const app = new express();
app.use('/:pokemon', router);

describe('Test handlers', () => {
  test('responds to /pokemon/:pokemon', async () => {
    const res = await request(app).get('/pokemon/moltres');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(mockResponse)
  });
  test('Should respond with a 404 if pokemon is not found', async () => {
    const res = await request(app).get('/pokemon/test');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(404);
    expect(res.body).toEqual({message: 'Not Found'})
  });
});
