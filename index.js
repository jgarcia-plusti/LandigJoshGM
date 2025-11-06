// Funcionalidad para el formulario de contacto

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const formMsg = document.getElementById('formMsg');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            if (!nombre || !email || !mensaje) {
                formMsg.textContent = 'Por favor, completa todos los campos.';
                formMsg.style.color = 'red';
                return;
            }

            // Simulación de envío (puedes integrar con backend posteriormente)
            formMsg.textContent = '¡Gracias por tu mensaje! Te responderé pronto.';
            formMsg.style.color = 'green';
            form.reset();
        });
    }
});
