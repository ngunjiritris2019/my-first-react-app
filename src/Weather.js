import React, { useState } from "react";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import "./Weather.css";
import ForecastInfo from "./ForecastInfo";
import DailyForecast from "./DailyForecast";

function Weather(props) {
  const [forecast, setForecast] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayForecast(response) {
    console.log(response.data);
    setForecast({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      feelslike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "2513f3c728b1b5ff4f4347e1a6af22b8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCitySearch(event) {
    setCity(event.target.value);
  }

  if (forecast.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control "
                autoFocus="on"
                onChange={handleCitySearch}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-info" />
            </div>
          </div>
        </form>
        <ForecastInfo data={forecast} />
        <DailyForecast />
      </div>
    );
  } else {
    search();
    return (
      <InfinitySpin
        visible={true}
        width="200"
        color="#49D2F2"
        ariaLabel="infinity-spin-loading"
      />
    );
  }
}
export default Weather;
