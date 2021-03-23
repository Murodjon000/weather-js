const units = "metric";
const apiKey = process.env.APIKEY;
const fetchWeather = async (city) => {
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
  const query = `?q=${city}&units=${units}&appid=${apiKey}`;
  const response = await fetch(baseUrl + query);
  const data = await response.json();
  if (data.cod === 200) {
    document.querySelector(".error-text").style.display = "none";
    return data;
  } else {
    document.querySelector(".error-text").style.display = "block";
    throw new Error("City not found. Please try again.");
  }
};

export default fetchWeather;
