const menuButton = document.querySelector('.logo-menu-container');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});