const initApp = () => {
    setFooterYear();
    setNavButtonEvents();
};

function setFooterYear() {
    const yearElement = document.querySelector('#year');
    const year = new Date().getFullYear();

    yearElement.innerHTML = year;
}

function setNavButtonEvents() {
    const hamburgerElement = document.querySelector('#hamburger-button');
    // const hamburgerIcon = document.querySelector('#hamburger-icon');
    const mainNavElement = document.querySelector('#mobile-menu');

    const toggleNav = () => {
        mainNavElement.classList.toggle('hidden');
        mainNavElement.classList.toggle('flex');
        hamburgerElement.classList.toggle('toggle-btn');
    };

    hamburgerElement.addEventListener('click', toggleNav);
    mainNavElement.addEventListener('click', toggleNav);
}

// you can also use defer when calling the script
document.addEventListener('DOMContentLoaded', initApp);