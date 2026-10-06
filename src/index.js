import { loadhome } from './home.js';
import { loadabout } from './about.js';
// import {  }

// Load home page
// loadhome();
// loadabout();

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