
temp = 32;
windSpeed = 15;

if ((temp <= 50) && (windSpeed > 3 )){ 
    calculateWindChill(temp, windSpeed);
}
else {
    windChillFactor = "N/A";
}


function calculateWindChill(temp, windSpeed){
temp = parseInt(temp);
windSpeed = parseInt(windSpeed);
windChillFactor = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16))+ (0.4275 * temp * Math.pow(windSpeed, 0.16))).toFixed(0);
}

document.getElementById('windChill').textContent = `Wind Chill: ${windChillFactor}`;
document.getElementById('temp').textContent =`${temp} F`;
document.getElementById('windSpeed').textContent = `Wind Speed: ${windSpeed} mph`;