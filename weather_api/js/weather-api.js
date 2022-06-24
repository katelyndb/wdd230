// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const currHumid = document.querySelector('#humidity');
const currFeel = document.querySelector('#feels_like');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=64.8378&lon=-147.7164&appid=382e50f3d5abaf1c6e4fd4ef4b090650&units=imperial';




async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();


  function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const humidity = weatherData.main.humidity;
    const feels = weatherData.main.feels_like.toFixed(0);
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    currHumid.textContent = humidity;
    currFeel.textContent = feels;
  } 