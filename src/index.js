/**
 * Main Application Entry Point
 */
import { ThemeManager } from './utils/theme.js';
import { NavigationManager } from './utils/navigation.js';
import { AnimationManager } from './utils/animations.js';
import { FormManager } from './utils/formValidation.js';
import { ScrollManager } from './utils/scroll.js';

// Initialize all managers when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    new NavigationManager();
    new AnimationManager();
    new FormManager();
    new ScrollManager();
    
    console.log('🚀 Landing page initialized successfully!');
});
