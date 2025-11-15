// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
                navLinks.classList.remove('active');
            }
        });
        
        // Close menu when clicking a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.blog-card, .activity-card, .about-card, .contact-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ============================================
// Language Switcher Functionality
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const languageBtn = document.querySelector('.language-btn');
    const languageDropdown = document.querySelector('.language-dropdown');
    
    if (languageBtn && languageDropdown) {
        // Toggle dropdown
        languageBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const isExpanded = languageBtn.getAttribute('aria-expanded') === 'true';
            languageBtn.setAttribute('aria-expanded', !isExpanded);
            languageDropdown.classList.toggle('show');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!languageBtn.contains(event.target) && !languageDropdown.contains(event.target)) {
                languageBtn.setAttribute('aria-expanded', 'false');
                languageDropdown.classList.remove('show');
            }
        });
        
        // Close dropdown on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && languageDropdown.classList.contains('show')) {
                languageBtn.setAttribute('aria-expanded', 'false');
                languageDropdown.classList.remove('show');
                languageBtn.focus();
            }
        });
        
        // Store language preference when changed
        const langLinks = languageDropdown.querySelectorAll('.lang-link');
        langLinks.forEach(link => {
            link.addEventListener('click', function() {
                const href = this.getAttribute('href');
                // Extract language from URL
                const langMatch = href.match(/\/([a-z]{2})\//);
                const lang = langMatch ? langMatch[1] : 'ca'; // default to Catalan
                localStorage.setItem('preferredLanguage', lang);
            });
        });
    }
});

// ============================================
// Browser Language Detection
// ============================================
(function() {
    // Only run on first visit or if no language preference is stored
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    const preferredLang = localStorage.getItem('preferredLanguage');
    
    if (!hasVisited && !preferredLang) {
        // Mark that user has visited
        localStorage.setItem('hasVisitedBefore', 'true');
        
        // Get browser language
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0].toLowerCase();
        
        // Supported languages
        const supportedLangs = ['ca', 'en', 'es', 'ar', 'ur'];
        
        // Check if current page is already in user's preferred language
        const currentPath = window.location.pathname;
        const currentLang = getCurrentLanguageFromPath(currentPath);
        
        // If browser language is supported and different from current page
        if (supportedLangs.includes(langCode) && langCode !== currentLang) {
            // Store preference
            localStorage.setItem('preferredLanguage', langCode);
            
            // Optionally redirect (commented out for less intrusive UX)
            // redirectToLanguage(langCode);
            
            // Show a subtle notification instead (you can implement this)
            // showLanguageNotification(langCode);
        }
    }
    
    function getCurrentLanguageFromPath(path) {
        // Extract language from path like /en/, /es/, etc.
        const match = path.match(/^\/([a-z]{2})\//);
        return match ? match[1] : 'ca'; // default to Catalan
    }
    
    function redirectToLanguage(lang) {
        // Only redirect if not already on the correct language
        const currentPath = window.location.pathname;
        const currentLang = getCurrentLanguageFromPath(currentPath);
        
        if (currentLang !== lang) {
            if (lang === 'ca') {
                // Catalan is the default, redirect to root
                window.location.href = '/';
            } else {
                // Other languages have their prefix
                window.location.href = '/' + lang + '/';
            }
        }
    }
})();

// ============================================
// Persist Language Selection
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // When user manually selects a language, it's already stored by the click handler above
    // This just ensures the preference is respected on navigation
    
    const preferredLang = localStorage.getItem('preferredLanguage');
    if (preferredLang) {
        // Could add visual indication that this is user's preferred language
        const currentPath = window.location.pathname;
        const currentLang = getCurrentLanguageFromPath(currentPath);
        
        // Add a class to indicate this matches user preference
        if (preferredLang === currentLang) {
            document.body.classList.add('preferred-language');
        }
    }
    
    function getCurrentLanguageFromPath(path) {
        const match = path.match(/^\/([a-z]{2})\//);
        return match ? match[1] : 'ca';
    }
});
