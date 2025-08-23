import { getWeaterData } from "./weather-api";

const cityDiv = document.querySelector(".city-div");

export async function displayWeather(city) {
    const cityInfo = await getWeaterData(city);

    if (!cityInfo) {
        throw new Error("No weather data available");
    }

    const cityAddressDiv = document.createElement("div");
    cityAddressDiv.setAttribute("class", "city-address-div");

    const cityAddress = document.createElement("p");
    cityAddress.setAttribute("id", "city-address");
    cityAddress.textContent = `City: ${cityInfo.city}`;

    const cityTemp = document.createElement("p");
    cityTemp.setAttribute("id", "city-temp");
    cityTemp.textContent = `Temperature: ${cityInfo.temp}°F`;

    const cityDesc = document.createElement("p");
    cityDesc.setAttribute("id", "city-description");
    cityDesc.textContent = `Description: ${cityInfo.description}`;

    const cityFeelsLike = document.createElement("p");
    cityFeelsLike.setAttribute("id", "city-feels");
    cityFeelsLike.textContent = `Feels Like: ${cityInfo.feelsLike}°F`;

    const cityPrecip = document.createElement("p");
    cityPrecip.setAttribute("id", "city-precip");
    cityPrecip.textContent = `Precipitation: ${cityInfo.precipitation}`;

    const cityWind = document.createElement("p");
    cityWind.setAttribute("id", "city-wind");
    cityWind.textContent = `Wind: ${cityInfo.wind}`;

    const cityForecast = document.createElement("div");
    cityForecast.setAttribute("class", "city-forecast-div");
    const cityForecastP = document.createElement("p");
    cityForecastP.setAttribute("id", "city-forecast-title");
    cityForecastP.textContent = "7 Day Forecast";
    cityForecast.appendChild(cityForecastP);

    cityInfo.forecast.forEach(day => {
        const cityForecastDay = document.createElement("div");
        cityForecastDay.setAttribute("id", "city-forecast-day");

        const dayDate = document.createElement("p");
        dayDate.textContent = day.date;

        const dayTemp = document.createElement("p");
        dayTemp.textContent = day.temp;

        const dayConditions = document.createElement("p");
        dayConditions.textContent = day.conditions;

        const dayIcon = document.createElement("p");
        dayIcon.textContent = day.icon;

        cityForecastDay.appendChild(dayDate);
        cityForecastDay.appendChild(dayTemp);
        cityForecastDay.appendChild(dayConditions);
        cityForecastDay.appendChild(dayIcon);
        cityForecast.appendChild(cityForecastDay);
    });
    

    cityAddressDiv.appendChild(cityAddress);
    cityAddressDiv.appendChild(cityTemp);
    cityAddressDiv.appendChild(cityDesc);
    cityAddressDiv.appendChild(cityFeelsLike);
    cityAddressDiv.appendChild(cityPrecip);
    cityAddressDiv.appendChild(cityWind);
    cityDiv.appendChild(cityAddressDiv);
    cityDiv.appendChild(cityForecast);
}