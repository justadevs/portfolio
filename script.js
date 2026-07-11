// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});

// Simple Interactive Contact Form Handler
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formStatus.textContent = "Thank you! Your message has been sent successfully.";
    contactForm.reset();
    
    setTimeout(() => {
        formStatus.textContent = "";
    }, 5000);
});
