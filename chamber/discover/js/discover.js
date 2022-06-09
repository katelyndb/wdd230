let n = localStorage.getItem('n');
let prevday = localStorage.getItem('prevday');
let prevmonth = localStorage.getItem('prevmonth');

if (n == null){
    n = 0;
}
localStorage.setItem('n', ++n);
document.getElementById('user_visits').innerHTML = localStorage.getItem('n');


var currentdate = new Date(); 
var currentday = currentdate.getDate();
var currentmonth = currentdate.getMonth()+1;
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

difference = prevmonth;
if (prevmonth == currentmonth){
    difference = currentday - prevday;
}
else if (currentmonth - prevmonth == 1 ){
    if (prevmonth == 2){
        difference = 28 - prevday + currentday;
    }
    else if (prevmonth == 4  || prevmonth == 6 || prevmonth == 9 || prevmonth == 11){
        difference = 30 - prevday + currentday;
    }
    else {
        difference = 31 - prevday + currentday;
    }
}
else {
    difference = 0;
}





localStorage.setItem('prevday', currentday);
localStorage.setItem('prevmonth', currentmonth);

document.getElementById('user_visited').innerHTML = difference;