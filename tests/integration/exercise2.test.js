const request = require('supertest');
const app = require('../../src/app');

const countriesData = [
  {
    country: 'US',
    languages: ['en'],
  },
  {
    country: 'DE',
    languages: ['de'],
  },
  {
    country: 'BE',
    languages: ['nl', 'fr', 'de'],
  },
  {
    country: 'NL',
    languages: ['nl'],
  },
  {
    country: 'ES',
    languages: ['es'],
  },
];

describe('GET /exercise2', () => {
  it(`should return 5, "BE" with languages, 5, "BE" with languages, "nl" and "de"`, async () => {
    const response = await request(app).get('/exercise2').send(countriesData);
    const { status, body } = response;

    expect(status).toBe(200);

    expect(body[0]).toEqual({ 'number of countries': 5 });

    expect(body[1]).toEqual({
      'country with the most official languages, where German (de) is spoken':
        {
          country: 'BE',
          languages: ['nl', 'fr', 'de'],
        },
    });

    expect(body[2]).toEqual({ 'official languages': 5 });

    expect(body[3]).toEqual({
      'country with the highest number of official languages': {
        country: 'BE',
        languages: ['nl', 'fr', 'de'],
      },
    });

    expect(body[4]).toEqual({
      'most common languages': ['nl', 'de'],
    });
  });
});
