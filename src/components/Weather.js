import React from "react";

const Weather = props => {
  const { city, country, temperature, humidity, description, error } = props;
  return (
    <div className="weather">
      {city && country && (
        <p className="weather-key">
          Location:{" "}
          <span className="weather-value">
            {city},{country}
          </span>
        </p>
      )}
      {temperature && (
        <p className="weather-key">
          Temperature:{" "}
          <span className="weather-value">{temperature}&#8451;</span>
        </p>
      )}
      {humidity && (
        <p className="weather-key">
          Humidity: <span className="weather-value">{humidity}</span>
        </p>
      )}
      {description && (
        <p className="weather-key">
          Condition: <span className="weather-value">{description}</span>
        </p>
      )}
      {error && <p className="weather-error">{error}</p>}
    </div>
  );
};

export default Weather;
