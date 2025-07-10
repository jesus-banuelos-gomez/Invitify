// Datos de las plantillas (en una app real esto vendría de una API)
const templatesData = {
    1: {
        name: 'Boda Elegante',
        category: 'wedding',
        background: '#f5ece1',
        elements: [
            {
                type: 'text',
                content: 'Invitación de Boda',
                fontFamily: 'Times New Roman',
                fontSize: '24px',
                color: '#6d655a',
                x: 50,
                y: 100
            },
            {
                type: 'text',
                content: 'Ana & Luis',
                fontFamily: 'Arial',
                fontSize: '36px',
                color: '#6d655a',
                x: 50,
                y: 150
            }
        ]
    },
    2: {
        name: 'Cumpleaños Fiesta',
        category: 'birthday',
        background: '#e9dccc',
        elements: [
            {
                type: 'text',
                content: '¡Fiesta de Cumpleaños!',
                fontFamily: 'Arial',
                fontSize: '28px',
                color: '#6d655a',
                x: 50,
                y: 100
            },
            {
                type: 'text',
                content: '25 años',
                fontFamily: 'Courier New',
                fontSize: '32px',
                color: '#6d655a',
                x: 50,
                y: 150
            }
        ]
    },
    // Más plantillas...
};

// Obtener datos de una plantilla específica
function getTemplateData(templateId) {
    return templatesData[templateId] || null;
}

// Cargar una plantilla en el editor
function loadTemplateToEditor(templateId) {
    const template = getTemplateData(templateId);
    if (!template) return;
    
    // Limpiar canvas
    const canvas = document.getElementById('invitation-canvas');
    canvas.innerHTML = '';
    
    // Establecer fondo
    canvas.style.backgroundColor = template.background;
    
    // Añadir elementos
    template.elements.forEach(element => {
        if (element.type === 'text') {
            addTextElement(element.content, element.fontFamily, element.fontSize, element.color, element.x, element.y);
        }
        // Podrías añadir más tipos de elementos aquí (imágenes, formas, etc.)
    });
}

// Función para añadir texto al canvas
function addTextElement(content, fontFamily, fontSize, color, x, y) {
    const textElement = document.createElement('div');
    textElement.className = 'canvas-text';
    textElement.textContent = content;
    textElement.style.fontFamily = fontFamily;
    textElement.style.fontSize = fontSize;
    textElement.style.color = color;
    textElement.style.position = 'absolute';
    textElement.style.left = `${x}px`;
    textElement.style.top = `${y}px`;
    textElement.style.cursor = 'move';
    textElement.draggable = true;
    
    // Hacer el texto arrastrable
    makeDraggable(textElement);
    
    document.getElementById('invitation-canvas').appendChild(textElement);
}

// Hacer elementos arrastrables
function makeDraggable(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
    element.onmousedown = dragMouseDown;
    
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        
        // Obtener la posición del ratón al inicio
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
    
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        
        // Calcular la nueva posición
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        // Establecer la nueva posición
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }
    
    function closeDragElement() {
        // Dejar de mover cuando se suelta el botón del ratón
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Exportar funciones para usar en otros archivos
export { getTemplateData, loadTemplateToEditor, addTextElement };