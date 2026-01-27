/**
 * Scroll Utilities - Progress Bar & Back to Top
 */
export class ScrollManager {
    constructor() {
        this.scrollProgress = document.getElementById('scrollProgress');
        this.backToTopBtn = document.getElementById('backToTop');
        this.init();
    }

    init() {
        if (this.scrollProgress) {
            window.addEventListener('scroll', () => this.updateScrollProgress());
        }

        if (this.backToTopBtn) {
            window.addEventListener('scroll', () => this.toggleBackToTop());
            this.backToTopBtn.addEventListener('click', () => this.scrollToTop());
        }
    }

    updateScrollProgress() {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        if (this.scrollProgress) {
            this.scrollProgress.style.width = `${scrolled}%`;
        }
    }

    toggleBackToTop() {
        if (!this.backToTopBtn) return;

        if (window.pageYOffset > 300) {
            this.backToTopBtn.classList.add('visible');
        } else {
            this.backToTopBtn.classList.remove('visible');
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
