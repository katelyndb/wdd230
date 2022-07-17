
//Getting Copyright information for Footer
let copyright_year = new Date().getFullYear();
document.getElementById('copyright').textContent = `\u00A9 ${copyright_year} Temple Inn and Suites Inc.`;
//

//Opening and Closing the Nav bar menu
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
//

