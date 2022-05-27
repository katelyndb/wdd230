
function calculateWindChill(temp, windSpeed){
temp = parsIint(temp)
windSpeed = parseInt(windSpeed)
if ((temp <= 50)&& (windSpeed > 3 )){
    windChillFactor = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, .16))+ (.4275 * temp * Math.pow(windSpeed, .16))
}else {
    windChillFactor = "NA"
}
}