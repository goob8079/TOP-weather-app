const API_KEY = "V7NAKSYNRZ9LTZHF3ZNDUQXVD";

export async function getWeaterData(location) {
    if (!location) {
        throw new Error("The city is required!");
    }

    try {
        let cityInfo = {};
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`);

        if (!response.ok) {
            throw new Error(`HTTP error --- status: ${response.status}`);
        }

        const weatherData = await response.json();
        console.log(weatherData);

        cityInfo.city = weatherData.address;
        cityInfo.temp = weatherData.currentConditions.temp;
        cityInfo.description = weatherData.currentConditions.conditions;
        cityInfo.feelsLike = weatherData.currentConditions.feelslike;
        cityInfo.precipitation = weatherData.currentConditions.precip || 0; // 0 if no precipitation
        cityInfo.wind = weatherData.currentConditions.windspeed;
        cityInfo.forecast = weatherData.days.slice(0, 7).map((day) => ({
            date: day.datetime,
            temp: day.temp,
            conditions: day.conditions,
            icon: day.icon,
        }));

        return cityInfo;
    } catch (err) {
        console.error("Error retrieving weather data:", err);
        return null;
    }
}