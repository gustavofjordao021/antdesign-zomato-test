import React, { useState, useEffect } from "react";

import "./Weather.css";

import WEATHER_SERVICE from "../../../services/WeatherService";

const WeatherWidget = () => {
  const [weather, setWeather] = useState({
    weatherInfo: "",
    locationInfo: "",
    weatherIcon: "",
  });
  useEffect(
    () =>
      window.navigator.geolocation.getCurrentPosition((location) => {
        WEATHER_SERVICE.returnLocation(location).then((userLocation) => {
          WEATHER_SERVICE.returnWeather({
            lat: location.coords.latitude,
            lon: location.coords.longitude,
          }).then((weather) => {
            setWeather({
              weatherInfo: weather.data.current.temp,
              locationInfo: userLocation.data.location,
              weatherIcon: weather.data.current.weather[0].icon,
            });
          });
        });
      }),
    [weather.weatherInfo, weather.locationInfo, weather.weatherIcon]
  ); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      <div id="weather-widget" className="flex-center nav-logo">
        <p>
          It's currently {Math.round(weather.weatherInfo) + "°F"}{" "}
          <img
            src={`http://openweathermap.org/img/wn/${weather.weatherIcon}@2x.png`}
            className="weather-icon"
            alt="weather-icon-logo"
          />{" "}
          in {weather.locationInfo}.
        </p>
      </div>
    </>
  );
};

export default WeatherWidget;
