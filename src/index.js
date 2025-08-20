import "/src/style.css";
import { getWeaterData } from "./weather-api";
import { displayWeather } from "./displayWeather";

const locationInput = document.querySelector("#location-input");
const submit = document.querySelector("#submit-btn");

submit.addEventListener("click", (e) => {
    e.preventDefault();
    displayWeather(locationInput.value);
    locationInput.value = "";
});