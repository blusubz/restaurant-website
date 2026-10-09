export function loadabout() {
    const parentDiv = document.getElementById('content');
    const aboutGreeting = document.createElement('h1');
    const aboutParagraph = document.createElement('p');

    aboutGreeting.textContent = "Acerca de Marinas Restaurante";
    aboutParagraph.textContent = "Fundada desde que era niño, siempre he amado la especial carne molida de mi madre. Hecha siempre con amor y servida con cuidado. Hay algo mágico en un plato caliente de carne molida mezclado con el arroz de mi madre.";

    parentDiv.appendChild(aboutGreeting);
    parentDiv.appendChild(aboutParagraph);
}