import axios from "axios";
import React from "react";
import { AuthContext } from "../../../context/index";

const weatherEndpoint = process.env.WEATHER_API_KEY;

const WeatherWidget = () => {
  return (
    <AuthContext.Consumer>
      {(context) => {
        const { lat, lon } = context.state.location;
        console.log(
          axios
            .get(
              `https://api.opeweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${weatherEndpoint}`
            )
            .then((weather) => console.log(weather))
            .catch((errorMessage) => console.log(errorMessage))
        );
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
