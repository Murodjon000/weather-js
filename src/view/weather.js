const cityName = document.querySelector('.city-name');
const currentTime = document.querySelector('.current-time');
const cityDegree = document.querySelector('.city-degree');
const cityWeather = document.querySelector('.city-weather');
const windSpeed = document.querySelector('.wind-speed');
const pressureWeather = document.querySelector('.pressure');
const humadity = document.querySelector('.humadity');
const todayIcon = document.querySelector('.today-icon');
const windTitle = document.querySelector('.wind-title');
const windMes = document.querySelector('.wind-mes');
const pressureTitle = document.querySelector('.pressure-title');
const pressureMes = document.querySelector('.pressure-mes');
const humadityTitle = document.querySelector('.humadity-title');
const humadityMes = document.querySelector('.humadity-mes');
const changeBox = document.querySelector('.change-box');

const currentCityTime = (timezone) => {
  const date = new Date();
  const utcTime = date.getTime() + date.getTimezoneOffset() * 60000;
  const timeOffset = timezone / 3600;
  const format = {
    weekday: 'long',
    date: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  const foreignTime = new Date(
    utcTime + 3600000 * timeOffset,
  ).toLocaleDateString('en-US', format);
  return foreignTime;
};
const button = document.createElement('button');
const weatherUpdate = (data, units) => {
  const { name, timezone } = data;
  const { description } = data.weather[0];
  const { icon } = data.weather[0];
  const { speed } = data.wind;
  const { humidity, pressure } = data.main;
  let { temp } = data.main;
  cityName.innerHTML = name;
  cityWeather.innerHTML = description;
  windSpeed.innerHTML = speed;
  currentTime.innerHTML = currentCityTime(timezone);
  humadity.innerHTML = humidity;
  pressureWeather.innerHTML = pressure;
  cityDegree.innerHTML = `${temp}&degC`;
  todayIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" class="icon-weather" alt="weather-icon">`;
  windTitle.innerHTML = 'Wind';
  windMes.innerHTML = 'M/S';
  humadityTitle.innerHTML = 'Humadity';
  humadityMes.innerHTML = '%';
  pressureTitle.innerHTML = 'Pressure';
  pressureMes.innerHTML = 'hPa';

  changeBox.appendChild(button);
  const classes = ['btn', 'btn-outline-warning', 'px-3', 'mr-2', 'mt-2'];
  button.classList.add(...classes);
  button.innerHTML = 'Fahrenheit';
  const tempF = (temp * 1.8 + 32).toFixed(2);
  const tempC = temp;
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const elm = e.target;
    if (units === 'imperial') {
      temp = tempC;
      cityDegree.innerHTML = `${temp}&degC`;
      units = 'metric';
      elm.innerHTML = 'Fahrenheit';
    } else {
      temp = tempF;
      cityDegree.innerHTML = `${temp}&degF`;
      units = 'imperial';
      elm.innerHTML = 'Celcius';
    }
  });
};

export default weatherUpdate;
