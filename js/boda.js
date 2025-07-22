document.addEventListener('DOMContentLoaded', function() {
    // Hacer elementos editables
    const editables = document.querySelectorAll('.editable');
    editables.forEach(element => {
        element.addEventListener('click', function() {
            const currentText = this.textContent;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = currentText;
            
            this.textContent = '';
            this.appendChild(input);
            input.focus();
            
            input.addEventListener('blur', function() {
                const parent = this.parentElement;
                parent.textContent = this.value || currentText;
            });
            
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    this.blur();
                }
            });
        });
    });
    
    // Manejar el formulario RSVP
    const rsvpForm = document.getElementById('rsvp-form');
    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('guest-name').value;
        const attendance = document.getElementById('guest-attendance').value;
        const message = document.getElementById('guest-message').value;
        
        // Aquí normalmente enviarías los datos a un servidor
        console.log('RSVP recibido:', { name, attendance, message });
        
        // Mostrar confirmación
        alert(`¡Gracias, ${name}! Tu respuesta ha sido registrada.`);
        
        // Resetear formulario
        rsvpForm.reset();
    });
    
    // Efecto de carga inicial
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Efecto de transición al cargar
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 1s ease-in-out';