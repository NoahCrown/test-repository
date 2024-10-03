import json

def get_weather(city):
    # Mock weather data in JSON format
    weather_data = """
    {
        "New Yrk": {
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
    }
    """

    # Parse the JSON string into a dictionary
    data = json.loads(weather_data)

    # Check if the city exists in the weather data
    if city in data:
        weather = data["main"]  # Incorrect key
        temp = weather["temp"]
        humidity = weather["humidity"]
        print(f"The temperature in {city} is {temp}°C with {humidity}% humidity.")
    else:
        print(f"Weather data for {city} not found.")

# Test the function
get_weather("New York")
