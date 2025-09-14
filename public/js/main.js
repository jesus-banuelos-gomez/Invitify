import { createNewTitulo, createDraggableDiv } from "./elementCreators.js";
import { clearDesign } from "./clearDesign.js";
import { getTemplateData } from "./templates-data.js";

// Hacer disponibles las variables globalmente
window.elementCount = window.elementCount || 1;
window.divCount = window.divCount || 0;
window.currentZIndex = window.currentZIndex || 10;

document.addEventListener('DOMContentLoaded', function(){
    const container = document.getElementById('divEditable');
    const btnNew = document.getElementById('addNew');
    const lienzo = document.getElementById('invitation');
    const item = document.getElementById('addDivBtn');
    const btnClear = document.getElementById('clear-design');
    
    // Event listeners para los botones del editor
    btnNew.addEventListener('click', function() {
        createNewTitulo(container, lienzo, 250, 250);
    });

    item.addEventListener('click', function() {
        createDraggableDiv(container, lienzo, 50, 50);
    });

    btnClear.addEventListener('click', function() {
        clearDesign(container, lienzo);
    });

    // Cargar plantilla si hay una seleccionada
    loadSelectedTemplate();
});

// Función para cargar la plantilla seleccionada
function loadSelectedTemplate() {
    const templateId = sessionStorage.getItem('selectedTemplate');
    if (!templateId) return;
    
    const template = getTemplateData(templateId);
    if (!template) return;
    
    const container = document.getElementById('divEditable');
    const lienzo = document.getElementById('invitation');
    
    // Limpiar diseño actual
    clearDesign(container, lienzo);
    
    // Establecer fondo
    lienzo.style.backgroundColor = template.background;
    
    // Crear elementos de la plantilla
    template.elements.forEach(element => {
        if (element.type === 'text') {
            createTextElementFromTemplate(container, lienzo, element);
        } else if (element.type === 'image') {
            createImageElementFromTemplate(container, lienzo, element);
        }
    });
    
    // Limpiar el storage después de cargar
    sessionStorage.removeItem('selectedTemplate');
}

// Función para crear elementos de texto desde la plantilla
function createTextElementFromTemplate(container, lienzo, elementData) {
    // Incrementar contadores globales
    const currentId = window.elementCount++;
    window.currentZIndex++;
    
    const divPadre = document.createElement('div');
    const textoEditable = document.createElement('div');

    divPadre.className = 'didiv';
    divPadre.id = `draggable-title-control-${currentId}`;
    
    const controlHeader = document.createElement('div');
    controlHeader.className = 'control-header';
    const controlLabel = document.createElement('label');
    controlLabel.className = 'control-label';
    controlLabel.textContent = `Texto ${currentId}`;
    
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'toggle-btn';
    toggleBtn.setAttribute('aria-expanded', 'true');
    toggleBtn.innerHTML = '<span class="plus-icon">+</span><span class="minus-icon">-</span>';
    
    controlHeader.appendChild(controlLabel);
    controlHeader.appendChild(toggleBtn);

    const controlContent = document.createElement('div');
    controlContent.className = 'control-content';

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.className = 'title-input';
    titleInput.placeholder = 'Texto del elemento';
    titleInput.value = elementData.content;
    titleInput.style.display = 'block';

    const colorLabel = document.createElement('label');
    colorLabel.textContent = 'Color';
    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.className = 'color-input';
    colorInput.value = elementData.color || '#000000';
    colorInput.style.display = 'block';

    const sizeLabel = document.createElement('label');
    sizeLabel.textContent = 'Tamaño de fuente';
    const sizeInput = document.createElement('input');
    sizeInput.type = 'range';
    sizeInput.className = 'size-input';
    sizeInput.min = '10';
    sizeInput.max = '72';
    sizeInput.value = parseInt(elementData.fontSize) || 24;

    const opacityLabel = document.createElement('label');
    opacityLabel.textContent = 'Opacidad';
    const opacityInput = document.createElement('input');
    opacityInput.type = 'range';
    opacityInput.className = 'opacity-input';
    opacityInput.min = '0';
    opacityInput.max = '1';
    opacityInput.step = '0.01';
    opacityInput.value = '1';
    
    const fontLabel = document.createElement('label');
    fontLabel.textContent = 'Tipo de letra';
    const fontSelector = document.createElement('select');
    fontSelector.className = 'font-selector';
    
    // Fuentes predefinidas para el selector
    const fontOptions = {
        "Dancing Script": "'Dancing Script', cursive",
        "Playfair Display": "'Playfair Display', serif",
        "Montserrat": "'Montserrat', sans-serif",
        "Lato": "'Lato', sans-serif",
        "Courgette": "'Courgette', cursive",
        "Roboto": "'Roboto', sans-serif",
        "Open Sans": "'Open Sans', sans-serif",
        "Merriweather": "'Merriweather', serif",
        "Lora": "'Lora', serif",
        "Great Vibes": "'Great Vibes', cursive",
        "Pacifico": "'Pacifico', cursive",
        "Lobster": "'Lobster', cursive",
        "Poppins": "'Poppins', sans-serif",
        "Raleway": "'Raleway', sans-serif",
        "Alegreya": "'Alegreya', serif",
        "Nunito": "'Nunito', sans-serif"
    };
    
    // Llenar selector de fuentes
    for (const [name, value] of Object.entries(fontOptions)) {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = name;
        if (value === elementData.fontFamily) {
            option.selected = true;
        }
        fontSelector.appendChild(option);
    }
    
    const btnBringToFront = document.createElement('button');
    btnBringToFront.textContent = 'Traer al frente';
    btnBringToFront.className = 'bring-to-front';

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.className = 'eliminar-elemento';

    controlContent.appendChild(titleInput);
    controlContent.appendChild(colorLabel);
    controlContent.appendChild(colorInput);
    controlContent.appendChild(sizeLabel);
    controlContent.appendChild(sizeInput);
    controlContent.appendChild(opacityLabel);
    controlContent.appendChild(opacityInput);
    controlContent.appendChild(fontLabel);
    controlContent.appendChild(fontSelector);
    controlContent.appendChild(btnBringToFront);
    controlContent.appendChild(btnEliminar);

    divPadre.appendChild(controlHeader);
    divPadre.appendChild(controlContent);
    container.appendChild(divPadre);
    lienzo.appendChild(textoEditable);

    textoEditable.className = 'titulo-arrastrable';
    textoEditable.id = `titulo-${currentId}`;
    textoEditable.style.position = 'absolute';
    textoEditable.style.left = `${elementData.x}px`;
    textoEditable.style.top = `${elementData.y}px`;
    textoEditable.style.backgroundColor = 'rgba(255, 255, 255, 0.0)';
    textoEditable.textContent = elementData.content;
    textoEditable.style.color = elementData.color;
    textoEditable.style.fontSize = elementData.fontSize;
    textoEditable.style.fontFamily = elementData.fontFamily;
    textoEditable.style.zIndex = window.currentZIndex;
    
    // Aplicar estilos adicionales si existen
    if (elementData.fontWeight) {
        textoEditable.style.fontWeight = elementData.fontWeight;
    }
    if (elementData.fontStyle) {
        textoEditable.style.fontStyle = elementData.fontStyle;
    }
    if (elementData.textAlign) {
        textoEditable.style.textAlign = elementData.textAlign;
    }

    // Hacer el elemento arrastrable
    if (window.makeDraggable) {
        window.makeDraggable(textoEditable, lienzo);
    } else {
        makeDraggableFallback(textoEditable, lienzo);
    }
    
    // Configurar eventos
    toggleBtn.addEventListener('click', () => {
        const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        toggleBtn.setAttribute('aria-expanded', !isExpanded);
        controlContent.style.display = isExpanded ? 'none' : 'block';
    });

    titleInput.addEventListener('input', () => {
        textoEditable.textContent = titleInput.value;
    });

    colorInput.addEventListener('input', () => {
        textoEditable.style.color = colorInput.value;
    });

    sizeInput.addEventListener('input', () => {
        textoEditable.style.fontSize = `${sizeInput.value}px`;
    });

    opacityInput.addEventListener('input', () => {
        textoEditable.style.opacity = parseFloat(opacityInput.value);
    });

    fontSelector.addEventListener('change', () => {
        textoEditable.style.fontFamily = fontSelector.value;
    });

    btnBringToFront.addEventListener('click', () => {
        bringToFrontFallback(textoEditable);
    });

    btnEliminar.addEventListener('click', () => {
        container.removeChild(divPadre);
        lienzo.removeChild(textoEditable);
    });

    return divPadre;
}

// Función para crear elementos de imagen desde la plantilla
function createImageElementFromTemplate(container, lienzo, elementData) {
    const currentId = window.divCount++;
    window.currentZIndex++;
    
    const imgElement = document.createElement('img');
    
    imgElement.src = elementData.src;
    imgElement.className = 'draggable-div';
    imgElement.id = `imagen-${currentId}`;
    imgElement.style.position = 'absolute';
    imgElement.style.left = `${elementData.x}px`;
    imgElement.style.top = `${elementData.y}px`;
    imgElement.style.width = `${elementData.width}px`;
    imgElement.style.height = `${elementData.height}px`;
    imgElement.style.objectFit = 'contain';
    imgElement.style.zIndex = window.currentZIndex;
    
    if (elementData.rotation) {
        imgElement.style.transform = `rotate(${elementData.rotation}deg)`;
    }
    
    // Hacer la imagen arrastrable
    if (window.makeDraggable) {
        window.makeDraggable(imgElement, lienzo);
    } else {
        makeDraggableFallback(imgElement, lienzo);
    }
    
    lienzo.appendChild(imgElement);
    
    // Crear panel de control para la imagen
    createImageControlPanel(container, imgElement, elementData, currentId);
    
    return imgElement;
}

// Función para crear el panel de control de imágenes
function createImageControlPanel(container, imgElement, elementData, currentId) {
    const controlDiv = document.createElement('div');
    controlDiv.className = 'didiv';
    controlDiv.id = `control-imagen-${currentId}`;
    
    const controlHeader = document.createElement('div');
    controlHeader.className = 'control-header';
    const controlLabel = document.createElement('label');
    controlLabel.className = 'control-label';
    controlLabel.textContent = `Imagen ${currentId}`;
    
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'toggle-btn';
    toggleBtn.setAttribute('aria-expanded', 'true');
    toggleBtn.innerHTML = '<span class="plus-icon">+</span><span class="minus-icon">-</span>';
    
    controlHeader.appendChild(controlLabel);
    controlHeader.appendChild(toggleBtn);
    
    const controlContent = document.createElement('div');
    controlContent.className = 'control-content';
    
    // Vista previa de la imagen
    const previewImg = document.createElement('img');
    previewImg.src = elementData.src;
    previewImg.className = 'template-image-preview';
    previewImg.style.maxWidth = '100px';
    previewImg.style.maxHeight = '100px';
    previewImg.style.objectFit = 'contain';
    previewImg.style.margin = '5px 0';
    previewImg.style.borderRadius = '4px';
    previewImg.style.border = '1px solid #ddd';
    
    // Controles para la imagen
    const sizeLabel = document.createElement('label');
    sizeLabel.textContent = 'Tamaño';
    sizeLabel.style.display = 'block';
    sizeLabel.style.marginTop = '10px';
    
    const sizeInput = document.createElement('input');
    sizeInput.type = 'range';
    sizeInput.min = '50';
    sizeInput.max = '300';
    sizeInput.value = elementData.width;
    sizeInput.style.width = '100%';
    sizeInput.style.margin = '5px 0';
    
    const rotationLabel = document.createElement('label');
    rotationLabel.textContent = 'Rotación';
    rotationLabel.style.display = 'block';
    rotationLabel.style.marginTop = '10px';
    
    const rotationInput = document.createElement('input');
    rotationInput.type = 'range';
    rotationInput.min = '0';
    rotationInput.max = '360';
    rotationInput.value = elementData.rotation || 0;
    rotationInput.style.width = '100%';
    rotationInput.style.margin = '5px 0';
    
    const btnBringToFront = document.createElement('button');
    btnBringToFront.textContent = 'Traer al frente';
    btnBringToFront.style.marginTop = '10px';
    btnBringToFront.style.width = '100%';
    btnBringToFront.style.padding = '8px';
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.style.marginTop = '5px';
    deleteBtn.style.width = '100%';
    deleteBtn.style.padding = '8px';
    deleteBtn.style.backgroundColor = '#ff4757';
    
    // Event listeners
    sizeInput.addEventListener('input', () => {
        imgElement.style.width = `${sizeInput.value}px`;
        imgElement.style.height = `${sizeInput.value}px`;
    });

    rotationInput.addEventListener('input', () => {
        imgElement.style.transform = `rotate(${rotationInput.value}deg)`;
    });

    btnBringToFront.addEventListener('click', () => {
        bringToFrontFallback(imgElement);
    });

    deleteBtn.addEventListener('click', () => {
        container.removeChild(controlDiv);
        imgElement.remove();
    });
    
    controlContent.appendChild(previewImg);
    controlContent.appendChild(sizeLabel);
    controlContent.appendChild(sizeInput);
    controlContent.appendChild(rotationLabel);
    controlContent.appendChild(rotationInput);
    controlContent.appendChild(btnBringToFront);
    controlContent.appendChild(deleteBtn);
    
    controlDiv.appendChild(controlHeader);
    controlDiv.appendChild(controlContent);
    container.appendChild(controlDiv);
    
    // Configurar toggle
    toggleBtn.addEventListener('click', () => {
        const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        toggleBtn.setAttribute('aria-expanded', !isExpanded);
        controlContent.style.display = isExpanded ? 'none' : 'block';
    });
}

// Implementación de fallback para hacer elementos arrastrables
function makeDraggableFallback(element, container) {
    let isDragging = false;
    let offsetX, offsetY;

    element.addEventListener('mousedown', function(e) {
        isDragging = true;
        bringToFrontFallback(element);
        
        const rect = element.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        
        const x = e.clientX - offsetX - container.getBoundingClientRect().left;
        const y = e.clientY - offsetY - container.getBoundingClientRect().top;
        
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
    });
    
    document.addEventListener('mouseup', function() {
        isDragging = false;
    });
}

// Implementación de fallback para traer al frente
function bringToFrontFallback(element) {
    window.currentZIndex++;
    element.style.zIndex = window.currentZIndex;
}