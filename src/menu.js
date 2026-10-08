import carneImg from './assests/carne-pic-asset.jpg';
import appetizerImg from './assests/appetizer-pic-asset.jpg';
import drinkImg from './assests/drink-pic-asset.jpg';
import pastaImg from './assests/pasta-pic-asset.jpg';
import shrimpImg from './assests/shrimp-pic-asset.jpg';



export function loadmenu() {
    // Create elements in memory
    const parentDiv = document.getElementById('content');
    const menuPageHeader = document.createElement('h1');
    const appetizer = document.createElement('img');
    const drink = document.createElement('img');
    const pasta = document.createElement('img');
    const carne = document.createElement('img');
    const shrimp = document.createElement('img');

    menuPageHeader.textContent = "Menu"; // TODO: Change font

    appetizer.src = appetizerImg;
    appetizer.alt = 'Picture of appetizer';
    appetizer.loading = 'lazy';

    drink.src = drinkImg;
    drink.alt = 'Picture of bebrage';
    drink.loading = 'lazy';

    pasta.src = pastaImg;
    pasta.alt = 'Picture of pasta';
    pasta.loading = 'lazy';

    carne.src = carneImg;
    carne.alt = 'Picture of carne molida con arroz, plantano maduro y huevo frito encima de arroz';
    carne.loading = 'lazy';

    shrimp.src = shrimpImg;
    shrimp.alt = 'Picture of plate of shrimp';
    shrimp.loading = 'lazy';

    parentDiv.appendChild(menuPageHeader);
    parentDiv.appendChild(appetizer);
    parentDiv.appendChild(drink);
    parentDiv.appendChild(pasta);
    parentDiv.appendChild(carne);
    parentDiv.appendChild(shrimp);

    // Menu Items

    // Platos - Use flexbox on this parent container and add in all 3 images and in each create a seperate container to hold the image and any info on the image 

    // Bebidas 

    // Appetitos
}