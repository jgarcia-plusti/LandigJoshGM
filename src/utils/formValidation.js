/**
 * Form Validation & Submission
 */
export class FormManager {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.formMsg = document.getElementById('formMsg');
        this.numeroWhatsApp = '50255844677';
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
            this.addRealTimeValidation();
        }
    }

    addRealTimeValidation() {
        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => {
                if (input.classList.contains('error')) {
                    this.validateField(input);
                }
            });
        });
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Remove previous error state
        field.classList.remove('error');
        this.removeErrorMessage(field);

        // Required validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'Este campo es obligatorio';
        }

        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Por favor, ingresa un email válido';
            }
        }

        // Phone validation
        if (field.type === 'number' && field.id === 'telefono' && value) {
            const phoneRegex = /^[0-9\s\-\+\(\)]{8,15}$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                errorMessage = 'Por favor, ingresa un teléfono válido';
            }
        }

        // Show error if invalid
        if (!isValid) {
            field.classList.add('error');
            this.showErrorMessage(field, errorMessage);
        }

        return isValid;
    }

    showErrorMessage(field, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        field.parentElement.appendChild(errorDiv);
    }

    removeErrorMessage(field) {
        const errorDiv = field.parentElement.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        // Validate all fields
        const inputs = this.form.querySelectorAll('input[required], textarea[required]');
        let isFormValid = true;

        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            this.showFormMessage('Por favor, completa todos los campos correctamente.', 'error');
            return;
        }

        // Get form values
        const formData = {
            nombre: document.getElementById('nombre').value.trim(),
            telefono: document.getElementById('telefono').value.trim(),
            email: document.getElementById('email').value.trim(),
            mensaje: document.getElementById('mensaje').value.trim()
        };

        // Create WhatsApp message
        const texto = `Hola Josue!%0A*Nombre:* ${formData.nombre}%0A*Teléfono:* ${formData.telefono}%0A*Correo:* ${formData.email}%0A*Mensaje:* ${formData.mensaje}`;
        const url = `https://wa.me/${this.numeroWhatsApp}?text=${texto}`;

        // Show success message
        this.showFormMessage('¡Redirigiendo a WhatsApp...!', 'success');

        // Open WhatsApp after short delay
        setTimeout(() => {
            window.open(url, '_blank');
            this.form.reset();
            // Clear message after 3 seconds
            setTimeout(() => {
                if (this.formMsg) {
                    this.formMsg.textContent = '';
                    this.formMsg.className = '';
                }
            }, 3000);
        }, 500);
    }

    showFormMessage(message, type) {
        if (!this.formMsg) return;

        this.formMsg.textContent = message;
        this.formMsg.className = `form-message ${type}`;
        this.formMsg.style.display = 'block';
    }
}
