
document.addEventListener('DOMContentLoaded', () => {

    // --- Active Navigation Link Highlighting for Multi-Page Site ---
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    const currentPath = window.location.pathname.split('/').pop(); // Gets the current file name e.g., "about.html"

    navLinks.forEach(link => {
        // Get the file name from the link's href
        const linkPath = link.getAttribute('href');

        // If the current page's path matches the link's path, add the active class
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            // Also handle the case for the home page (index.html or empty path)
            if (currentPath === '' || currentPath === 'index.html') {
                if (linkPath === 'index.html') {
                    link.classList.add('active');
                }
            }
        }
    });

    // --- Mobile Navigation Toggle ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sidebar = document.querySelector('.sidebar');

    hamburgerBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Close the sidebar when clicking outside on mobile
    document.addEventListener('click', (event) => {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnHamburger = hamburgerBtn.contains(event.target);

        if (!isClickInsideSidebar && !isClickOnHamburger && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });
});
