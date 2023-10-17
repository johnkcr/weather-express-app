import { Router, Request, Response } from 'express';
import { getWeatherData } from '../../controllers/weather.controller';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Weather
 *   description: Weather information endpoints
 */

/**
 * @swagger
 * /api/v1/weather:
 *   get:
 *     summary: Get weather information by coordinates or location
 *     tags: [Weather]
 *     parameters:
 *       - in: query
 *         name: lat
 *         required: false
 *         description: Latitude coordinate
 *         type: number
 *       - in: query
 *         name: lon
 *         required: false
 *         description: Longitude coordinate
 *         type: number
 *     responses:
 *       '200':
 *         description: Successful retrieval of weather data.
 *         schema:
 *           type: object
 *           properties:
 *             temperature:
 *               type: number
 *               description: Current temperature in Celsius.
 *             condition:
 *               type: string
 *               description: Current weather condition, e.g., "Rain", "Snow", "Clear".
 *             temperatureStatus:
 *               type: string
 *               description: Generalized temperature status - 'cold', 'warm', or 'hot'.
 *             weatherCondition:
 *               type: string
 *               description: Generalized weather condition - 'rainy', 'snow', or 'sunny'.
 *       '400':
 *         description: Invalid input. Required parameters were not provided.
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 *       '500':
 *         description: Internal server error.
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 */
router
  .route('/')
  .get(getWeatherData);

export default router;