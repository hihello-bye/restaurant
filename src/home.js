function loadHomePage() {
    const content = document.getElementById('content');

    content.innerHTML = '';

    const homeTitle = document.createElement('h1');
    homeTitle.textContent = 'Sanrio Cafe';

    content.appendChild(homeTitle);

}

export {loadHomePage};