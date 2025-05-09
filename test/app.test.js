const request = require('supertest');
const app = require('../app');

describe('GET /time', () => {
    it('responds with current time', async () => {
        const res = await request(app).get('/time');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('time');
    });
});
