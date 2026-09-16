document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =  document.lastModified;

const button = document.getElementById("menu-button");
const navMenu = document.querySelector("nav")

button.addEventListener("click",()=>{
    navMenu.classList.toggle("open");
    button.classList.toggle("open");
});