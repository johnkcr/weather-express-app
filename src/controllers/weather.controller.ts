import { Request, Response } from 'express';
import { OpenWeatherService } from '../services/open-weather.service';
import { determineWeatherStatus } from '../utils/weather-helper';

const openWeatherService = new OpenWeatherService();

export const getWeatherData = async (req: Request, res: Response): Promise<void> => {
	try {
		const { lat, lon } = req.query;
		let weatherData;

		weatherData = await openWeatherService.getWeatherByCoordinates(parseFloat(lat as string), parseFloat(lon as string));

		const { temperatureStatus, weatherCondition } = determineWeatherStatus(weatherData.temperature, weatherData.condition);

		res.json({
			...weatherData,
			temperatureStatus,
			weatherCondition
		});

	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};