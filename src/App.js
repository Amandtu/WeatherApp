import React, { Component } from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import "./app.css";

const API_KEY = "b4e4d12af42a7afeb434cea020935a0a";
const URL = "https://api.openweathermap.org/data/2.5/weather?q=";

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    try {
      const api_call = await fetch(
        URL + `${city},${country}&APPID=${API_KEY}&units=metric`
      );
      if (api_call.status === 200) {
        const data = await api_call.json();
        console.log(data);
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        });
      } else {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: api_call.statusText
        });
      }
    } catch (err) {
      alert(err);
    }
  };

  render() {
    return (
      <div className="app">
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
