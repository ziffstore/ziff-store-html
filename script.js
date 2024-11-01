// Toggle Dark/Light Mode
document.getElementById('toggle-theme').addEventListener('click', function() {
    // Toggle 'dark' class on the body
    document.body.classList.toggle('dark');

    // Change button text based on current mode
    this.textContent = document.body.classList.contains('dark') ? '🌞' : '🌙';

    // Save the theme preference in local storage
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Check local storage for theme preference on page load
window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark'); // Apply dark mode if previously set
        document.getElementById('toggle-theme').textContent = '🌞'; // Update button text
    } else {
        document.body.classList.remove('dark'); // Ensure light mode if 'light' or no preference is saved
        document.getElementById('toggle-theme').textContent = '🌙'; // Update button text
    }
};

// Toggle responsive navigation menu
function toggleMenu() {
    const navLinks = document.getElementById('nav-links'); // Select nav links
    navLinks.classList.toggle('active');
}

function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', newTheme);
}
