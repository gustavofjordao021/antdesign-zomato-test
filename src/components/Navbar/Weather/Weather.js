import React, { useState, useEffect } from "react";

import WEATHER_SERVICE from "../../../services/WeatherService";

const WeatherWidget = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [userLocation, setUserLocation] = useState({ lat: "", lon: "" });
  useEffect(
    () =>
      window.navigator.geolocation.getCurrentPosition(async (location) => {
        await setUserLocation({
          lat: location.coords.latitude,
          lon: location.coords.longitude,
        });
        await WEATHER_SERVICE.returnLocation(userLocation).then((location) => {
          setCity(location.data.location);
        });
        await WEATHER_SERVICE.returnWeather(userLocation).then((weather) => {
          setWeather(weather.data.weather);
        });
        console.log("User location ====> ", userLocation);
      }),
    [city, weather, userLocation]
  );
  return (
    <>
      <div className="flex-center nav-logo">
        It's currently {Math.round(weather) + "°F"} in {city}.
      </div>
    </>
  );
};

export default WeatherWidget;
