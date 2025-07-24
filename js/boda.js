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



// Carga y estilización de imágenes
document.getElementById('upload-btn').addEventListener('click', function() {
    document.getElementById('image-upload').click();
});

document.getElementById('image-upload').addEventListener('change', function(e) {
    const files = e.target.files;
    const preview = document.getElementById('image-preview');
    const gallery = document.getElementById('styled-gallery');
    
    preview.innerHTML = '';
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (!file.type.match('image.*')) continue;
        
        const reader = new FileReader();
        
        reader.onload = function(e) {
            // Miniatura para previsualización
            const imgPreview = document.createElement('img');
            imgPreview.src = e.target.result;
            preview.appendChild(imgPreview);
            
            // Imagen completa para la galería
            const imgGallery = document.createElement('img');
            imgGallery.src = e.target.result;
            imgGallery.className = 'gallery-image';
            imgGallery.style.width = '300px';
            gallery.appendChild(imgGallery);
        }
        
        reader.readAsDataURL(file);
    }
});

// Controles de estilo
const styleControls = {
    borderRadius: document.getElementById('border-radius'),
    imageWidth: document.getElementById('image-width'),
    imageOpacity: document.getElementById('image-opacity'),
    imageFilter: document.getElementById('image-filter')
};

const styleValues = {
    borderRadius: document.getElementById('radius-value'),
    imageWidth: document.getElementById('width-value'),
    imageOpacity: document.getElementById('opacity-value')
};

// Actualizar valores mostrados
styleControls.borderRadius.addEventListener('input', function() {
    styleValues.borderRadius.textContent = this.value + 'px';
    applyStyles();
});

styleControls.imageWidth.addEventListener('input', function() {
    styleValues.imageWidth.textContent = this.value + 'px';
    applyStyles();
});

styleControls.imageOpacity.addEventListener('input', function() {
    styleValues.imageOpacity.textContent = this.value + '%';
    applyStyles();
});

styleControls.imageFilter.addEventListener('change', applyStyles);

function applyStyles() {
    const images = document.querySelectorAll('.gallery-image');
    
    images.forEach(img => {
        img.style.borderRadius = styleControls.borderRadius.value + 'px';
        img.style.width = styleControls.imageWidth.value + 'px';
        img.style.opacity = styleControls.imageOpacity.value / 100;
        
        switch(styleControls.imageFilter.value) {
            case 'grayscale':
                img.style.filter = 'grayscale(100%)';
                break;
            case 'sepia':
                img.style.filter = 'sepia(100%)';
                break;
            case 'blur':
                img.style.filter = 'blur(2px)';
                break;
            case 'brightness':
                img.style.filter = 'brightness(150%)';
                break;
            default:
                img.style.filter = 'none';
        }
    });
}

// Opcional: Permitir arrastrar y soltar imágenes
const gallery = document.getElementById('styled-gallery');

gallery.addEventListener('dragover', function(e) {
    e.preventDefault();
    this.style.backgroundColor = '#f0e6e6';
});

gallery.addEventListener('dragleave', function() {
    this.style.backgroundColor = '';
});

gallery.addEventListener('drop', function(e) {
    e.preventDefault();
    this.style.backgroundColor = '';
    
    const files = e.dataTransfer.files;
    document.getElementById('image-upload').files = files;
    
    // Disparar el evento change manualmente
    const event = new Event('change');
    document.getElementById('image-upload').dispatchEvent(event);
});