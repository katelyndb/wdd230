function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

let options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('current_date').textContent = new Date().toLocaleDateString('en-US',options);
document.getElementById('header_date').textContent = new Date().toLocaleDateString('en-US',options);      

let copyright_year = new Date().getFullYear();
let copyright = `\u00A9 ${copyright_year} | Katie Blunck | `;

document.getElementById('copyright').textContent = copyright;

const dayOfWeek = new Date().getDay();
var notifBanner = document.getElementById('notif_banner');
if (dayOfWeek == 1 || dayOfWeek == 2 ) {
    notifBanner.style.display = 'block';
}



