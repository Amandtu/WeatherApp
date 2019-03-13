import React, { Component } from "react";
import "../app.css";

class Form extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    city: undefined,
    country: undefined
  };

  render() {
    return (
      <div className="form">
        <form onSubmit={this.props.getWeather}>
          <label htmlFor="city">City</label>
          <input
            value={this.state.city}
            onChange={event => {
              this.setState({ city: event.target.value });
            }}
            type="text"
            name="city"
            placeholder="City..."
          />
          <label htmlFor="country">Country</label>
          <input
            value={this.state.country}
            onChange={event => {
              this.setState({ country: event.target.value });
            }}
            type="text"
            name="country"
            placeholder="Country..."
          />
          <button className="btn">Get Weather</button>
        </form>
      </div>
    );
  }
}

export default Form;
