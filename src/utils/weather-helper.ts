import { WeatherStatus } from "../types/weather";

export function determineWeatherStatus(temperature: number, condition: string): WeatherStatus {
  let temperatureStatus: 'cold' | 'warm' | 'hot';
  let weatherCondition: 'rainy' | 'snow' | 'sunny';

  if (temperature <= 5) {
      temperatureStatus = 'cold';
  } else if (temperature > 5 && temperature <= 20) {
      temperatureStatus = 'warm';
  } else {
      temperatureStatus = 'hot';
  }

  switch (condition) {
      case 'Rain':
          weatherCondition = 'rainy';
          break;
      case 'Snow':
          weatherCondition = 'snow';
          break;
      case 'Clear':
          weatherCondition = 'sunny';
          break;
      default:
          weatherCondition = 'sunny'; 
  }

  return {
      temperatureStatus,
      weatherCondition
  };
}