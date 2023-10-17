import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import v1Router from './api/v1';
import { appConfig } from './config/constants';

const app = express();

// Define the Swagger specification
const swaggerSpec = swaggerJSDoc({
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Weather Service API',
      version: '1.0.0',
      description: 'API to get weather information',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development Server',
      },
    ],
  },
  apis: ['./src/api/v1/*.ts'],
});

// Serve Swagger UI at the /docs route
app.use('/api/v1', v1Router);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start the Express server on the defined port
app.listen(appConfig.port, () => {
  console.log(`Server started on http://localhost:${appConfig.port}`);
});


export default app;