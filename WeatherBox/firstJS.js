const container = document.querySelector('.container');
const weather_box = document.querySelector('.Weather-box');
const weather_detail = document.querySelector('.Weather-detail');
const search = document.querySelector('.search-box button');

search.addEventListener('click', () => {
    const APIKEY = '38f6f2b58921b4baf8976e4969e0f6c1'
    const city = document.querySelector('.search-box input').value;
    if(APIKEY === '') return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}`)
    .then(reponse => reponse.json())
    .then(json => {
        if(json.cod === '404') return;
        const image = document.querySelector('.Weather-box img');
        const temperature = document.querySelector('.Weather-box .Temperature');
        const decript = document.querySelector('.Weather-box .Decription');
        const huminity = document.querySelector('.Weather-detail .Huminity span');
        const wind = document.querySelector('.Weather-detail .Wind span');
        switch(json.weather[0].main){
            case 'Clear':
                image.src = 'images/clear.png';
                break;
            case 'Clouds':
                image.src = 'images/cloud.png';
                break;
            case 'Rain':
                image.src = 'images/rain.png';
                break;
            case 'Snow':
                image.src = 'images/snow.png';
                break;
            case 'Haze':
                image.src = 'images/haze.png';
                break;
            default:
                image.src = '';
        }
        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        // decript.innerHTML = `${parseInt(json.main.decription)}`;
        huminity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

        weather_box.style.display = '';
        weather_detail.style.display = '';
        weather_box.classList.add('expand');
        weather_detail.classList.add('expand');
        container.style.height = '420px';
    })
})