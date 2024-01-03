import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css";
import axios from "axios";

function DailyForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "2513f3c728b1b5ff4f4347e1a6af22b8";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="DailyForecast">
      <div className="row">
        <div className="col">
          <div className="DailyForecast-day">Thur</div>
          <WeatherIcon code="09d" size={34} />
          <div className="DailyForecast-temperatures">
            <span className="DailyForecast-max-temp">20°C</span> |{" "}
            <span className="DailyForecast-min-temp">17°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyForecast;
