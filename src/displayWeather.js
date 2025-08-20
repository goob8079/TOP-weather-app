import { getWeaterData } from "./weather-api";

const cityDiv = document.querySelector(".city-div");

export async function displayWeather(city) {
    const cityInfo = await getWeaterData(city);

    if (!cityInfo) {
        throw new Error("No weather data available");
        return;
    }

    const cityAddressDiv = document.createElement("div");
    cityAddressDiv.setAttribute("id", "city-address-div");
    const cityAddress = document.createElement("p");
    cityAddress.setAttribute("id", "city-address");
    cityAddress.textContent = cityInfo.city;

    cityAddressDiv.appendChild(cityAddress);
    cityDiv.appendChild(cityAddressDiv);
}