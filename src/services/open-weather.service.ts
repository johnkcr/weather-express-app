import axios from 'axios';
import { appConfig } from '../config/constants';

// Constants for the OpenWeather API
const OPENWEATHER_BASE_URL = appConfig.openWeatherAPI.baseUrl;
const OPENWEATHER_API_KEY = appConfig.openWeatherAPI.apiKey;

export class OpenWeatherService {

  /**
   * Fetch weather data by given coordinates.
   *
   * @param lat - Latitude.
   * @param lon - Longitude.
   * @returns Weather data.
   */
  public async getWeatherByCoordinates(lat: number, lon: number) {
    return this.fetchWeatherData(`/onecall?lat=${lat}&lon=${lon}`);
  }

  /**
   * General method to fetch weather data from the OpenWeather API.
   *
   * @param endpoint - Specific endpoint with query parameters.
   * @returns Weather data.
   * @throws Error if unable to fetch the data.
   */
  private async fetchWeatherData(endpoint: string) {
    try {
      const url = `${OPENWEATHER_BASE_URL}${endpoint}&appid=${OPENWEATHER_API_KEY}`;
      console.log({url});
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log({error})
      throw new Error('Unable to fetch weather data');
    }
  }
}