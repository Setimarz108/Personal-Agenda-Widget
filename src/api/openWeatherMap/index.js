const Key = "117a53594cb9a257a4814c897429b283"
const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${Key}&units=imperial`;

export const getWeather = async (city, state) => {
  const response = await fetch(`${API_URL}&q=${city},${state}`);
  const json = await response.json();

  return {
    weatherMetadata: json.weather[0],
    temperature: json.main.temp
  };
};

const openWeatherMapApi = {
  getWeather
};

export default openWeatherMapApi;
