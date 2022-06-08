let n = localStorage.getItem('n');
let prevdate = localStorage.getItem('prevdate');

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

difference =    prevdate;


localStorage.setItem('prevdate', currentdate);

document.getElementById('user_visited').innerHTML = difference;