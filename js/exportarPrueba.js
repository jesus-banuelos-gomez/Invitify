document.addEventListener('DOMContentLoaded', function() {
    const { jsPDF } = window.jspdf;
    
    document.getElementById('export-pdf').addEventListener('click', exportToPDF);
    document.getElementById('export-jpg').addEventListener('click', exportToJPG);
    
    function exportToPDF() {
        const invitation = document.getElementById('invitation');
        
        html2canvas(invitation, {
            scale: 2,
            logging: false,
            useCORS: true
        }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm'
            });
            
            const imgWidth = 210; // A4 width in mm
            const imgHeight = canvas.height * imgWidth / canvas.width;
            
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save('invitacion-boda.pdf');
        });
    }
    
    function exportToJPG() {
        const invitation = document.getElementById('invitation');
        
        html2canvas(invitation, {
            scale: 2,
            logging: false,
            useCORS: true
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'invitacion-boda.jpg';
            link.href = canvas.toDataURL('image/jpeg', 0.9);
            link.click();
        });
    }
});