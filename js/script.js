document.addEventListener('DOMContentLoaded', () => {
    // Menu toggle functionality
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Card flip functionality
    const flipButtons = document.querySelectorAll('.flip-button');
    
    flipButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = button.closest('.card');
            card.classList.toggle('flipped');
        });
    });
});