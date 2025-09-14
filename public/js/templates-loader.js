import { getTemplatesByCategory, getTemplateData } from './templates-data.js';

// Cargar plantillas en el contenedor
function loadTemplates(category = 'all') {
    const templatesContainer = document.getElementById('templates-container');
    if (!templatesContainer) {
        console.error('No se encontró el contenedor de plantillas');
        return;
    }
    
    // Limpiar contenedor
    templatesContainer.innerHTML = '';
    
    // Obtener plantillas
    const templates = getTemplatesByCategory(category);
    
    if (templates.length === 0) {
        templatesContainer.innerHTML = '<p>No hay plantillas disponibles</p>';
        return;
    }
    
    // Crear elementos de plantilla
    templates.forEach(template => {
        const templateElement = createTemplateElement(template);
        templatesContainer.appendChild(templateElement);
    });
}

// Crear elemento de plantilla
function createTemplateElement(template) {
    const templateCard = document.createElement('div');
    templateCard.className = 'template-card';
    templateCard.dataset.id = template.id;
    templateCard.dataset.category = template.category;
    
    // Verificar si la plantilla incluye imágenes
    const tieneImagenes = template.elements.some(el => el.type === 'image');
    const badgeImagenes = tieneImagenes ? '<span class="image-badge">📷 Con imágenes</span>' : '';
    
    templateCard.innerHTML = `
        <div class="template-image" style="background: ${template.preview};">
            <span>Vista Previa</span>
            ${tieneImagenes ? '<div class="image-indicator">📷</div>' : ''}
        </div>
        <div class="template-info">
            <h3>${template.name}</h3>
            <p>${template.description}</p>
            <div class="template-meta">
                <span class="template-category">${getCategoryName(template.category)}</span>
                ${badgeImagenes}
            </div>
            <div class="template-actions">
                <button class="template-btn preview-btn" data-id="${template.id}">Vista Previa</button>
                <button class="template-btn secondary use-btn" data-id="${template.id}">Usar</button>
            </div>
        </div>
    `;
    
    return templateCard;
}

// Obtener nombre de categoría
function getCategoryName(category) {
    const categories = {
        'wedding': 'Boda',
        'graduation': 'Graduación',
        'birthday': 'Cumpleaños',
        'xv-years': 'XV Años',
        'baptismo': 'Bautizo',
        'corporate': 'Corporativo'
    };
    
    return categories[category] || category;
}

// Vista previa de plantilla
function previewTemplate(templateId) {
    console.log('Vista previa de plantilla:', templateId);
    alert(`Vista previa de plantilla ${templateId}`);
}

// Usar plantilla - Redirige a la página de edición con el ID de plantilla
function useTemplate(templateId) {
    console.log('Usando plantilla:', templateId);
    // Guardar el ID de plantilla seleccionada en sessionStorage
    sessionStorage.setItem('selectedTemplate', templateId);
    // Redirigir a la página de edición
    window.location.href = 'prueba.html';
}

// Filtrar plantillas por categoría
function setupCategoryFilters() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Quitar clase active de todos los botones
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Añadir clase active al botón clickeado
            this.classList.add('active');
            
            // Cargar plantillas de la categoría seleccionada
            const category = this.dataset.category;
            loadTemplates(category);
        });
    });
}

// Configurar event listeners para los botones de plantilla
function setupTemplateButtons() {
    // Usar delegación de eventos para los botones dinámicos
    document.addEventListener('click', function(e) {
        // Botones de vista previa
        if (e.target.classList.contains('preview-btn')) {
            const templateId = e.target.dataset.id;
            previewTemplate(templateId);
        }
        
        // Botones de usar
        if (e.target.classList.contains('use-btn')) {
            const templateId = e.target.dataset.id;
            useTemplate(templateId);
        }
    });
}

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('Inicializando cargador de plantillas...');
    loadTemplates();
    setupCategoryFilters();
    setupTemplateButtons();
});