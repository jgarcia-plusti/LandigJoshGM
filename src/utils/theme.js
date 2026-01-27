/**
 * Theme Management - Dark Mode Toggle
 */
export class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        // Aplicar tema guardado
        this.applyTheme(this.currentTheme);
        
        // Event listener para toggle
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Detectar preferencia del sistema
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        if (!localStorage.getItem('theme')) {
            this.currentTheme = prefersDark.matches ? 'dark' : 'light';
            this.applyTheme(this.currentTheme);
        }

        // Escuchar cambios en preferencia del sistema
        prefersDark.addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                this.currentTheme = e.matches ? 'dark' : 'light';
                this.applyTheme(this.currentTheme);
            }
        });
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const icon = this.themeToggle?.querySelector('.theme-icon');
        if (icon) {
            icon.textContent = theme === 'dark' ? '☀️' : '🌙';
        }
    }
}
