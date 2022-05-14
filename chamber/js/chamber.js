function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}



let options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('current_date').textContent = new Date().toLocaleDateString('en-US',options);        

copyright_year = new Date().getFullYear()
let copyright = `\u00A9 ${copyright_year} -Katie Blunck- Georgia`;

document.getElementById('copyright').textContent = copyright;