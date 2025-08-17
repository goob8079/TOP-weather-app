const locationInput = document.querySelector("#location-input").value;
const submit = document.querySelector("#submit-btn");

async function weatherApp(location) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=V7NAKSYNRZ9LTZHF3ZNDUQXVD`);
        const weatherData = await response.json();
        console.log(weatherData);
    } catch (err) {
        console.error(err);
    }
}

submit.addEventListener("click", () => weatherApp(locationInput));