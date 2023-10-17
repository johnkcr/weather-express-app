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
   * Fetch weather data by given city and state.
   *
   * @param city - Name of the city.
   * @param state - Name of the state.
   * @returns Weather data.
   */
  public async getWeatherByCityAndState(city: string, state: string) {
    return this.fetchWeatherData(`/weather?q=${city},${state}`);
  }

  /**
   * Fetch weather data by given zip code.
   *
   * @param zip - Zip code.
   * @param countryCode - Country code. Default is 'us'.
   * @returns Weather data.
   */
  public async getWeatherByZipCode(zip: string, countryCode: string = 'us') {
    return this.fetchWeatherData(`/weather?zip=${zip},us`);
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
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log({error})
      throw new Error('Unable to fetch weather data');
    }
  }
}