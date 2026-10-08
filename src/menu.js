import appetizerImg from './assests/appetizer-pic-asset.jpg';
import aperitivoCebollaImg from './assests/aperitivoCebolla-pic-asset.jpg';
import aperitivosQuesitosEspinacaImg from './assests/aperitivoQueso-pic-asset.jpg';
import drinkImg from './assests/drink-pic-asset.jpg';
import miloImg from './assests/milo-pic-asset.jpg';
import colaImg from './assests/cola-pic-asset.jpg';
import pastaImg from './assests/pasta-pic-asset.jpg';
import carneImg from './assests/carne-pic-asset.jpg';
import shrimpImg from './assests/shrimp-pic-asset.jpg';
import postreImg from './assests/postre-pic-asset.jpg'

export function loadmenu() {
    // Create elements in memory
    const parentDiv = document.getElementById('content');

    const menuPageHeader = document.createElement('h1');
    const bebidasHeader = document.createElement('h2');
    const aperitivosHeader = document.createElement('h2');
    const platosHeader = document.createElement('h2');
    const postreHeader = document.createElement('h2');
    
    const aperitivoQuesitos = document.createElement('img');
    const aperitivosCebollas = document.createElement('img');
    const aperitivosQuesitosEspinaca = document.createElement('img');

    const drink = document.createElement('img');
    const milo = document.createElement('img');
    const cola = document.createElement('img');

    const postre = document.createElement('img');

    const pasta = document.createElement('img');
    const carne = document.createElement('img');
    const shrimp = document.createElement('img');

    menuPageHeader.textContent = "Menu"; // TODO: Change font

    // Aperitivos creation and handling
    aperitivosHeader.textContent = 'Aperitivos';

    aperitivoQuesitos.src = appetizerImg;
    aperitivoQuesitos.alt = 'Picture of appetizer';
    aperitivoQuesitos.loading = 'lazy';

    aperitivosCebollas.src = aperitivoCebollaImg;
    aperitivosCebollas.alt = 'Foto de aperitivos de cebolla';
    aperitivosCebollas.loading = 'lazy';

    aperitivosQuesitosEspinaca.src = aperitivosQuesitosEspinacaImg;
    aperitivosQuesitosEspinaca.alt = 'Foto de aperitivo de quesitos relleno de espinaca';
    aperitivosQuesitosEspinaca.loading = 'lazy';

    // Platos creation and handling - Use flexbox on this parent container and add in all 3 images and in each create a seperate container to hold the image and any info on the image
    platosHeader.textContent = 'Platos';

    pasta.src = pastaImg;
    pasta.alt = 'Picture of pasta';
    pasta.loading = 'lazy';

    carne.src = carneImg;
    carne.alt = 'Picture of carne molida con arroz, plantano maduro y huevo frito encima de arroz';
    carne.loading = 'lazy';

    shrimp.src = shrimpImg;
    shrimp.alt = 'Picture of plate of shrimp';
    shrimp.loading = 'lazy';

    // Drinks creation and handling 
    bebidasHeader.textContent = 'Bebidas';

    drink.src = drinkImg;
    drink.alt = 'Picture of bebrage';
    drink.loading = 'lazy';

    milo.src = miloImg;
    milo.alt = 'Foto de leche de chocolate de milo frio';
    milo.loading = 'lazy';

    cola.src = colaImg;
    cola.alt = 'Foto de coka cola frio';
    cola.loading = 'lazy';

    // Postre creation and handling
    postreHeader.textContent = 'Postre';
    postre.src = postreImg;
    postre.alt = 'Foto de postre que es un baso grande de helado de chocolate con leche como un batido y troncos grandes y chiquitos de chocolate';

    // Append elements to container in document
    parentDiv.appendChild(menuPageHeader);

    parentDiv.appendChild(aperitivosHeader);
    parentDiv.appendChild(aperitivoQuesitos);
    parentDiv.appendChild(aperitivosCebollas);
    parentDiv.appendChild(aperitivosQuesitosEspinaca);

    parentDiv.appendChild(platosHeader);
    parentDiv.appendChild(pasta);
    parentDiv.appendChild(carne);
    parentDiv.appendChild(shrimp);

    parentDiv.appendChild(bebidasHeader);
    parentDiv.appendChild(drink);
    parentDiv.appendChild(milo);
    parentDiv.appendChild(cola);

    parentDiv.appendChild(postreHeader);
    parentDiv.appendChild(postre);
}

function createAperitivos() {
    return
}

function createPlatos() {
    return
}

function createBebidas() {
    return
}

function createPostre() {
    return
}