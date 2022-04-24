
const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('current_date').textContent = new Date().toLocaleDateString('en-US',options);        

let copyright = "\u00A9 2022 -Katie Blunck- Georgia";
document.getElementById('copyright').textContent = copyright;