import drinkCinImage from './img/cinMilkshake.jpeg';
import drinkKittyImage from './img/kittyCoffe.jpeg';
import savoryPomImage from './img/pompompurinCurry.jpeg';
import savoryMelodyImage from './img/melodyRice.jpeg';
import sweetMelodyImage from './img/melodyMooncake.jpeg';




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
    drinkCinImg.classList.add('drink-img');

    const drinkCinHeader = document.createElement('h3')
    drinkCinHeader.textContent = 'Cinnamoroll Milkshake';
    drinkCinHeader.classList.add('drinks-header');

    const drinkCinPrice = document.createElement('h3');
    drinkCinPrice.textContent = '£3';
    drinkCinPrice.classList.add('drinks-price');

    const drinkKittyImg = document.createElement('img');
    drinkKittyImg.src = drinkKittyImage;
    drinkKittyImg.classList.add('drink-img');

    const drinkKittyHeader = document.createElement('h3');
    drinkKittyHeader.textContent = 'Hello Kitty Coffee';
    drinkKittyHeader.classList.add('drinks-header');

    const drinkKittyPrice = document.createElement('h3');
    drinkKittyPrice.textContent = '£2';
    drinkKittyPrice.classList.add('drinks-price');

    drinksContainer.appendChild(drinksHeader);
    drinksContainer.appendChild(drinkCinHeader);
    drinksContainer.appendChild(drinkCinPrice);
    drinksContainer.appendChild(drinkCinImg);
    drinksContainer.appendChild(drinkKittyHeader);
    drinksContainer.appendChild(drinkKittyPrice);
    drinksContainer.appendChild(drinkKittyImg);


    const savoryContainer = document.createElement('div');
    savoryContainer.classList.add('savory-container');

    const savoryHeader = document.createElement('h2');
    savoryHeader.textContent = 'Savory Dishes';
    savoryHeader.classList.add('menu-header');

    const savoryPomImg = document.createElement('img');
    savoryPomImg.src = savoryPomImage;
    savoryPomImg.classList.add('savory-img');

    const savoryPomHeader = document.createElement('h2');
    savoryPomHeader.textContent = 'Pompompurin Curry';
    savoryPomHeader.classList.add('food-header');

    const savoryPomPrice = document.createElement('h3');
    savoryPomPrice.textContent = '£8';
    savoryPomPrice.classList.add('food-price');

    const savoryMelodyImg = document.createElement('img');
    savoryMelodyImg.src = savoryMelodyImage;
    savoryMelodyImg.classList.add('savory-img');

    const savoryMelodyHeader = document.createElement('h2');
    savoryMelodyHeader.textContent = 'My Melody Curry';
    savoryMelodyHeader.classList.add('food-header');

    const savoryMelodyPrice = document.createElement('h3');
    savoryMelodyPrice.textContent = '£8';
    savoryMelodyPrice.classList.add('food-price');

    savoryContainer.appendChild(savoryHeader);
    savoryContainer.appendChild(savoryPomHeader);
    savoryContainer.appendChild(savoryPomPrice);
    savoryContainer.appendChild(savoryPomImg);
    savoryContainer.appendChild(savoryMelodyHeader);
    savoryContainer.appendChild(savoryMelodyPrice);
    savoryContainer.appendChild(savoryMelodyImg);

    const sweetContainer = document.createElement('div');
    sweetContainer.classList.add('sweet-container');

    const sweetMelodyImg = document.createElement('img');
    sweetMelodyImg.src = sweetMelodyImage;
    sweetMelodyImg.classList.add('sweet-img');

    const sweetMelodyHeader = document.createElement('h2');
    sweetMelodyHeader.textContent = 'My Melody Mooncakes';
    sweetMelodyHeader.classList.add('food-header');

    const sweetMelodyPrice = document.createElement('h3');
    sweetMelodyPrice.textContent = '£9';
    sweetMelodyPrice.classList.add('food-price');

    sweetContainer.appendChild(sweetMelodyHeader);
    sweetContainer.appendChild(sweetMelodyPrice);
    sweetContainer.appendChild(sweetMelodyImg);

    menuContent.appendChild(drinksContainer);
    menuContent.appendChild(savoryContainer);
    menuContent.appendChild(sweetContainer);

    content.appendChild(menuTitle);
    content.appendChild(menuContent);

};

export {loadMenuPage};