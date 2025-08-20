const API_KEY = "V7NAKSYNRZ9LTZHF3ZNDUQXVD";

export async function weatherApp(location) {
    if (!location) {
        throw new Error("The city is required!");
    }

    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`);

        if (!response.ok) {
            throw new Error(`HTTP error --- status: ${response.status}`);
        }

        const weatherData = await response.json();
        console.log(weatherData);
    } catch (err) {
        console.error(err);
    }
}