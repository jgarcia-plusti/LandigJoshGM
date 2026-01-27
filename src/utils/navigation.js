/**
 * Navigation Management - Mobile Menu & Active Links
 */
export class NavigationManager {
    constructor() {
        this.navToggle = document.getElementById('navToggle');
        this.navMenu = document.getElementById('navMenu');
        this.navLinks = document.querySelectorAll('.nav-menu a');
        this.sections = document.querySelectorAll('section[id]');
        this.init();
    }

    init() {
        // Mobile menu toggle
        if (this.navToggle) {
            this.navToggle.addEventListener('click', () => this.toggleMobileMenu());
        }

        // Close menu when clicking on a link
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    this.closeMobileMenu();
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 && 
                !this.navToggle.contains(e.target) && 
                !this.navMenu.contains(e.target) &&
                this.navMenu.classList.contains('active')) {
                this.closeMobileMenu();
            }
        });

        // Active navigation on scroll
        window.addEventListener('scroll', () => this.updateActiveNav());
        this.updateActiveNav(); // Initial call
    }

    toggleMobileMenu() {
        const isActive = this.navMenu.classList.toggle('active');
        this.navToggle.setAttribute('aria-expanded', isActive);
        document.body.style.overflow = isActive ? 'hidden' : '';
    }

    closeMobileMenu() {
        this.navMenu.classList.remove('active');
        this.navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    updateActiveNav() {
        let current = '';
        const scrollY = window.pageYOffset;

        this.sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        this.navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href && href.includes(current)) {
                link.classList.add('active');
            }
        });
    }
}
