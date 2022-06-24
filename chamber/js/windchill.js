
// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const currHumid = document.querySelector('#humidity');
const currFeel = document.querySelector('#feels_like');
const temperature = document.querySelector('#temperature');
const currwindSpeed = document.querySelector('#wind-speed');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.89018&lon=-84.143&appid=382e50f3d5abaf1c6e4fd4ef4b090650&units=imperial';
let windChillFactor = "N/A";



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
    const temp = weatherData.main.temp.toFixed(0);
    const windSpeed = weatherData.wind.speed.toFixed(0);
  
    //weatherIcon.setAttribute('src', iconsrc);
    //weatherIcon.setAttribute('alt', desc);
    //captionDesc.textContent = desc;
    currHumid.textContent = humidity;
    currFeel.textContent = feels;
    temperature.textContent =`${temp} F`;
    currwindSpeed.textContent = `Wind Speed: ${windSpeed} mph`;

    if ((temp <= 50) && (windSpeed > 3 )){ 
    
        calculateWindChill(temp, windSpeed);
  }
  else {
      windChillFactor = "N/A";
  }
  } 

  
  function calculateWindChill(temp, windSpeed){
    temp = parseInt(temp);
    windSpeed = parseInt(windSpeed);
    windChillFactor = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16))+ (0.4275 * temp * Math.pow(windSpeed, 0.16))).toFixed(0);
  }
  document.getElementById('windChill').textContent = `Wind Chill: ${windChillFactor}`;
  
  
  //END WINDCHILL CALCULATIONS
  