import { FETCH_WEATHER } from './types.js';
import axios from 'axios';


const API_KEY = '7720f74817ebb0eb877e6952e7034371'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city){
    //Action crators always have to return creators
    //An action is an object and ALWAYS has type
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url); //This is what is going to make the AJAX call. THis returns a promise. 

    console.log("Request in Action Creator is", request);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}