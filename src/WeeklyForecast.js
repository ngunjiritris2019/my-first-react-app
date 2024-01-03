import React from "react";
import WeatherIcon from "./WeatherIcon";

function WeeklyForecast(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="DailyForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={34} />
      <div className="DailyForecast-temperatures">
        <span className="DailyForecast-max-temp">
          {Math.round(props.data.temp.max)}°C
        </span>{" "}
        |{" "}
        <span className="DailyForecast-min-temp">
          {Math.round(props.data.temp.min)}°C
        </span>
      </div>
    </div>
  );
}

export default WeeklyForecast;
