const request = require('supertest');
const app = require('../../src/app');

describe('GET /exercise1', () => {
  it(`should return from 1 to 100, Visual when divisible by 3, Nuts when divisible by 
        5 and Visual Nuts when divisible by both`, async () => {
    const response = await request(app).get('/exercise1');

    const { status, body } = response;

    expect(status).toBe(200);

    expect(body).toHaveLength(100);

    expect(body[0]).toEqual({ number: 1 });
    expect(body[2]).toEqual({ number: 3, print: 'Visual' });
    expect(body[4]).toEqual({ number: 5, print: 'Nuts' });
    expect(body[14]).toEqual({ number: 15, print: 'Visual Nuts' });
    expect(body[99]).toEqual({ number: 100, print: 'Nuts' });
  });

  it(`should return from 1 to 15, Visual when divisible by 3, Nuts when divisible by 
    5 and Visual Nuts when divisible by both`, async () => {
    const response = await request(app).get('/exercise1?number=15');

    const { status, body } = response;

    expect(status).toBe(200);

    expect(body).toHaveLength(15);

    expect(body[0]).toEqual({ number: 1 });
    expect(body[2]).toEqual({ number: 3, print: 'Visual' });
    expect(body[4]).toEqual({ number: 5, print: 'Nuts' });
    expect(body[14]).toEqual({ number: 15, print: 'Visual Nuts' });
  });
});
