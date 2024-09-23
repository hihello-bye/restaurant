function loadMenuPage() {
    const content = document.getElementById('content');

    content.innerHTML = '';

    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Menu';
    menuTitle.classList.add('menu-title');

    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');

    content.appendChild(menuTitle);
    content.appendChild(menuContent);

};

export {loadMenuPage};