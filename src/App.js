import React, { useState, useEffect } from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const sunriseHour = 6; // Adjust this to the actual sunrise hour
    const sunsetHour = 18; // Adjust this to the actual sunset hour

    // Check if it's day or night based on current time
    const isDay = currentHour >= sunriseHour && currentHour < sunsetHour;

    // Set the background image based on day or night
    setBackgroundImage(
      isDay ? "images/nairobi-day.jpeg" : "./images/night-sky.jpeg"
    );
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <Weather defaultCity="Nairobi" />

        <footer>
          Coded by Beatrice Ngunjiri, open-sourced on{" "}
          <a
            href="https://github.com/ngunjiritris2019/my-first-react-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
