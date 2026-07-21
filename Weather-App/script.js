const apiKey = "ffaa0c4dfcfcf847809dac82a889a079";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const locationBtn = document.getElementById("locationBtn");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");

const city = document.getElementById("city");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const feelsLike = document.getElementById("feelsLike");
const pressure = document.getElementById("pressure");
const visibility = document.getElementById("visibility");
const weatherIcon = document.getElementById("weatherIcon");
const errorMessage = document.getElementById("errorMessage");
searchBtn.addEventListener("click", () => {
    getWeather(cityInput.value);
});

cityInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        getWeather(cityInput.value);
    }
});

locationBtn.addEventListener("click", () => {
    if (!navigator.geolocation) {
        errorMessage.textContent = "Geolocation is not supported by your browser.";
        return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (!response.ok) {
                errorMessage.textContent = data.message;
                return;
            }

            displayWeather(data);

        } catch (error) {
            errorMessage.textContent = "Unable to get your location weather.";
        }
    });
});

async function getWeather(cityName) {

    if (cityName.trim() === "") {
        errorMessage.textContent = "Please enter a city name.";
        return;
    }

    errorMessage.textContent = "";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            errorMessage.textContent = data.message;
            return;
        }

        displayWeather(data);

    } catch (error) {
        errorMessage.textContent = "Something went wrong. Please try again.";
    }
}

function displayWeather(data) {

    city.textContent = data.name;

    temperature.textContent =
        `${Math.round(data.main.temp)}°C`;

    description.textContent =
        data.weather[0].description;

    weatherIcon.src =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    feelsLike.textContent =
        `Feels Like: ${Math.round(data.main.feels_like)}°C`;

    humidity.textContent =
        `Humidity: ${data.main.humidity}%`;

    wind.textContent =
        `Wind: ${data.wind.speed} km/h`;

    pressure.textContent =
        `Pressure: ${data.main.pressure} hPa`;

    visibility.textContent =
        `Visibility: ${data.visibility / 1000} km`;
        const sunriseTime = new Date(data.sys.sunrise * 1000);
const sunsetTime = new Date(data.sys.sunset * 1000);

sunrise.textContent =
    `Sunrise: ${sunriseTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    })}`;

sunset.textContent =
    `Sunset: ${sunsetTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    })}`;


    errorMessage.textContent = "";

}