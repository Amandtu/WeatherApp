import React from "react";

class Weather extends React.Component {
  render() {
    if (!this.props.city) return null;
    return (
      <div>
        <p>
          Location: {this.props.city},{this.props.country}
        </p>
        <p>Temperature: {this.props.temperature}</p>
        <p>Humidity: {this.props.humidity}</p>
        <p>Conditions: {this.props.description}</p>
      </div>
    );
  }
}

export default Weather;
