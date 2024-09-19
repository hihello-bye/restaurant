import "./style.css";

import {loadHomePage} from './src/home.js';
import {loadMenuPage} from './src/menu.js';

window.addEventListener('DOMContentLoaded', () => {
    loadHomePage();
})


console.log("Yummy food");