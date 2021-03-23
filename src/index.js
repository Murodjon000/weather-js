import "bootstrap";
import "jquery";
import fetchWeather from "./api/api.js";
import weatherUpdate from "./view/weather.js";
const searchForm = document.getElementById("form");
const citySearch = document.getElementById("citySearch");
var units = "metric";

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityValue = citySearch.value;
  searchForm.reset();
  console.log(cityValue);
  fetchWeather(cityValue)
    .then((data) => {
      weatherUpdate(data, units);
    })
    .catch((err) => {
      document.querySelector(".error-text").textContent = err.message;
    });
});

window.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  fetchWeather("London")
    .then((data) => {
      weatherUpdate(data, units);
    })
    .catch((err) => {
      return err;
    });
});
