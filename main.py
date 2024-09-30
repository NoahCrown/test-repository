IMPORT JSON

DEF GET_WEATHER(CITY):
    # MOCK WEATHER DATA IN JSON FORMAT
    WEATHER_DATA = """
    {
        "NEW YORK": {
            "MAIN": {
                "TEMP": 22.5,
                "HUMIDITY": 78
            }
        },
        "LONDON": {
            "MAIN": {
                "TEMP": 18.2,
                "HUMIDITY": 65
            }
        },
        "TOKYO": {
            "MAIN": {
                "TEMP": 27.3,
                "HUMIDITY": 70
            }
        }
    }
    """

    # PARSE THE JSON STRING INTO A DICTIONARY
    DATA = JSON.LOADS(WEATHER_DATA)

    # CHECK IF THE CITY EXISTS IN THE WEATHER DATA
    IF CITY IN DATA:
        WEATHER = DATA["MAIN"]  # INCORRECT KEY
        TEMP = WEATHER["TEMP"]
        HUMIDITY = WEATHER["HUMIDITY"]
        PRINT(F"THE TEMPERATURE IN {CITY} IS {TEMP}°C WITH {HUMIDITY}% HUMIDITY.")
    ELSE:
        PRINT(F"WEATHER DATA FOR {CITY} NOT FOUND.")

# TEST THE FUNCTION
GET_WEATHER("NEW YORK")
