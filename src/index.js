import { loadhome } from './home.js';
import { loadabout } from './about.js';
import { loadmenu } from './menu.js';
import { loadcontact } from './contact.js';

// Logic for selecting tab
const parentDiv = document.getElementById('content');
const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const aboutBtn = document.getElementById('about-btn');
const contactBtn = document.getElementById('contact-btn');

homeBtn.addEventListener('click', () => {
    parentDiv.textContent = "";
    loadhome();
});

aboutBtn.addEventListener('click', () => {
    parentDiv.textContent = "";
    loadabout();
});

menuBtn.addEventListener('click', () => {
    parentDiv.textContent = "";
    loadmenu();
});

contactBtn.addEventListener('click', () => {
    parentDiv.textContent = "";
    loadcontact();
})

// Driver page is Home page - Load at page start 
loadhome();