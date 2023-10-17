import request from 'supertest';
import app from '../../../../src/app';

describe('Weather API', () => {
    it('should fetch weather data by city and state', async () => {
        const res = await request(app)
            .get('/api/v1/weather')
            .query({ lat: '3.5', lon: '4.5' });
        
        expect(res.status).toBe(200);
    });
});