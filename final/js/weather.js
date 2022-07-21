// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const currHumid = document.querySelector('#humidity');
const currFeel = document.querySelector('#feels_like');
const daily_url = 'https://api.openweathermap.org/data/2.5/onecall?lat=38.9807&lon=-77.1003&appid=382e50f3d5abaf1c6e4fd4ef4b090650&units=imperial';
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=38.98078&lon=-77.1003&appid=382e50f3d5abaf1c6e4fd4ef4b090650&units=imperial';


async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
    }
  }
function  displayResults(weatherData) {
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const humidity = weatherData.main.humidity;
    const feels = weatherData.main.feels_like.toFixed(0) ;
    let temp = weatherData.main.temp.toFixed(0);
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    currHumid.textContent = `${humidity}%`;
    currFeel.textContent = `${feels}`;
    currentTemp.textContent =`${temp}`;
  } 
  async function secondApiFetch() {
    try {
      const response = await fetch(daily_url);
      if (response.ok) {
        const data = await response.json();
        displayDaily(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
    }
  }
function displayDaily(weatherData) {
    let daily_temps = document.querySelector('.daily_temps');
    let daily_titles = document.querySelector('.daily_titles');
    for (let i = 0; i < 3; i++) {
        const weekday_list = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        weekday = new Date().getDay();
        let daily = weatherData.daily[i].temp.day;
        let h4 = document.createElement('h4');
        let p = document.createElement('p');
        p.innerHTML =`${daily}<span>&#8457;</span>`;
        h4.innerHTML =`${weekday_list[weekday + i + 1]}`
        daily_titles.append(h4);
        daily_temps.append(p);


        /*
        //Weather Alerts
        let alert = document.querySelector('.weather_alert');
        //alert.textContent = weatherData.alerts.event, weatherData.alerts.tags;
        if ( alert == "" ) {
          alert.style.display = 'none';
      }else{
        alert.style.display = 'none';
      } */
        
      }

      
}
apiFetch();
secondApiFetch();


