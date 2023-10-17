import request from 'supertest';
import app from '../../../../src/app';
import * as WeatherController from '../../../../src/controllers/weather.controller';

// Mock the controller
jest.mock('../../../../src/controllers/weather.controller');

describe('Weather API', () => {

  beforeEach(() => {
      (WeatherController.getWeatherData as jest.Mock).mockClear();
  });

  it('should fetch weather data by city and state', async () => {
      (WeatherController.getWeatherData as jest.Mock).mockImplementation((req, res) => {
          res.status(200).json({ temperature: 25 });
      });

      const res = await request(app)
          .get('/api/v1/weather')
          .query({ lat: '3.5', lon: '4.5' });
      
      expect(res.status).toBe(200);
      expect(res.body).toEqual({ temperature: 25 });
  });

});