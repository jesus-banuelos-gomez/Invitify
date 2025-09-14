// controlPanel.js
import { makeDraggable, bringToFront } from "./dragManager.js";
import { CargarArchivosParaElemento } from "./fileHandler.js";

const fontFamilies = {
    "Dancing Script": "'Dancing Script', cursive",
    "Playfair Display": "'Playfair Display', serif",
    "Montserrat": "'Montserrat', sans-serif",
    "Lato": "'Lato', sans-serif",
    "Courgette": "'Courgette', cursive",
    "Playwrite PL": "'Playwrite PL', cursive",
    "Roboto": "'Roboto', sans-serif",
    "Open Sans": "'Open Sans', sans-serif",
    "Merriweather": "'Merriweather', serif",
    "Lora": "'Lora', serif",
    "Cormorant Garamond": "'Cormorant Garamond', serif",
    "Sacramento": "'Sacramento', cursive",
    "Tangerine": "'Tangerine', cursive",
    "Great Vibes": "'Great Vibes', cursive",
    "Cinzel": "'Cinzel', serif",
    "EB Garamond": "'EB Garamond', serif",
    "Josefin Sans": "'Josefin Sans', sans-serif",
    "Oswald": "'Oswald', sans-serif",
    "Fjalla One": "'Fjalla One', sans-serif",
    "Pacifico": "'Pacifico', cursive",
    "Indie Flower": "'Indie Flower', cursive",
    "Permanent Marker": "'Permanent Marker', cursive",
    "Lobster": "'Lobster', cursive",
    "Bebas Neue": "'Bebas Neue', sans-serif",
    "Poppins": "'Poppins', sans-serif",
    "Raleway": "'Raleway', sans-serif",
    "Spectral": "'Spectral', serif",
    "Crimson Pro": "'Crimson Pro', serif",
    "Alegreya": "'Alegreya', serif",
    "Nunito": "'Nunito', sans-serif"
};

export function createControlPanel(container, targetElement, type, options) {
    const controlDiv = document.createElement('div');
    controlDiv.className = 'didiv';
    controlDiv.id = `control-${targetElement.id}`;

    const controlHeader = document.createElement('div');
    controlHeader.className = 'control-header';
    const controlLabel = document.createElement('label');
    controlLabel.className = 'control-label';
    controlLabel.textContent = options.title;
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'toggle-btn';
    toggleBtn.setAttribute('aria-expanded', 'true');
    toggleBtn.innerHTML = '<span class="plus-icon">+</span><span class="minus-icon">-</span>';
    controlHeader.appendChild(controlLabel);
    controlHeader.appendChild(toggleBtn);
    
    const controlContent = document.createElement('div');
    controlContent.className = 'control-content';

    const previewDiv = document.createElement('div');
    previewDiv.className = 'element-preview';
    previewDiv.textContent = 'Elemento de texto';
    controlContent.appendChild(previewDiv);
    
    // Controles comunes
    if (options.text) {
        const textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.placeholder = 'Texto del elemento';
        textInput.value = targetElement.textContent;
        textInput.addEventListener('input', () => {
            targetElement.textContent = textInput.value;
            previewDiv.textContent = `Texto: ${textInput.value}`;
        });
        controlContent.appendChild(textInput);
    }
    
    if (options.color) {
        const colorLabel = document.createElement('label');
        colorLabel.textContent = 'Color';
        const colorInput = document.createElement('input');
        colorInput.type = 'color';
        colorInput.value = targetElement.style.color || '#000000';
        colorInput.addEventListener('input', () => {
            targetElement.style.color = colorInput.value;
        });
        controlContent.appendChild(colorLabel);
        controlContent.appendChild(colorInput);
    }

    if (options.font) {
        const fontLabel = document.createElement('label');
        fontLabel.textContent = 'Fuente';
        const fontSelect = document.createElement('select');
        for (const name in fontFamilies) {
            const option = document.createElement('option');
            option.value = fontFamilies[name];
            option.textContent = name;
            fontSelect.appendChild(option);
        }
        fontSelect.addEventListener('change', () => {
            targetElement.style.fontFamily = fontSelect.value;
        });
        controlContent.appendChild(fontLabel);
        controlContent.appendChild(fontSelect);
    }

    if (options.size) {
        const sizeLabel = document.createElement('label');
        sizeLabel.textContent = 'Tamaño';
        const sizeInput = document.createElement('input');
        sizeInput.type = 'range';
        sizeInput.min = 10;
        sizeInput.max = 72;
        sizeInput.value = parseInt(targetElement.style.fontSize) || 24;
        sizeInput.addEventListener('input', () => {
            targetElement.style.fontSize = `${sizeInput.value}px`;
        });
        controlContent.appendChild(sizeLabel);
        controlContent.appendChild(sizeInput);
    }
    
    if (options.opacity) {
        const opacityLabel = document.createElement('label');
        opacityLabel.textContent = 'Opacidad';
        const opacityInput = document.createElement('input');
        opacityInput.type = 'range';
        opacityInput.min = 0;
        opacityInput.max = 1;
        opacityInput.step = 0.01;
        opacityInput.value = parseFloat(targetElement.style.opacity) || 1;
        opacityInput.addEventListener('input', () => {
            targetElement.style.opacity = opacityInput.value;
        });
        controlContent.appendChild(opacityLabel);
        controlContent.appendChild(opacityInput);
    }

    if (options.image) {
        const imageBtn = document.createElement('button');
        imageBtn.textContent = 'Cargar Imagen';
        imageBtn.addEventListener('click', () => {
            CargarArchivosParaElemento(targetElement, controlDiv);
        });
        controlContent.appendChild(imageBtn);
    }
    
    const bringToFrontBtn = document.createElement('button');
    bringToFrontBtn.textContent = 'Traer al frente';
    bringToFrontBtn.addEventListener('click', () => {
        bringToFront(targetElement);
    });
    controlContent.appendChild(bringToFrontBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.addEventListener('click', () => {
        container.removeChild(controlDiv);
        targetElement.remove();
    });
    controlContent.appendChild(deleteBtn);

    controlDiv.appendChild(controlHeader);
    controlDiv.appendChild(controlContent);
    container.appendChild(controlDiv);

    toggleBtn.addEventListener('click', () => {
        const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        toggleBtn.setAttribute('aria-expanded', !isExpanded);
        controlContent.style.display = isExpanded ? 'none' : 'block';
    });
}