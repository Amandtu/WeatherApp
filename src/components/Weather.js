import React from "react";
import "../app.css";

const Weather = props => {
  if (props.error) return <p className="weather">{props.error}</p>;
  else if (!props.city) return null;
  else {
    return (
      <div className="weather">
        <p>
          Location: {props.city},{props.country}
        </p>
        <p>Temperature: {props.temperature}&#8451;</p>
        <p>Humidity: {props.humidity}% </p>
        <p>Conditions: {props.description}</p>
      </div>
    );
  }
};

export default Weather;
