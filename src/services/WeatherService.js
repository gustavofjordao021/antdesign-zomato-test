import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_POINT;

const service = axios.create({
  baseURL,
  withCredentials: true,
});

const WEATHER_SERVICE = {
  returnWeather(locationInfo) {
    return service.post(`/app/return-weather`, { locationInfo });
  },
  returnLocation() {
    return service.post(`/app/return-location`);
  },
};

export default WEATHER_SERVICE;
