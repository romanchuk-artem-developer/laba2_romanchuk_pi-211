const request = require('supertest');
const app = require('../index'); // Import app from index.js

describe('GET /', () => {
  it('should return "Hello World"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toEqual('Hello World');
  });

  it('should return custom response text from .env file', async () => {
    process.env.RESPONSE_TEXT = 'Custom Response';
    const response = await request(app).get('/');
    expect(response.text).toEqual('Custom Response');
  });
});
