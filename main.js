// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Cambiar categorías de plantillas
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remover clase active de todos los botones
        document.querySelectorAll('.category-btn').forEach(b => {
            b.classList.remove('active');
        });
        
        // Añadir clase active al botón clickeado
        this.classList.add('active');
        
        // Filtrar plantillas
        const category = this.dataset.category;
        filterTemplates(category);
    });
});

function filterTemplates(category) {
    const templates = document.querySelectorAll('.template-card');
    
    templates.forEach(template => {
        if (category === 'all' || template.dataset.category === category) {
            template.style.display = 'block';
        } else {
            template.style.display = 'none';
        }
    });
}

// Botón comenzar a crear
document.getElementById('start-creating').addEventListener('click', function() {
    document.getElementById('templates').scrollIntoView({ behavior: 'smooth' });
});

// Cargar plantillas (simulado)
window.addEventListener('DOMContentLoaded', () => {
    loadTemplates();
});

function loadTemplates() {
    const templatesContainer = document.getElementById('templates-container');
    
    // Datos de ejemplo - en una app real esto vendría de una API
    const templates = [
        { id: 1, name: 'Boda Elegante', category: 'wedding', image: 'url("https://via.placeholder.com/300x200?text=Boda+Elegante")' },
        { id: 2, name: 'Cumpleaños Fiesta', category: 'birthday', image: 'url("https://via.placeholder.com/300x200?text=Cumpleaños+Fiesta")' },
        { id: 3, name: 'Evento Corporativo', category: 'corporate', image: 'url("https://via.placeholder.com/300x200?text=Evento+Corporativo")' },
        { id: 4, name: 'Boda Rústica', category: 'wedding', image: 'url("https://via.placeholder.com/300x200?text=Boda+Rústica")' },
        { id: 5, name: 'Baby Shower', category: 'birthday', image: 'url("https://via.placeholder.com/300x200?text=Baby+Shower")' },
        { id: 6, name: 'Aniversario', category: 'wedding', image: 'url("https://via.placeholder.com/300x200?text=Aniversario")' }
    ];
    
    templates.forEach(template => {
        const templateCard = document.createElement('div');
        templateCard.className = 'template-card';
        templateCard.dataset.id = template.id;
        templateCard.dataset.category = template.category;
        
        templateCard.innerHTML = `
            <div class="template-image" style="background-image: ${template.image};"></div>
            <div class="template-info">
                <h3>${template.name}</h3>
                <div class="template-actions">
                    <button class="btn secondary-btn small-btn preview-btn">Vista Previa</button>
                    <button class="btn primary-btn small-btn use-btn">Usar</button>
                </div>
            </div>
        `;
        
        templatesContainer.appendChild(templateCard);
    });
    
    // Event listeners para los botones de las plantillas
    document.querySelectorAll('.use-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const templateId = this.closest('.template-card').dataset.id;
            openEditor(templateId);
        });
    });
}

function openEditor(templateId) {
    // Ocultar secciones no necesarias
    document.querySelector('.hero').style.display = 'none';
    document.querySelector('.templates-section').style.display = 'none';
    
    // Mostrar editor
    document.getElementById('editor').style.display = 'block';
    
    // Inicializar editor con la plantilla seleccionada
    initEditor(templateId);
    
    // Scroll al editor
    document.getElementById('editor').scrollIntoView({ behavior: 'smooth' });
}