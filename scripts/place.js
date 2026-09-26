document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const temp = 8;
const speed = 10;

const calculateWindChill = (t, v) => (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);

const chillSpan = document.getElementById("chill");

if (temp <= 10 && speed > 4.8) {
    chillSpan.textContent = `${calculateWindChill(temp, speed)} °C`;
} else {
    chillSpan.textContent = "N/A";
}