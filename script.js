document.addEventListener("DOMContentLoaded", function () {
    const apiKey = '4c36cfaf4a6372ac9a9c323585260c8b';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

    async function getWeather(city) {
        try {
            const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
            const data = await response.json();

            document.getElementById('city').textContent = data.name;
            document.getElementById('temperature').textContent = `${data.main.temp} °C`;
            document.getElementById('description').textContent = data.weather[0].description;
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    const cityName = prompt('Enter city name:');
    if (cityName) {
        getWeather(cityName);
    }
});