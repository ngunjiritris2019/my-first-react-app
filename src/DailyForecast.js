import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css";

function DailyForecast() {
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
