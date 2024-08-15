"// JavaScript for dynamic features, animations, etc.


document.addEventListener('DOMContentLoaded', function() {
    // Example: Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example: Simple animation on scroll
    const elements = document.querySelectorAll('.service-item, .portfolio-item, .hero-content');
    window.addEventListener('scroll', () => {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        });
    });
});
"

in this update "//
