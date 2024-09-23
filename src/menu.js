function loadMenuPage() {
    const content = document.getElementById('content');

    content.innerHTML = '';

    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Menu';
    menuTitle.classList.add('menu-title');

    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');

    const drinksContainer = document.createElement('div');
    drinksContainer.classList.add('drinks-header');

    const drinksHeader = document.createElement('h2');
    drinksHeader.textContent = 'Drinks';
    drinksHeader.classList.add('menu-header');

    drinksContainer.appendChild(drinksHeader);

    menuContent.appendChild(drinksContainer);

    content.appendChild(menuTitle);
    content.appendChild(menuContent);

};

export {loadMenuPage};