import React from "react";
import { AuthContext } from "../../../context/index";
import WEATHER_SERVICE from "../../../services/WeatherService";

const WeatherWidget = () => {
  return (
    <AuthContext.Consumer>
      {(context) => {
        const { location } = context.state;
        let test = (location) => WEATHER_SERVICE.returnWeather(location);
        test(location);
        return (
          <>
            <div className="flex-center nav-logo">
              <div className="logo-divider pl-5 mx-2"></div>{" "}
              <div className="text-divider">
                <span className="hello-user">Test</span>
              </div>
            </div>
          </>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default WeatherWidget;
