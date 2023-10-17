import { OpenWeatherService } from "../../../src/services/open-weather.service";
import axios from "axios";

jest.mock('axios');  // Mocking axios to prevent real HTTP requests
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('OpenWeatherService', () => {
    let service: OpenWeatherService;

    beforeEach(() => {
        service = new OpenWeatherService();
    });

    it('should fetch weather by coordinates', async () => {
        // Mock axios response
        mockedAxios.get.mockResolvedValueOnce({ data: { temperature: 25 } });

        const result = await service.getWeatherByCoordinates(37.7749, -122.4194);
        expect(result).toHaveProperty('temperature', 25);
    });
});