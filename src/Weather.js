import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

function Weather() {
  const [forecast, setForecast] = useState({ ready: false });

  function displayForecast(response) {
    setForecast({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (forecast.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control "
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-secondary"
              />
            </div>
          </div>
        </form>
        <h1>Nairobi</h1>
        <ul>
          <li>
            <FormattedDate date={forecast.date} />
          </li>
          <li className="text-capitalize">{forecast.description}</li>
        </ul>
        <div className="row">
          <div className="col-6 forecast">
            <img src={forecast.icon} alt={forecast.description} />
            <span className="temperature">
              {Math.round(forecast.temperature)}
            </span>
            <span className="unit">°C| °F</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: </li>
              <li>Humidity: {forecast.humidity}%</li>
              <li>Wind: {Math.round(forecast.wind)}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "2513f3c728b1b5ff4f4347e1a6af22b8";
    let city = "Nairobi";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);

    return "Loading...";
  }
}
export default Weather;
