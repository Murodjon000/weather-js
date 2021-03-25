const units = 'metric';
const weather = 'weather';
const forecast = 'forecast';
const apiKey = 'f58a5dabce15f90651f48675d3fccb22';

const fetchWeather = async (city) => {
  const baseUrl = `https://api.openweathermap.org/data/2.5/${weather}`;
  const query = `?q=${city}&units=${units}&appid=${apiKey}`;
  const response = await fetch(baseUrl + query);
  const data = await response.json();
  if (data.cod === 200) {
    document.querySelector('.error-text').style.display = 'none';
    return data;
  }
  document.querySelector('.error-text').style.display = 'block';
  throw new Error('City not found. Please try again.');
};

const fetchWeatherForecast = async (city) => {
  const baseUrl = `https://api.openweathermap.org/data/2.5/${forecast}`;
  const query = `?q=${city}&units=${units}&appid=${apiKey}`;
  const response = await fetch(baseUrl + query);
  const data = await response.json();
  return { data };
};
export { fetchWeather, fetchWeatherForecast };
