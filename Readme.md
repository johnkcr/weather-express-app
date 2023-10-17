# Weather Express App

This is an Express.js-based application that interfaces with an external service to provide weather information. Users can retrieve weather data based on geographical coordinates, city and state, or zip code.

## Features

- **Geographical Coordinates**: Provide latitude and longitude to get specific weather details.
- **API Documentation**: Comprehensive API documentation available at \`/api/docs\`.

## Getting Started

### Prerequisites

- Node.js
- yarn (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/johnkcr/weather-express-app.git
```

2. Navigate to the project directory:
```bash
cd weather-express-app
```

3. Install the required dependencies:
```bash
yarn install
```

4. Start the server:
```bash
yarn start
```

The application should now be running on \`http://localhost:3000\` (or whichever port you've configured).

## API Endpoints

\`GET /api/v1/weather\`
Parameters:
- \`lat\` (optional): Latitude coordinate
- \`lon\` (optional): Longitude coordinate
- \`city\` (optional): City name
- \`state\` (optional): State or province name
- \`zip\` (optional): Zip code

Responses will include current temperature, weather conditions, and a generalized description of the temperature and weather conditions.

### API Documentation

Access the API documentation at \`http://localhost:3000/api/docs\` to get a comprehensive understanding of the available routes, request structures, and responses.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change. Ensure your changes do not break any existing functionality.

## License

This project is licensed under the MIT License. See the \`LICENSE\` file for details.