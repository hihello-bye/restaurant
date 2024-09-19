function loadHomePage() {
    const content = document.getElementById('content');

    content.innerHTML = '';

    const homeTitle = document.createElement('h1');
    homeTitle.textContent = 'Sanrio Cafe';
    homeTitle.classList.add('home-title');

    const homeAbout = document.createElement('p');
    homeAbout.textContent = 'Enjoy great food with Hello Kitty and all her friends! Our Sanrio inspired menu is as cute as it is tasty. Try different dishes and drinks inspired by your favorite Sanrio characters.';
    homeAbout.classList.add('home-about');

    const hours = document.createElement('ul');
    hours.classList.add('hours');
    const items = [
        'Sunday: Closed',
        'Monday: Closed',
        'Tuesday: 10am - 8pm',
        'Wednesday: 10am - 8pm',
        'Thursday: 10am - 8pm', 
        'Friday: 10am - 10pm', 
        'Saturday: 9am - 10pm'];
    items.forEach(itemText => {
        const hoursList = document.createElement('li');
        hoursList.textContent = itemText;
        hours.appendChild(hoursList);
    })

    const location = document.createElement('p');
    location.textContent = '974 Badtz Maru, London, England';
    location.classList.add('location');

    content.appendChild(hours);
    content.appendChild(homeAbout);
    content.appendChild(homeTitle);
    content.appendChild(location);
    

}

export {loadHomePage};