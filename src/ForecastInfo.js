import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import UnitConversion from "./UnitConversion";
import "./ForecastInfo.css";

function ForecastInfo(props) {
  return (
    <div className="ForecastInfo">
      <h1>{props.data.city}</h1>
      <ul className="weather-info">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6 props.data">
          <WeatherIcon code={props.data.icon} size={60} />
          <span className="temperature">
            <UnitConversion celsius={props.data.temperature} />
          </span>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels-like: {Math.round(props.data.feelslike)}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ForecastInfo;
