const cityName = document.querySelector(".city-name");
const currentTime = document.querySelector(".current-time");
const cityDegree = document.querySelector(".city-degree");
const cityWeather = document.querySelector(".city-weather");
const windSpeed = document.querySelector(".wind-speed");
const pressureWeather = document.querySelector(".pressure");
const humadity = document.querySelector(".humadity");
const todayIcon = document.querySelector(".today-icon");
const tempChangeBtn = document.querySelector(".temp-change-btn");

const currentCityTime = (timezone) => {
  const date = new Date();
  const utcTime = date.getTime() + date.getTimezoneOffset() * 60000;
  const timeOffset = timezone / 3600;
  const format = {
    weekday: "long",
    date: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const foreignTime = new Date(
    utcTime + 3600000 * timeOffset
  ).toLocaleDateString("en-US", format);
  return foreignTime;
};

const weatherUpdate = (data, units) => {
  console.log(data);
  const { name, timezone } = data;
  const description = data.weather[0].description;
  const icon = data.weather[0].icon;
  const { speed } = data.wind;
  const { humidity, pressure } = data.main;
  var temp = data.main.temp;
  console.log(description);
  cityName.innerHTML = name;
  cityWeather.innerHTML = description;
  windSpeed.innerHTML = speed;
  currentTime.innerHTML = currentCityTime(timezone);
  humadity.innerHTML = humidity;
  pressureWeather.innerHTML = pressure;
  cityDegree.innerHTML = `${temp}&degC`;
  todayIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" class="icon-weather" alt="weather-icon">`;
  tempChangeBtn.innerHTML = "Fahrenheit";
  var tempF = (temp * 1.8 + 32).toFixed(2);
  var tempC = temp;
  console.log(tempC, "111");
  tempChangeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    var elm = e.target;
    if (units == "metric") {
      temp = tempC;
      console.log(temp, "333");
      cityDegree.innerHTML = `${temp}&degC`;
      units = "imperial";
      elm.innerHTML = "Fahrenheit";
      console.log(units, "units");
    } else {
      temp = tempF;
      console.log(temp, "133");
      cityDegree.innerHTML = `${temp}&degF`;
      units = "metric";
      elm.innerHTML = "Celcius";
    }
  });
};

export default weatherUpdate;
