FUNCTION GETWEATHER(CITY) {
    // MOCK WEATHER DATA
    CONST WEATHERDATA = `{
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
    }`;
  
    // PARSE THE JSON STRING
    CONST DATA = JSON.PARSE(WEATHERDATA);
  
    // CHECK IF CITY EXISTS IN THE DATA
    IF (DATA.CITY) {
      CONST WEATHER = DATA.CITY.MAIN;  // INCORRECT KEY REFERENCE
      CONST TEMP = WEATHER.TEMP;
      CONST HUMIDITY = WEATHER.HUMIDITY;
      CONSOLE.LOG(`THE TEMPERATURE IN ${CITY} IS ${TEMP}°C WITH ${HUMIDITY}% HUMIDITY.`);
    } ELSE {
      CONSOLE.LOG("WEATHER DATA FOR " + CITY + " NOT FOUND.");
    }
  }
  
  // TEST THE FUNCTION
  GETWEATHER("NEW YORK");
  