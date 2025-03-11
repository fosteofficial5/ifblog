// script.js

// Smooth scrolling on anchor link click
document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#services').scrollIntoView({
        behavior: 'smooth'
    });
});
