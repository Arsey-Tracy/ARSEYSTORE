document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Toggle mobile navigation menu
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav ul');

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
    });
    
    // Show and hide more information in the product features section
    const learnMoreBtns = document.querySelectorAll('.learn-more-btn');

    learnMoreBtns.forEach(button => {
        button.addEventListener('click', () => {
            const features = document.querySelector('#product-features .list');
            features.classList.toggle('expanded');
            button.textContent = features.classList.contains('expanded') ? 'Show Less' : 'Learn More';
        });
    });
});