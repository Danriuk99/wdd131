document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const tempC = 8;
const windKmh = 10;

function calculateWindChill(temp, wind) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16));
}

const chillElement = document.getElementById("chill");

if (tempC <= 10 && windKmh > 4.8) {
    const chillValue = calculateWindChill(tempC, windKmh);
    chillElement.textContent = `${chillValue.toFixed(1)} °C`;
} else {
    chillElement.textContent = "N/A";
}