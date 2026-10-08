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
    const platosHeader = document.createElement('h2');
    const postreHeader = document.createElement('h2');
    


    const drink = document.createElement('img');
    const milo = document.createElement('img');
    const cola = document.createElement('img');

    const postre = document.createElement('img');

    const pasta = document.createElement('img');
    const carne = document.createElement('img');
    const shrimp = document.createElement('img');

    menuPageHeader.textContent = "Menu"; // TODO: Change font
    parentDiv.appendChild(menuPageHeader);

    const aperitivosSection = createAperitivos(); 
    
    parentDiv.appendChild(aperitivosSection);
    // createPlatos(platosHeader, pasta, carne, shrimp);
    // createBebidas(bebidasHeader, drink, milo, cola);
    // createPostre(postreHeader, postre);
}

function createAperitivos() {
    const menuCategoryDiv = document.createElement('div');
    const itemsGrid = document.createElement('div');
    const catergoryHeader = document.createElement('h2');
    let menuItems = [
        {
            name: 'Aperitivos de Queso',
            description: 'Aperitivos relleno de queso',
            price: '$9',
            src: appetizerImg,
            alt: 'Foto de aperitivos de quesitos relleno de queso'
        },
        {
            name: 'Aros de Cebolla',
            description: 'Aros de cebolla apanados fritos',
            price: '$9',
            src: aperitivoCebollaImg,
            alt: 'Foto de aperitivos de cebolla'
        },
        {
            name: 'Aperitivos de Queso y Espinaca',
            description: 'Aperitivos de quesitos relleno de espinaca',
            price: '$9',
            src: aperitivosQuesitosEspinacaImg,
            alt: 'Foto de aperitivo de quesitos relleno de espinaca'
        }
    ];

    // Add class to div
    menuCategoryDiv.className = 'menu-category'; 
    itemsGrid.className = 'items-grid'; 

    // Aperitivos creation and handling
    catergoryHeader.textContent = 'Aperitivos';
    menuCategoryDiv.appendChild(catergoryHeader);

    menuItems.forEach((item) => {
        const menuCard = document.createElement('div');
        const itemImg = document.createElement('img');
        const itemTitle = document.createElement('h3');
        const itemDescription = document.createElement('p');
        const itemPrice = document.createElement('span');

        // Create and set image 
        itemImg.src = item.src;
        itemImg.alt = item.alt;
        itemImg.loading = 'lazy';
        menuCard.appendChild(itemImg);

        
        itemTitle.textContent = item.name;
        menuCard.appendChild(itemTitle);

        itemDescription.textContent = item.description;
        itemPrice.textContent = item.price;
        itemDescription.appendChild(itemPrice);
        menuCard.appendChild(itemDescription);
        
        itemsGrid.appendChild(menuCard);
    });

    menuCategoryDiv.appendChild(itemsGrid);

    return menuCategoryDiv;
}

function createPlatos(platosHeader, pasta, carne, shrimp) {
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
}

function createBebidas(bebidasHeader, drink, milo, cola) {
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
}

function createPostre(postreHeader, postre) {
    // Postre creation and handling
    postreHeader.textContent = 'Postre';
    postre.src = postreImg;
    postre.alt = 'Foto de postre que es un baso grande de helado de chocolate con leche como un batido y troncos grandes y chiquitos de chocolate';
}