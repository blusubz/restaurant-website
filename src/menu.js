import {aperitivosData, platosData, bebidasData, postreData} from './menuData.js';

export function loadmenu() {
    // Create elements in memory
    const parentDiv = document.getElementById('content');
    const menuPageHeader = document.createElement('h1');

    menuPageHeader.textContent = "Menu"; // TODO: Change font
    parentDiv.appendChild(menuPageHeader);

    parentDiv.appendChild(createCategorySection('Aperitivos', aperitivosData));
    parentDiv.appendChild(createCategorySection('Platos', platosData));
    parentDiv.appendChild(createCategorySection('Bebidas', bebidasData));
    parentDiv.appendChild(createCategorySection('Postre', postreData));
}

function createCategorySection(catergoryTitle, itemsArray) {
    const menuCategoryDiv = document.createElement('div');
    const itemsGrid = document.createElement('div');
    const catergoryHeader = document.createElement('h2');

    itemsArray.forEach((item) => {
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
        itemPrice.className = 'price';
        itemDescription.appendChild(itemPrice);
        menuCard.appendChild(itemDescription);
        
        itemsGrid.appendChild(menuCard);
    });

    // Add classes to divs
    menuCategoryDiv.className = 'menu-category'; 
    itemsGrid.className = 'items-grid'; 

    catergoryHeader.textContent = catergoryTitle;

    menuCategoryDiv.appendChild(catergoryHeader);
    menuCategoryDiv.appendChild(itemsGrid);

    return menuCategoryDiv;
}