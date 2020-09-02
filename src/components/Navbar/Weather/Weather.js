import React, { useState, useEffect } from "react";

import "./Weather.css";

import WEATHER_SERVICE from "../../../services/WeatherService";

const WeatherWidget = () => {
  const [weather, setWeather] = useState({ weatherInfo: "", locationInfo: "" });
  useEffect(
    () =>
      window.navigator.geolocation.getCurrentPosition((location) => {
        WEATHER_SERVICE.returnLocation(location).then((userLocation) => {
          WEATHER_SERVICE.returnWeather({
            lat: location.coords.latitude,
            lon: location.coords.longitude,
          }).then((weather) => {
            setWeather({
              weatherInfo: weather.data,
              locationInfo: userLocation.data.location,
            });
          });
        });
      }),
    []
  ); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      <div id="weather-widget" className="flex-center nav-logo">
        It's currently {Math.round(weather.weatherInfo) + "°F"} in{" "}
        {weather.locationInfo}.
      </div>
    </>
  );
};

export default WeatherWidget;
