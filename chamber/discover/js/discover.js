let n = localStorage.getItem('n');
let prevday = localStorage.getItem('prevday');
let prevmonth = localStorage.getItem('prevmonth');

if (n == null){
    n = 0;
}
localStorage.setItem('n', ++n);
document.getElementById('user_visits').innerHTML = localStorage.getItem('n');


var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

difference = prevmonth;



localStorage.setItem('prevday', currentdate.getDate());
localStorage.setItem('prevmonth', currentdate.getMonth()+1);

document.getElementById('user_visited').innerHTML = difference;