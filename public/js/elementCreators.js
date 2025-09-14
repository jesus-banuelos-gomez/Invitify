// elementCreators.js
let elementCount = 1;
let divCount = 0;
let currentZIndex = 10;
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

function makeDraggable(element, container) {
    let isDragging = false;
    let offsetX, offsetY;
    
    element.addEventListener('mousedown', function(e) {
        isDragging = true;
        bringToFront(element);
        
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

function bringToFront(element) {
    currentZIndex++;
    element.style.zIndex = currentZIndex;
}

function CargarArchivosParaElemento(elemento, controlDiv) {
    return new Promise((resolve) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = new Image();
                    img.onload = function() {
                        elemento.style.backgroundImage = `url(${e.target.result})`;
                        elemento.style.backgroundSize = 'contain';
                        elemento.style.backgroundRepeat = 'no-repeat';
                        elemento.style.backgroundPosition = 'center';
                        elemento.style.backgroundColor = 'transparent';
                        elemento.style.minWidth = '';
                        elemento.style.minHeight = '';
                        elemento.style.display = 'block';

                        // Almacenar las dimensiones originales y la relación de aspecto
                        elemento.dataset.originalWidth = img.naturalWidth;
                        elemento.dataset.originalHeight = img.naturalHeight;
                        elemento.dataset.aspectRatio = img.naturalWidth / img.naturalHeight;

                        const preview = controlDiv.querySelector('.element-preview');
                        preview.textContent = `Imagen: ${file.name}`;
                        preview.title = file.name;
                        resolve();
                    };
                    img.src = e.target.result;
                };
                reader.readAsDataURL(file);
            } else {
                resolve();
            }
        });
        input.click();
    });
}

export function createNewTitulo(container, lienzo, x = 250, y = 250) {
    const currentId = elementCount++;
    const divPadre = document.createElement('div');
    const tituloEditable = document.createElement('h1');

    divPadre.className = 'didiv';
    divPadre.id = `draggable-title-control-${currentId}`;
    
    const controlHeader = document.createElement('div');
    controlHeader.className = 'control-header';
    const controlLabel = document.createElement('label');
    controlLabel.className = 'control-label';
    controlLabel.textContent = `Título ${currentId}`;
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
    titleInput.value = 'Nuevo Título';
    titleInput.style.display = 'block';

    const colorLabel = document.createElement('label');
    colorLabel.textContent = 'Color';
    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.className = 'color-input';
    colorInput.value = '#000000';
    colorInput.style.display = 'block';

    const sizeLabel = document.createElement('label');
    sizeLabel.textContent = 'Tamaño de fuente';
    const sizeInput = document.createElement('input');
    sizeInput.type = 'range';
    sizeInput.className = 'size-input';
    sizeInput.min = '10';
    sizeInput.max = '72';
    sizeInput.value = '24';

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
    for (const [name, value] of Object.entries(fontFamilies)) {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = name;
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
    lienzo.appendChild(tituloEditable);

    tituloEditable.className = 'titulo-arrastrable';
    tituloEditable.id = `titulo-${currentId}`;
    tituloEditable.style.position = 'absolute';
    tituloEditable.style.left = `${x}px`;
    tituloEditable.style.top = `${y}px`;
    tituloEditable.style.backgroundColor = 'rgba(255, 255, 255, 0.0)';
    tituloEditable.textContent = 'Nuevo Título';
    tituloEditable.style.zIndex = currentZIndex;

    makeDraggable(tituloEditable, lienzo);
    
    toggleBtn.addEventListener('click', () => {
        const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        toggleBtn.setAttribute('aria-expanded', !isExpanded);
        controlContent.style.display = isExpanded ? 'none' : 'block';
    });

    titleInput.addEventListener('input', () => {
        tituloEditable.textContent = titleInput.value;
    });

    colorInput.addEventListener('input', () => {
        tituloEditable.style.color = colorInput.value;
    });

    sizeInput.addEventListener('input', () => {
        tituloEditable.style.fontSize = `${sizeInput.value}px`;
    });

    opacityInput.addEventListener('input', () => {
        tituloEditable.style.opacity = parseFloat(opacityInput.value);
    });

    fontSelector.addEventListener('change', () => {
        tituloEditable.style.fontFamily = fontSelector.value;
    });

    btnBringToFront.addEventListener('click', () => {
        bringToFront(tituloEditable);
    });

    btnEliminar.addEventListener('click', () => {
        container.removeChild(divPadre);
        lienzo.removeChild(tituloEditable);
    });

    return divPadre;
}

export function createDraggableDiv(container, lienzo, x = 50, y = 50, imageSrc = null) {
    const currentId = divCount++;
    const div = document.createElement('div');
    div.className = 'draggable-div';
    div.id = `draggable-img-${currentId}`;
    
    let currentRotation = 0;
    let currentScaleX = 1;
    let currentScaleY = 1;

    if (imageSrc) {
        div.style.backgroundImage = `url(${imageSrc})`;
        div.style.backgroundSize = 'contain';
        div.style.backgroundRepeat = 'no-repeat';
        div.style.backgroundPosition = 'center';
    } else {
        div.style.backgroundColor = 'rgba(74, 134, 232, 0.5)';
        div.style.minWidth = '100px';
        div.style.minHeight = '100px';
        div.style.display = 'block';
    }

    div.style.position = 'absolute';
    div.style.left = `${x}px`;
    div.style.top = `${y}px`;
    div.style.width = '150px';
    div.style.height = '150px';
    div.style.zIndex = currentZIndex;
    
    makeDraggable(div, lienzo);
    
    const controlDiv = document.createElement('div');
    controlDiv.className = 'didiv';
    controlDiv.id = `control-img-${div.id}`;

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

    const previewDiv = document.createElement('div');
    previewDiv.className = 'element-preview';
    previewDiv.id = `preview-${div.id}`;
    previewDiv.textContent = imageSrc ? 'Imagen cargada' : 'Sin imagen cargada';

    const bringToFrontBtn = document.createElement('button');
    bringToFrontBtn.textContent = 'Traer al frente';
    bringToFrontBtn.className = 'bring-to-front';

    const changeImageBtn = document.createElement('button');
    changeImageBtn.textContent = 'Cambiar Imagen';
    changeImageBtn.className = 'change-image';

    const rotateLabel = document.createElement('label');
    rotateLabel.innerHTML = `Rotación: <span id="rot-val-${div.id}">0°</span>`;
    const rotateSlider = document.createElement('input');
    rotateSlider.type = 'range';
    rotateSlider.className = 'rotate-slider';
    rotateSlider.min = '0';
    rotateSlider.max = '360';
    rotateSlider.value = '0';

    const flipHorizontalBtn = document.createElement('button');
    flipHorizontalBtn.textContent = 'Voltear Horizontal';
    flipHorizontalBtn.className = 'flip-horizontal';

    const flipVerticalBtn = document.createElement('button');
    flipVerticalBtn.textContent = 'Voltear Vertical';
    flipVerticalBtn.className = 'flip-vertical';

    const widthLabel = document.createElement('label');
    widthLabel.innerHTML = `Ancho: <span id="width-val-${div.id}">150px</span>`;
    const widthSlider = document.createElement('input');
    widthSlider.type = 'range';
    widthSlider.className = 'width-slider';
    widthSlider.min = '10';
    widthSlider.max = '500';
    widthSlider.value = '150';

    const heightLabel = document.createElement('label');
    heightLabel.innerHTML = `Alto: <span id="height-val-${div.id}">150px</span>`;
    const heightSlider = document.createElement('input');
    heightSlider.type = 'range';
    heightSlider.className = 'height-slider';
    heightSlider.min = '10';
    heightSlider.max = '500';
    heightSlider.value = '150';
    

    const opacityLabel = document.createElement('label');
    opacityLabel.innerHTML = `Opacidad: <span id="opacity-val-${div.id}">100%</span>`;
    const opacitySlider = document.createElement('input');
    opacitySlider.type = 'range';
    opacitySlider.className = 'opacity-slider';
    opacitySlider.min = '0';
    opacitySlider.max = '1';
    opacitySlider.step = '0.01';
    opacitySlider.value = '1';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.className = 'eliminar-elemento';

    controlContent.appendChild(previewDiv);
    controlContent.appendChild(bringToFrontBtn);
    controlContent.appendChild(changeImageBtn);
    controlContent.appendChild(rotateLabel);
    controlContent.appendChild(rotateSlider);
    controlContent.appendChild(flipHorizontalBtn);
    controlContent.appendChild(flipVerticalBtn);
    controlContent.appendChild(widthLabel);
    controlContent.appendChild(widthSlider);
    controlContent.appendChild(heightLabel);
    controlContent.appendChild(heightSlider);
    controlContent.appendChild(opacityLabel);
    controlContent.appendChild(opacitySlider);
    controlContent.appendChild(deleteBtn);

    controlDiv.appendChild(controlHeader);
    controlDiv.appendChild(controlContent);
    container.appendChild(controlDiv);
    lienzo.appendChild(div);

    toggleBtn.addEventListener('click', () => {
        const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        toggleBtn.setAttribute('aria-expanded', !isExpanded);
        controlContent.style.display = isExpanded ? 'none' : 'block';
    });
    
    bringToFrontBtn.addEventListener('click', () => {
        bringToFront(div);
    });
    
    changeImageBtn.addEventListener('click', () => {
        CargarArchivosParaElemento(div, controlDiv).then(() => {
            currentRotation = 0;
            currentScaleX = 1;
            currentScaleY = 1;
            div.style.transform = `rotate(0deg) scaleX(1) scaleY(1)`;
            div.style.opacity = 1;
            div.style.width = '150px';
            div.style.height = '150px';

            rotateSlider.value = 0;
            widthSlider.value = 150;
            heightSlider.value = 150;
            opacitySlider.value = 1;
            previewDiv.textContent = `Imagen cargada`;
            document.querySelector(`#rot-val-${div.id}`).textContent = '0°';
            document.querySelector(`#width-val-${div.id}`).textContent = '150px';
            document.querySelector(`#height-val-${div.id}`).textContent = '150px';
            document.querySelector(`#opacity-val-${div.id}`).textContent = '100%';
        });
    });

    deleteBtn.addEventListener('click', () => {
        lienzo.removeChild(div);
        container.removeChild(controlDiv);
    });

    rotateSlider.addEventListener('input', () => {
        currentRotation = parseInt(rotateSlider.value);
        div.style.transform = `rotate(${currentRotation}deg) scaleX(${currentScaleX}) scaleY(${currentScaleY})`;
        document.querySelector(`#rot-val-${div.id}`).textContent = `${currentRotation}°`;
    });

    flipHorizontalBtn.addEventListener('click', () => {
        currentScaleX *= -1;
        div.style.transform = `rotate(${currentRotation}deg) scaleX(${currentScaleX}) scaleY(${currentScaleY})`;
    });

    flipVerticalBtn.addEventListener('click', () => {
        currentScaleY *= -1;
        div.style.transform = `rotate(${currentRotation}deg) scaleX(${currentScaleX}) scaleY(${currentScaleY})`;
    });
    
    widthSlider.addEventListener('input', () => {
        const newWidth = parseInt(widthSlider.value);
        div.style.width = `${newWidth}px`;
        const aspectRatio = parseFloat(div.dataset.aspectRatio);
        if (!isNaN(aspectRatio)) {
            const newHeight = newWidth / aspectRatio;
            div.style.height = `${newHeight}px`;
            heightSlider.value = newHeight;
            document.querySelector(`#height-val-${div.id}`).textContent = `${Math.round(newHeight)}px`;
        }
        document.querySelector(`#width-val-${div.id}`).textContent = `${newWidth}px`;
    });

    heightSlider.addEventListener('input', () => {
        const newHeight = parseInt(heightSlider.value);
        div.style.height = `${newHeight}px`;
        const aspectRatio = parseFloat(div.dataset.aspectRatio);
        if (!isNaN(aspectRatio)) {
            const newWidth = newHeight * aspectRatio;
            div.style.width = `${newWidth}px`;
            widthSlider.value = newWidth;
            document.querySelector(`#width-val-${div.id}`).textContent = `${Math.round(newWidth)}px`;
        }
        document.querySelector(`#height-val-${div.id}`).textContent = `${newHeight}px`;
    });

    opacitySlider.addEventListener('input', () => {
        div.style.opacity = parseFloat(opacitySlider.value);
        document.querySelector(`#opacity-val-${div.id}`).textContent = `${Math.round(parseFloat(opacitySlider.value) * 100)}%`;
    });
    
    return controlDiv;
}