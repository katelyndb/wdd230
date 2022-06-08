let n = localStorage.getItem('n');

if (n == null){
    n = 0;
}
localStorage.setItem('n', ++n);
document.getElementById('user_visits').innerHTML = localStorage.getItem('n');
