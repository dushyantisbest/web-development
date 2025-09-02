// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleMobile = document.getElementById('theme-toggle');
    const themeToggleDesktop = document.getElementById('theme-toggle-desktop');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the saved theme
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        updateToggleIcon(true);
    }
    
    // Theme toggle event listeners
    function handleThemeToggle() {
        const isDark = body.getAttribute('data-theme') === 'dark';
        
        // Add transition class for smooth animation
        document.documentElement.classList.add('theme-transitioning');
        
        if (isDark) {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            updateToggleIcon(false);
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            updateToggleIcon(true);
        }
        
        // Remove transition class after animation
        setTimeout(() => {
            document.documentElement.classList.remove('theme-transitioning');
        }, 300);
    }
    
    if (themeToggleMobile) themeToggleMobile.addEventListener('click', handleThemeToggle);
    if (themeToggleDesktop) themeToggleDesktop.addEventListener('click', handleThemeToggle);
    
    function updateToggleIcon(isDark) {
        const iconMobile = themeToggleMobile?.querySelector('i');
        const iconDesktop = themeToggleDesktop?.querySelector('i');
        const iconClass = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        
        if (iconMobile) iconMobile.className = iconClass;
        if (iconDesktop) iconDesktop.className = iconClass;
    }
    
    // Close navbar on outside click
    document.addEventListener('click', function(event) {
        const navbar = document.querySelector('.navbar-collapse');
        const toggler = document.querySelector('.navbar-toggler');
        
        if (navbar && navbar.classList.contains('show') && 
            !navbar.contains(event.target) && 
            !toggler.contains(event.target)) {
            const bsCollapse = new bootstrap.Collapse(navbar, {toggle: false});
            bsCollapse.hide();
        }
    });
});