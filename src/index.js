import "./style.css";

import {loadHomePage} from './home.js';
import {loadMenuPage} from './menu.js';

window.addEventListener('DOMContentLoaded', () => {
    loadHomePage();
});

homeButton.addEventListener('click', () => {
    loadHomePage();
});

menuButton.addEventListener('click', () => {
    loadMenuPage();
});

console.log("Yummy food");