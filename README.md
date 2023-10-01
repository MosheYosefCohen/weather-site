# weather-site

This is a simple weather dashboard app that displays a 3-day weather forecast for the user's current location. It is built with HTML, CSS, and JavaScript.

## Features

- Fetches user's location using IP API
- Gets weather data from Open-Meteo API based on latitude and longitude
- Displays city name and country
- Shows 3-day forecast with weather icon, minimum temperature, and maximum temperature
- Weather icons change dynamically based on weather code from API
- Clean and responsive UI built with Flexbox

## Resources Used

- [IP API](https://ipapi.co/) - To get user's location
- [Open-Meteo API](https://open-meteo.com/en/docs) - To get weather forecast data
- SVG weather icons from [SVG Repo](https://www.svgrepo.com)

## Code Overview

### HTML

- Simple HTML structure with city name heading, forecast container and forecast cards
- Forecast cards contain day, weather icon, and temperature

### CSS 

- Flexbox for layout and responsiveness
- Custom properties for colors
- Box shadows, gradients, and borders for styling

### JavaScript

- Fetch user's location data using IP API
- Fetch 3-day weather forecast from Open-Meteo API using latitude and longitude
- Use weather code to dynamically set weather icon SVG source
- Display city name, weather icons, and temperature ranges

## Possible Improvements

- Add user input for location instead of detecting automatically
- Include additional weather data like humidity, wind, etc
- Add toggles for unit changes (Celsius vs Fahrenheit) 
- Improve accessibility with ARIA attributes and semantic HTML
- Cache API responses to improve performance
- Add link to source code on GitHub

Let me know if you would like me to expand or modify the README.md file in any way!
