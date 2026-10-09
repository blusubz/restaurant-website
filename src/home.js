// Export using a named export so when importing we stay strict with the function name 'loadhome'
import carneMolidaImg from './assets/carne-molida.png';

export function loadhome() {
    // Create elements in memory
    const parentDiv = document.getElementById('content');
    const homePageGreeting = document.createElement('h1');
    const sampleImg = document.createElement('img');
    const sampleParagraph = document.createElement('p');

    // Create elements
    homePageGreeting.textContent = "Welcome to Marinas Restaurant";
    
    sampleImg.src = carneMolidaImg;
    sampleImg.alt = 'picture of carne molida';
    sampleImg.loading= 'lazy';

    sampleParagraph.textContent = "Bienvenidos al restaurante que prepare y sirve la mejor carne molida del Universo.";
    

    // append elements to body (for now)
    parentDiv.appendChild(homePageGreeting);
    parentDiv.appendChild(sampleImg);
    parentDiv.appendChild(sampleParagraph);
}