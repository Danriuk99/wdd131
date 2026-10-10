document.addEventListener("DOMContentLoaded", () => {
  let count = Number(localStorage.getItem("reviewCounter")) || 0;
  count++;
  localStorage.setItem("reviewCounter", count);

  const countDisplay = document.getElementById("reviewCount");
  if (countDisplay) {
    countDisplay.textContent = count;
  }

  const currentYear = document.getElementById("currentyear");
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  const lastModified = document.getElementById("lastModified");
  if (lastModified) {
    lastModified.textContent = `Last Modification: ${document.lastModified}`;
  }
});