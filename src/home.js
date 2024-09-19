function loadHomePage() {
    const content = document.getElementById('content');

    content.innerHTML = '';

    const homeTitle = document.createElement('h1');
    homeTitle.textContent = 'Sanrio Cafe';
    homeTitle.classList.add('home-title');

    const homeAbout = document.createElement('p');
    homeAbout.textContent = 'Enjoy great food with Hello Kitty and all her friends! Our Sanrio inspired menu is as cute as it is tasty. Try different dishes and drinks inspired by Sanrio characters.';
    homeAbout.classList.add('home-about');

    content.appendChild(homeAbout);
    content.appendChild(homeTitle);

}

export {loadHomePage};