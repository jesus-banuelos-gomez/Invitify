import { loadTemplateToEditor, addTextElement } from '../../templates.js';

// Inicializar el editor
function initEditor(templateId) {
    // Cargar la plantilla seleccionada
    loadTemplateToEditor(templateId);
    
    // Configurar eventos para los controles del editor
    setupEditorControls();
}

function setupEditorControls() {
    // Añadir texto
    document.getElementById('add-text').addEventListener('click', function() {
        const text = document.getElementById('text-input').value;
        const color = document.getElementById('text-color').value;
        const fontFamily = document.getElementById('font-family').value;
        const fontSize = document.getElementById('font-size').value + 'px';
        
        if (text) {
            addTextElement(text, fontFamily, fontSize, color, 50, 50);
            document.getElementById('text-input').value = '';
        }
    });
    
    // Cambiar color de fondo
    document.getElementById('bg-color').addEventListener('input', function() {
        document.getElementById('invitation-canvas').style.backgroundColor = this.value;
    });
    
    // Añadir imagen
    document.getElementById('add-image').addEventListener('click', function() {
        const fileInput = document.getElementById('image-upload');
        const size = document.getElementById('image-size').value;
        
        if (fileInput.files && fileInput.files[0]) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.width = `${size}px`;
                img.style.position = 'absolute';
                img.style.left = '50px';
                img.style.top = '50px';
                img.style.cursor = 'move';
                
                makeDraggable(img);
                
                document.getElementById('invitation-canvas').appendChild(img);
            };
            
            reader.readAsDataURL(fileInput.files[0]);
        }
    });
    
    // Guardar diseño
    document.getElementById('save-design').addEventListener('click', function() {
        alert('Diseño guardado (en una app real esto guardaría en la base de datos)');
    });
    
    // Exportar diseño
    document.getElementById('export-design').addEventListener('click', function() {
        exportInvitation();
    });
}

// Exportar la invitación
function exportInvitation() {
    const canvas = document.getElementById('invitation-canvas');
    
    // En una app real, usarías una librería como html2canvas para exportar a imagen
    alert('En una app real, esto exportaría la invitación como imagen o PDF');
    
    // Ejemplo con html2canvas (descomentar si la librería está disponible)
    /*
    html2canvas(canvas).then(canvas => {
        const link = document.createElement('a');
        link.download = 'invitacion-invitify.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
    */
}

// Hacer elementos arrastrables (similar a la función en templates.js)
function makeDraggable(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
    element.onmousedown = dragMouseDown;
    
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
    
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }
    
    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Exportar initEditor para usarlo en main.js
export { initEditor };