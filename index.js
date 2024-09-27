function getWeather(city) {
    // Mock weather data
    const weatherData = `{
      "New York": {
        "main": {
          "temp": 22.5,
          "humidity": 78
        }
      },
      "London": {
        "main": {
          "temp": 18.2,
          "humidity": 65
        }
      },
      "Tokyo": {
        "main": {
          "temp": 27.3,
          "humidity": 70
        }
      }
    }`;
  
    // Parse the JSON string
    const data = JSON.parse(weatherData);
  
    // Check if city exists in the data
    if (data.city) {
      const weather = data.city.main;  // Incorrect key reference
      const temp = weather.temp;
      const humidity = weather.humidity;
      console.log(`The temperature in ${city} is ${temp}°C with ${humidity}% humidity.`);
    } else {
      console.log("Weather data for " + city + " not found.");
    }
  }
  
  // Test the function
  getWeather("New York");
  