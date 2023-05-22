import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "8b4be9ecbdf08f0600a7e479c0aad6f9";
// const URL = "http://api.weatherapi.com/v1/current.json";
// const API_KEY = "6f72d21c30344a2ea7a95540232205";

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            // key: API_KEY,
            // q: query,
            q: query,
            units: "metric",
            appid: API_KEY
        }
    })
    return data;
}