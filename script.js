const apiKey = '7d6d6b5f6516431dada212321242607'; 
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': apiKey
    }
};
async function getWeather() {
    const cityName = document.querySelector('.searchCity').value;
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`;
    try {
        let response = await fetch(apiUrl, options);
         
        let data = await response.json();
        console.log(data);
        const humidity = data.current.humidity + '%';
        document.querySelector('.humidity').textContent = humidity;
        const temp = data.current.temp_c + '°C';
        document.querySelector('.temp').textContent = temp;
        const speed = data.current.wind_kph + 'km/h';
        document.querySelector('.wind').textContent = speed;
        document.querySelector('.city').textContent = cityName;

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

 

 
