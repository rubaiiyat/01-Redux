import React from "react";

const WeatherCard = ({ city, temp, description }) => {
  return (
    <div>
      <div className="w-44 bg-gray-800 p-5 rounded-xl">
        <h1>{city}</h1>
        <p>{description}</p>
        <p>{temp}°C</p>
      </div>
    </div>
  );
};

export default WeatherCard;
