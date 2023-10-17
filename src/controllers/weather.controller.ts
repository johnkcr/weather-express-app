import { Request, Response } from 'express';
import { OpenWeatherService } from '../services/open-weather.service';
import { determineWeatherStatus } from '../utils/weather-helper';

const openWeatherService = new OpenWeatherService();

export const getWeatherData = async (req: Request, res: Response): Promise<void> => {
	try {
		const { lat, lon, city, state, zip } = req.query;
		let weatherData;

		if (lat && lon) {
			weatherData = await openWeatherService.getWeatherByCoordinates(parseFloat(lat as string), parseFloat(lon as string));
		} else if (city && state) {
			weatherData = await openWeatherService.getWeatherByCityAndState(city as string, state as string);
		} else if (zip) {
			weatherData = await openWeatherService.getWeatherByZipCode(zip as string);
		} else {
			res.status(400).json({ error: 'Invalid input' });
		}

		const { temperatureStatus, weatherCondition } = determineWeatherStatus(weatherData.temperature, weatherData.condition);

		res.json({
			temperatureStatus,
			weatherCondition
		});

	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};