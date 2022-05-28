
temp = 60;
windSpeed = 15;

if ((temp <= 50)&& (windSpeed > 3 )){ 
    calculateWindChill(temp, windSpeed);
}
else {
    windChillFactor = "N/A";
}


function calculateWindChill(temp, windSpeed){
temp = parseInt(temp);
windSpeed = parseInt(windSpeed);
windChillFactor = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, .16))+ (.4275 * temp * Math.pow(windSpeed, .16));
}

document.getElementById('windChill').textContent = windChillFactor;
document.getElementById('temp').textContent =`${temp} ${<span>&#176;</span>} F`;
document.getElementById('windSpeed').textContent = `${windSpeed} mph`;