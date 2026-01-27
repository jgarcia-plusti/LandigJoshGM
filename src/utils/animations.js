/**
 * Scroll Animations - Intersection Observer
 */
export class AnimationManager {
    constructor() {
        this.init();
    }

    init() {
        this.initSectionAnimations();
        this.initSkillAnimations();
    }

    initSectionAnimations() {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const sectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            sectionObserver.observe(section);
        });
    }

    initSkillAnimations() {
        const skillsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const fillBar = entry.target.querySelector('.skill-fill');
                    if (fillBar) {
                        const skillLevels = {
                            'js': '90%',
                            'csharp': '85%',
                            'sql': '80%',
                            'pg': '75%',
                            'htmlcss': '95%'
                        };

                        for (const [className, width] of Object.entries(skillLevels)) {
                            if (fillBar.classList.contains(className)) {
                                fillBar.style.width = width;
                                break;
                            }
                        }
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.skill').forEach(skill => {
            skillsObserver.observe(skill);
        });
    }
}
