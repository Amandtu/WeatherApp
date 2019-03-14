import React from "react";

const Form = props => {
  return (
    <div>
      <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="City..." required />
        <input type="text" name="country" placeholder="Country..." required />
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
};

export default Form;
