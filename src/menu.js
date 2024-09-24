import drinkCinImage from './img/cinMilkshake.jpeg';

function loadMenuPage() {
    const content = document.getElementById('content');

    content.innerHTML = '';

    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Menu';
    menuTitle.classList.add('menu-title');

    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');

    const drinksContainer = document.createElement('div');
    drinksContainer.classList.add('drinks-container');

    const drinksHeader = document.createElement('h2');
    drinksHeader.textContent = 'Drinks';
    drinksHeader.classList.add('menu-header');

    
    const drinkCinImg = document.createElement('img');
    drinkCinImg.src = drinkCinImage;
    drinkCinImg.classList.add('drink-cin-img');

    const drinkCinHeader = document.createElement('h3')
    drinkCinHeader.textContent = 'Cinnamoroll Milkshake';
    drinkCinHeader.classList.add('drinks-header');

    const drinkCinPrice = document.createElement('h3');
    drinkCinPrice.textContent = '£3';
    drinkCinPrice.classList.add('drinks-price');


    drinksContainer.appendChild(drinksHeader);
    drinksContainer.appendChild(drinkCinHeader);
    drinksContainer.appendChild(drinkCinPrice);
    drinksContainer.appendChild(drinkCinImg);
    

    menuContent.appendChild(drinksContainer);

    content.appendChild(menuTitle);
    content.appendChild(menuContent);

};

export {loadMenuPage};