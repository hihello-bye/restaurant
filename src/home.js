function loadHomePage() {
    const content = document.getElementById('content');

    content.innerHTML = '';

    const homeTitle = document.createElement('h1');
    homeTitle.textContent = 'Sanrio Cafe';
    homeTitle.classList.add('home-title');

    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    const homeAbout = document.createElement('p');
    homeAbout.textContent = 'Enjoy great food with Hello Kitty and all her friends! Our Sanrio inspired menu is as cute as it is tasty. Try different dishes and drinks inspired by your favorite Sanrio characters.';
    homeAbout.classList.add('home-about');

    const hoursContainer = document.createElement('div');
    hoursContainer.classList.add('hours-container');

    const hoursHeader = document.createElement('h2');
    hoursHeader.textContent = 'Opening Hours';
    hoursHeader.classList.add('content-header');

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

    hoursContainer.appendChild(hoursHeader);
    hoursContainer.appendChild(hours);

    const locationContainer = document.createElement('div');
    locationContainer.classList.add('location-container');

    const locationHeader = document.createElement('h2');
    locationHeader.textContent = 'Location';
    locationHeader.classList.add('content-header');

    const location = document.createElement('p');
    location.textContent = '974 Badtz Maru, London, England';
    location.classList.add('location');
    
    locationContainer.appendChild(locationHeader);
    locationContainer.appendChild(location);

    mainContent.appendChild(homeAbout);
    mainContent.appendChild(hoursContainer);
    mainContent.appendChild(locationContainer);

    content.appendChild(homeTitle);
    content.appendChild(mainContent);
    

}

export {loadHomePage};