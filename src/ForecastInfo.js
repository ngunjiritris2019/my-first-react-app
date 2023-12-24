import React from "react";
import FormattedDate from "./FormattedDate";

function ForecastInfo(props) {
  return (
    <div className="ForecastInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6 props.data">
          <img src={props.data.icon} alt={props.data.description} />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C| °F</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: </li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ForecastInfo;
