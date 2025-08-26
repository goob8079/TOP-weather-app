import { getWeaterData } from "./weather-api";

const cityDiv = document.querySelector(".city-div");
const form = document.querySelector("form");

export async function displayWeather(city) {
    let isF = true;
    const cityInfo = await getWeaterData(city);
    
    if (!cityInfo) {
        throw new Error("No weather data available");
    }

    function toCelcius(f) {
        return parseFloat((f- 32) * (5/9)).toFixed(1);
    }
    const forecastTempList = [];
    
    const celciusBtn = document.createElement("button");
    celciusBtn.setAttribute("id", "celcius-btn");
    celciusBtn.textContent = "°C"
    celciusBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (isF === true) {
            isF = false;
            cityTemp.textContent = `Temperature: ${toCelcius(cityInfo.temp)}°C`;
            cityFeelsLike.textContent = `Feels like: ${toCelcius(cityInfo.feelsLike)}°C`;
            forecastTempList.forEach((day, i) => {
                day.textContent = `Temp: ${toCelcius(cityInfo.forecast[i].temp)}°C`;
            });
        }
    });
    
    const fahrenheitBtn = document.createElement("button");
    fahrenheitBtn.setAttribute("id", "fahrenheit-btn");
    fahrenheitBtn.textContent = "°F";
    fahrenheitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (isF === false) {
            isF = true;
            cityTemp.textContent = `Temperature: ${cityInfo.temp}°F`;
            cityFeelsLike.textContent = `Feels Like: ${cityInfo.feelsLike}°F`;
            forecastTempList.forEach((day, i) => {
                day.textContent = `Temp: ${cityInfo.forecast[i].temp}°C`;
            });
        }
    });
    
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
        dayTemp.textContent = isF ? `Temp: ${day.temp}°F` : `Temp: ${toCelcius(day.temp)}°C`;

        forecastTempList.push(dayTemp)

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
    
    form.appendChild(celciusBtn, fahrenheitBtn);
    cityAddressDiv.appendChild(cityAddress,
        cityTemp,
        cityDesc,
        cityFeelsLike,
        cityPrecip,
        cityWind,
        cityAddressDiv,
        cityForecast
    );
    cityDiv.appendChild(cityAddressDiv, cityForecast);
}
