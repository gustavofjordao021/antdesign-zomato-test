import React, { useState } from "react";

import { AuthContext } from "../../../context/index";
import WEATHER_SERVICE from "../../../services/WeatherService";

const WeatherWidget = () => {
  const [weather, setWeather] = useState("");
  const [city, setCity] = useState("");
  return (
    <AuthContext.Consumer>
      {(context) => {
        const { location } = context.state;
        WEATHER_SERVICE.returnLocation().then((location) => {
          setCity(location.data.location);
        });
        WEATHER_SERVICE.returnWeather(location).then((weather) => {
          console.log(weather.data.weather);
          setWeather(weather.data.weather);
        });
        return (
          <>
            <div className="flex-center nav-logo">
              It's currently {Math.round(weather) + "°F"} in {city}.
            </div>
          </>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default WeatherWidget;
