// exportar.js
document.addEventListener('DOMContentLoaded', function() {
    const { jsPDF } = window.jspdf;
    
    // Obtener los botones por su ID
    const exportPdfBtn = document.getElementById('export-pdf');
    const exportJpgBtn = document.getElementById('export-jpg');

    // Asegurarse de que los botones existen antes de añadir el listener
    if (exportPdfBtn) {
        exportPdfBtn.addEventListener('click', exportToPDF);
    } else {
        console.error('Botón de exportar PDF no encontrado.');
    }

    if (exportJpgBtn) {
        exportJpgBtn.addEventListener('click', exportToJPG);
    } else {
        console.error('Botón de exportar JPG no encontrado.');
    }

    // Función para activar/desactivar el modo de exportación que oculta los bordes de control
    function toggleExportMode(isExporting) {
        if (isExporting) {
            document.body.classList.add('is-exporting');
        } else {
            document.body.classList.remove('is-exporting');
        }
    }

    function exportToPDF() {
        const invitation = document.getElementById('invitation');
        
        // Habilitar el modo de exportación para ocultar bordes y pseudo-elementos
        toggleExportMode(true);

        const invitationWidth = invitation.clientWidth;
        const invitationHeight = invitation.clientHeight;

        html2canvas(invitation, {
            // Aumentar la escala a 5 para una mejor resolución
            scale: 5, 
            logging: false,
            useCORS: true,
            width: invitationWidth,
            height: invitationHeight
        }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            
            // Convertir las dimensiones de píxeles a milímetros
            const pdfWidth = invitationWidth * 0.264583;
            const pdfHeight = invitationHeight * 0.264583;

            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: [pdfWidth, pdfHeight]
            });
            
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('invitacion-boda.pdf');
            
        }).catch(error => {
            console.error('Error al generar PDF:', error);
        }).finally(() => {
            // Deshabilitar el modo de exportación al finalizar
            toggleExportMode(false);
        });
    }
    
    function exportToJPG() {
        const invitation = document.getElementById('invitation');
        
        // Habilitar el modo de exportación
        toggleExportMode(true);

        html2canvas(invitation, {
            // Aumentar la escala a 5 para una mejor resolución
            scale: 5,
            logging: false,
            useCORS: true
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'invitacion-boda.jpg';
            link.href = canvas.toDataURL('image/jpeg', 0.9);
            link.click();
            
        }).catch(error => {
            console.error('Error al generar JPG:', error);
        }).finally(() => {
            // Deshabilitar el modo de exportación
            toggleExportMode(false);
        });
    }
});