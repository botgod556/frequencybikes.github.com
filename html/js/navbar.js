function toggleNav() {
    var navLinks = document.querySelector('.nav-links');
    var burgerMenu = document.querySelector('.burger-menu');

    if (window.innerWidth <= 768) {
        // Toggle display for small screens
        navLinks.style.display = (navLinks.style.display === 'flex') ? 'none' : 'flex';
    } else {
        // For larger screens, ensure links are visible and burger icon is hidden
        navLinks.style.display = 'flex';
        burgerMenu.style.display = 'none';
    }
}

// Handle window resize events
window.addEventListener('resize', function () {
    var navLinks = document.querySelector('.nav-links');
    var burgerMenu = document.querySelector('.burger-menu');

    if (window.innerWidth > 768) {
        // For larger screens, ensure links are visible and burger icon is hidden
        navLinks.style.display = 'flex';
        burgerMenu.style.display = 'none';
    } else {
        // For small screens, reset styles based on the toggle state
        if (navLinks.style.display === 'none') {
            burgerMenu.style.display = 'block';
        }
    }
});