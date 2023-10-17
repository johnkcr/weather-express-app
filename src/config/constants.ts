import * as dotenv from 'dotenv';
import * as path from 'path';
import * as Joi from 'joi';

dotenv.config({ path: path.join(__dirname, '../../.env') });

interface EnvVars {
  PORT: number;
  OPENWEATHER_BASE_URL: string;
  OPENWEATHER_API_KEY: string;
}

const envVarsSchema = Joi.object<EnvVars>()
  .keys({
    PORT: Joi.number().default(3000),
    OPENWEATHER_BASE_URL: Joi.string(),
    OPENWEATHER_API_KEY: Joi.string()
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export const appConfig = {
  port: envVars.PORT,
  openWeatherAPI: {
    baseUrl: envVars.OPENWEATHER_BASE_URL,
    apiKey: envVars.OPENWEATHER_API_KEY
  }
};