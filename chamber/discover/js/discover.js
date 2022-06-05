let n = localStorage.getItem('on_load_counter');

if (n == null){
    n = 0;
}

document.getElementById('user_visits').innerHTML = n;