import React from "react";
import { useDispatch, useSelector } from "react-redux";
import WeatherCard from "./WeatherCard";
import { fetchWeatherData } from "../../Redux/Features/Weather/WeatherSlice";

const Weather = () => {
  const { weatherData, loading, error } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const city = form.city.value;
    if (city.trim() === "") return;

    dispatch(fetchWeatherData(city));
    console.log(city);
    form.reset();
  };

  return (
    <div className="">
      <div className="">
        <h1 className="text-4xl font-bold text-center">Weather Dashboard</h1>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <div className="flex gap-2 items-center justify-center">
            <input
              className="input"
              name="city"
              type="text"
              placeholder="Enter Your City"
            />
            <button className="btn btn-info ">Search Weather</button>
            <button className="btn btn-error">Clear</button>
          </div>
        </form>

        <div className="mt-5 mb-5">
          {loading && (
            <p className="text-center text-blue-300">loading.......</p>
          )}
          {error && <p className="text-center text-error">{error}</p>}
        </div>

        <div className="flex gap-5 flex-wrap justify-center">
          {weatherData.map((data, index) => (
            <WeatherCard
              key={index}
              city={data.name}
              temp={data.main.temp}
              description={data.weather[0].description}
            ></WeatherCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weather;
