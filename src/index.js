import 'bootstrap';
import 'jquery';
import { fetchWeather, fetchWeatherForecast } from './api/api';
import { weatherUpdate, forecastUpdate } from './view/weather';

const searchForm = document.getElementById('form');
const citySearch = document.getElementById('citySearch');
const units = 'metric';

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const cityValue = citySearch.value;
  searchForm.reset();
  fetchWeather(cityValue)
    .then((data) => {
      weatherUpdate(data, units);
    })
    .catch((err) => {
      document.querySelector('.error-text').textContent = err.message;
    });
  fetchWeatherForecast(cityValue)
    .then((data) => {
      forecastUpdate(data);
    })
    .catch((err) => {
      document.querySelector('.error-text').textContent = err.message;
    });
});

window.onload = async () => {
  fetchWeather('London')
    .then((data) => {
      weatherUpdate(data, units);
    })
    .catch((err) => {
      document.querySelector('.error-text').textContent = err.message;
    });
  fetchWeatherForecast('London')
    .then((data) => {
      forecastUpdate(data);
    })
    .catch((err) => {
      document.querySelector('.error-text').textContent = err.message;
    });
};
