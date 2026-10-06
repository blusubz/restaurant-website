export function loadabout() {
    const parentDiv = document.getElementById('content');
    const aboutGreeting = document.createElement('h1');
    const aboutParagraph = document.createElement('p');

    aboutGreeting.textContent = "About Marinas Restaurant";
    aboutParagraph.textContent = "Founded since I was a child, I have always loved my mother special carne molida. Always made with love and served with care. There's something magical about a warm plate of carne molida mixed with mothers rice.";

    parentDiv.appendChild(aboutGreeting);
    parentDiv.appendChild(aboutParagraph);
}