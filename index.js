document.addEventListener('DOMContentLoaded', function () {
    
    // --- Lógica del Formulario de Contacto ---
    const form = document.getElementById('contactForm');
    const formMsg = document.getElementById('formMsg');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const nombre = document.getElementById('nombre').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            if (!nombre || !email || !mensaje) {
                if(formMsg) {
                    formMsg.textContent = 'Por favor, completa los campos requeridos.';
                    formMsg.style.color = 'red';
                    formMsg.style.textAlign = 'center';
                    formMsg.style.marginTop = '1rem';
                }
                return;
            }

            // WhatsApp Redirection
            const numeroWhatsApp = '50255844677';
            const texto = `Hola Josue!%0A*Nombre:* ${nombre}%0A*Teléfono:* ${telefono}%0A*Correo:* ${email}%0A*Mensaje:* ${mensaje}`;
            const url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;
            
            window.open(url, '_blank');
            
            if(formMsg) {
                formMsg.textContent = '¡Redirigiendo a WhatsApp...!';
                formMsg.style.color = '#0078d7';
                formMsg.style.textAlign = 'center';
                formMsg.style.marginTop = '1rem';
            }
            form.reset();
        });
    }

    // --- Animaciones al hacer Scroll (Intersection Observer) ---
    
    // 1. Observador para Secciones (Fade In / Slide Up)
    const observerOptions = {
        threshold: 0.15, // Se activa cuando el 15% del elemento es visible
        rootMargin: "0px 0px -50px 0px"
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Solo animar una vez
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        sectionObserver.observe(section);
    });

    // 2. Observador para Barras de Habilidades (Llenado dinámico)
    const skillsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Selecciona el elemento interno que tiene la clase de color y el ancho
                const fillBar = entry.target.querySelector('.skill-fill');
                if (fillBar) {
                    // Obtenemos el ancho objetivo desde un atributo de datos o clase
                    // Como estamos usando clases CSS para el ancho (width: 90%), 
                    // simplemente añadimos una clase que active la transición si estaba en 0
                    // O mejor, leemos la clase específica (js, csharp, etc) y forzamos un reflow
                    
                    // Estrategia: Vamos a asignar el width directamente vía estilo para animarlo
                    // Basado en las clases que ya tienen
                    let targetWidth = '0%';
                    if (fillBar.classList.contains('js')) targetWidth = '90%';
                    else if (fillBar.classList.contains('csharp')) targetWidth = '85%';
                    else if (fillBar.classList.contains('sql')) targetWidth = '80%';
                    else if (fillBar.classList.contains('pg')) targetWidth = '75%';
                    else if (fillBar.classList.contains('htmlcss')) targetWidth = '95%';
                    
                    fillBar.style.width = targetWidth;
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.skill').forEach(skill => {
        skillsObserver.observe(skill);
    });

    // --- Navegación Activa al Scroll ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
                        });
                    
                    });});