document.getElementById('search-btn').addEventListener('click', () => {
    const city = document.getElementById('city-search').value.trim();
    if (city) {
        alert(`Searching weather for ${city}...`);
        // Here you can add the functionality to fetch and display weather data
        // Use APIs like OpenWeatherMap for this purpose
    } else {
        alert('Please enter a city name!');
    }
});
