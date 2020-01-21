const iconElement = document.querySelector('#weather-icon');
const tempElement = document.querySelector('#temperature-value p');
const descriptionElement = document.querySelector('#tenperature-description p');
const locationElement = document.querySelector('location p');
const notificationElement = document.querySelector('notification');

const weather = {};

weather.temperature = {
    unit: 'celcius'
}

const KELVIN = 273;

const key = 'e87ce4c1781d7cc5a0f4b8f1aab515e2';

if('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else {
    notificationElement.style.display = 'block';
    notificationElement.style.innerHTML = '<p> ${error.message} </p>';
}

function setPosition (position) {
    let latitude = position.coords.latitiude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude)
}

function showError (error) {
    notificationElement.style.display = 'block';
    notificationElement.style.innerHTML = '<p>Browser doesn\'t support geolocation</p>';
}

function getWeather(latitude, longitude) {
    let api = `http://api.openweatherapp.org/data/2.5/weather?lat=${latitude}&long=${longitude}&appid=${key}`;
    fetch(api)
        .then((response) => {
            let data = response.json()
            return data
        })
        .then((data) => {
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(() => displayWeather());
}