import axios from 'axios';

const api_key = "287de475be37912e73b181c6ef7feb1b";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${api_key}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  // Redux- Promise takes care of request promise ( unravels )

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
