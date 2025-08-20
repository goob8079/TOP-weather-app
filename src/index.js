import "/src/style.css";
import { weatherApp } from "./weatherApp";

const locationInput = document.querySelector("#location-input");
const submit = document.querySelector("#submit-btn");

submit.addEventListener("click", (e) => {
    e.preventDefault();
    weatherApp(locationInput.value)
});