
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
    document.addEventListener('DOMContentLoaded', () => {
        // --- Active Navigation Link Highlighting for Multi-Page Site ---
        const navLinks = document.querySelectorAll('.sidebar-nav a');
        const currentPath = window.location.pathname.split('/').pop();

        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            if (linkPath === currentPath) {
                link.classList.add('active');
            } else if ((currentPath === '' || currentPath === 'index.html') && linkPath === 'index.html') {
                link.classList.add('active');
            }
        });

        // --- Mobile Navigation Toggle ---
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const sidebar = document.querySelector('.sidebar');

        hamburgerBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });

        document.addEventListener('click', (event) => {
            const isClickInsideSidebar = sidebar.contains(event.target);
            const isClickOnHamburger = hamburgerBtn.contains(event.target);

            if (!isClickInsideSidebar && !isClickOnHamburger && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
            }
        });

        // --- Smooth Scrolling for Anchor Links ---
        document.querySelectorAll('a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    document.querySelector(href).scrollIntoView({
                        behavior: 'smooth'
                    });
                } else if (href !== '#' && !href.startsWith('http')) {
                    // Handle navigation to other pages (no smooth scroll)
                }
            });
        });

        // --- Dynamic Header on Scroll (for Mobile View) ---
        const mobileHeader = document.querySelector('.mobile-header');
        if (mobileHeader) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    mobileHeader.classList.add('scrolled');
                } else {
                    mobileHeader.classList.remove('scrolled');
                }
            });
        }
    });

});
