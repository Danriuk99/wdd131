const temples = [
    {
        templeName: "Monterrey Mexico Temple",
        location: "Monterrey, Nuevo León, Mexico",
        dedicated: "2002, April, 28",
        area: 16498,
        imageUrl: "images/monterrey_mexico_temple.webp"
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: "images/rome_italy_temple.webp"
    },
    {
        templeName: "Buenos Aires Argentina Temple",
        location: "Ciudad Evita, Buenos Aires, Argentina",
        dedicated: "1986, January, 17",
        area: 30659,
        imageUrl: "images/buenos_aires_temple.webp"
    },
    {
        templeName: "Bahia Blanca Argentina Temple",
        location: "Bahía Blanca, Argentina",
        dedicated: "2025, November, 23",
        area: 23400,
        imageUrl: "images/bahia_blanca_temple.webp"
    },
    {
        templeName: "Mexico City Mexico Temple",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "images/mexico_city_temple.webp"
    },
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl: "images/salt_lake_temple.webp"
    },
    {
        templeName: "St. George Utah Temple",
        location: "St. George, Utah, United States",
        dedicated: "1877, April, 6",
        area: 143969,
        imageUrl: "images/st_george_temple.webp"
    },
    {
        templeName: "Calgary Alberta Temple",
        location: "Calgary, Alberta, Canada",
        dedicated: "2012, October, 28",
        area: 33000,
        imageUrl: "images/calgary_temple.webp"
    },
    {
        templeName: "Vancouver British Columbia Temple",
        location: "Langley, British Columbia, Canada",
        dedicated: "2010, May, 2",
        area: 28165,
        imageUrl: "images/vancouver_temple.webp"
    }
];

const container = document.querySelector(".temples-pictures");
const heading = document.querySelector("main h1");

function displayTemples(filteredTemples) {
    container.innerHTML = "";
    filteredTemples.forEach(temple => {
        const card = document.createElement("figure");
        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><span class="label">LOCATION:</span> ${temple.location}</p>
            <p><span class="label">DEDICATED:</span> ${temple.dedicated}</p>
            <p><span class="label">SIZE:</span> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;
        container.appendChild(card);
    });
}

// Filtros del menú de navegación
document.getElementById("home").addEventListener("click", (e) => {
    e.preventDefault();
    heading.textContent = "Home";
    displayTemples(temples);
});

document.getElementById("old").addEventListener("click", (e) => {
    e.preventDefault();
    heading.textContent = "Old Temples";
    displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
});

document.getElementById("new").addEventListener("click", (e) => {
    e.preventDefault();
    heading.textContent = "New Temples";
    displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
});

document.getElementById("large").addEventListener("click", (e) => {
    e.preventDefault();
    heading.textContent = "Large Temples";
    displayTemples(temples.filter(t => t.area > 90000));
});

document.getElementById("small").addEventListener("click", (e) => {
    e.preventDefault();
    heading.textContent = "Small Temples";
    displayTemples(temples.filter(t => t.area < 20000));
});

// Actualizar año y fecha de última modificación en el footer
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Funcionalidad del menú móvil (hamburguesa)
const button = document.getElementById("menu-button");
const navMenu = document.querySelector("nav");

button.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    button.classList.toggle("open");
});

// Mostrar todos los templos al cargar la página
displayTemples(temples);