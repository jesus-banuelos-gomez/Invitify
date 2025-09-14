// fileHandler.js
export function CargarArchivosParaElemento(elemento, controlDiv) {
    return new Promise((resolve) => { // Envuelve la lógica en una Promise
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        
        input.addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    elemento.src = e.target.result; // <--- CAMBIO CLAVE: Usar src
                    elemento.style.backgroundColor = 'transparent';
                    elemento.innerHTML = ''; // Limpiar cualquier contenido si lo hubiera

                    const preview = controlDiv.querySelector('.element-preview');
                    preview.textContent = `Imagen: ${file.name}`;
                    preview.title = file.name;
                    resolve(); // Resuelve la Promise cuando la imagen se ha cargado
                };
                reader.readAsDataURL(file);
            } else {
                resolve(); // Resuelve incluso si no se selecciona ningún archivo
            }
        });
        
        input.click();
    });
}