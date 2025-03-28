// script.js - Updated with resume-specific functionality
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Mobile Menu Toggle
function toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu if open
        const menuToggle = document.querySelector('.toggle');
        const menu = document.querySelector('.menu');
        if (menuToggle.classList.contains('active')) {
            menuToggle.classList.remove('active');
            menu.classList.remove('active');
        }
    });
});

// Animation on Scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.skillsBx, .projectBx, .certBx, .timeline-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Form Submission
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', { name, email, message });
        
        // Show success message
        alert('Thank you for your message, Alok will get back to you soon!');
        this.reset();
    });
}

// Initialize elements with animation properties
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.skillsBx, .projectBx, .certBx, .timeline-item');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.5s ease';
    });
    
    // Set current year in footer
    const year = new Date().getFullYear();
    document.querySelector('.copyright p').textContent = `Copyright © ${year} Alok Kumar Gupta. All Rights Reserved.`;
});