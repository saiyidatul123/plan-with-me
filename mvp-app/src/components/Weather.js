import React, { useState } from "react";
import "./Weather.css";

export default function Weather() {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState([]);
  const [temp, setTemp] = useState([]);
  const [error, setError] = useState("");

  const handleChange = event => {
    // handle key presses
    const location = event.target.value;
    setLocation(location);
  };

  const handleSubmit = e => {
    // handle form submit
    e.preventDefault();
    // alert("form button clicked!\n\nCity entered is " + location);

    setLoading(() => {
      if (loading === "") {
        return true;
      } else {
        return error;
      }
    });

    fetchWeather_Await();
  };

  // call Open Weather API
  const API_KEY = '120f0798d467c7f48d0bee3bc8988074';
  const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  //async @ await
  async function fetchWeather_Await() {
    // let weather = [];

    try {
      let response = await fetch(WEATHER_URL);
      if (response.ok) {
        // Acknowledgement (but no data yet) received from server
        let data = await response.json(); // wait for data
        console.log(data);
        setWeather(data.weather[0]);
        setTemp(data.main);
      } else {
        // Server responded, couldn't satisfy request
        console.log("Server responded:", response.status, response.statusText);
      }
    } catch (err) {
      // Server not contacted
      console.log("Server not contacted:", err.message);
    }
  }

  return (
    <div className="weather">
      <h1>Hello World!</h1>
      <label className="someText">How's the weather today?</label>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit}>
        <label className="location-input">
          Enter city:&nbsp;
          <input type="text" value={location} onChange={e => handleChange(e)} />
        </label>
        <button>SUBMIT</button>
        <br></br>
        <br></br>
      </form>
      {weather.main && (
        <label className="weather-output">
          Today's weather in {location}
          <br></br>
          <img
            src="https://image.flaticon.com/icons/png/512/3208/3208752.png"
            width="25"
            height="25"
          />
          {weather.main}
          <br></br>
          Just {weather.description}...
          <br></br>
          <br></br>
          <br></br>
          Temperature: {Math.round(temp.temp - 273.15)}°C
          <br></br>
          Feels like: {Math.round(temp.feels_like - 273.15)}°C
        </label>
      )}
    </div>
  );
}
