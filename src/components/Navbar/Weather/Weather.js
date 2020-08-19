import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { AuthContext } from "../../../context/index";
import WEATHER_SERVICE from "../../../services/WeatherService";

const WeatherWidget = () => {
  const [weather, setWeather] = useState({});
  return (
    <AuthContext.Consumer>
      {(context) => {
        const { location } = context.state;
        return (
          <>
            <div className="flex-center nav-logo">
              <div className="text-divider">
                <Button
                  onClick={() => {
                    WEATHER_SERVICE.returnWeather(
                      location
                    ).then((infoWeather) => setWeather(infoWeather.data));
                    console.log(weather);
                  }}
                ></Button>
              </div>
            </div>
          </>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default WeatherWidget;
