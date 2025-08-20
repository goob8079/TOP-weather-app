import "/src/style.css";
import { weatherApp } from "./weatherApp";

const locationInput = document.querySelector("#location-input").value;
const submit = document.querySelector("#submit-btn");

submit.addEventListener("click", () => weatherApp(locationInput));