const menuButton = document.querySelector('.logo-menu-container');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});


document.addEventListener('DOMContentLoaded', function() {
    const heroOne = document.querySelector('.hero-white');
    const heroTwo = document.querySelector('.hero-green');
    const headingTwo = document.querySelector('.heading-two');

    function animateElements() {
        gsap.fromTo(heroOne, 
            { opacity: 0, y: 50},
            { opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: "power2.out" }
        );

        gsap.fromTo(heroTwo, 
            { opacity: 0, y: 50},
            { opacity: 1, y: 0, duration: 1.2, delay: 0.5, ease: "power2.out" }
        );

        gsap.fromTo(headingTwo, 
            { opacity: 0 },
            { opacity: 1, duration: 1.2, delay: 1.3, ease: "power2.out" }
        );
    }

    animateElements();
});