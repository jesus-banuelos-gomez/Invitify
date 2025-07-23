document.addEventListener('DOMContentLoaded', function() {
    // Elementos editables
    const namesInput = document.getElementById('edit-names');
    const dateInput = document.getElementById('edit-date');
    const timeInput = document.getElementById('edit-time');
    const placeInput = document.getElementById('edit-place');
    const verseInput = document.getElementById('edit-verse');
    
    // Elementos de la invitación
    const invitationNames = document.getElementById('invitation-names');
    const invitationDate = document.getElementById('invitation-date');
    const invitationTime = document.getElementById('invitation-time');
    const invitationPlace = document.getElementById('invitation-place');
    const invitationVerse = document.getElementById('invitation-verse');
    const invitationDate2 = document.getElementById('invitation-date2');
    const invitationTime2 = document.getElementById('invitation-time2');
    
    // Controles de estilo
    const mainColorInput = document.getElementById('edit-main-color');
    const secondaryColorInput = document.getElementById('edit-secondary-color');
    const textColorInput = document.getElementById('edit-text-color');
    const backgroundInput = document.getElementById('edit-background');
    const titleFontInput = document.getElementById('edit-title-font');
    const textFontInput = document.getElementById('edit-text-font');
    const textSizeInput = document.getElementById('edit-text-size');
    
    // Actualizar texto
    function updateText() {
        invitationNames.textContent = namesInput.value;
        invitationDate.textContent = dateInput.value;
        invitationTime.textContent = timeInput.value;
        invitationPlace.textContent = placeInput.value;
        invitationVerse.textContent = verseInput.value;
        invitationDate2.textContent = dateInput.value;
        invitationTime2.textContent = timeInput.value;
    }
    
    // Actualizar estilos
    function updateStyles() {
        // Colores
        document.documentElement.style.setProperty('--main-color', mainColorInput.value);
        document.documentElement.style.setProperty('--secondary-color', secondaryColorInput.value);
        document.documentElement.style.setProperty('--text-color', textColorInput.value);
        
        // Fuentes
        document.documentElement.style.setProperty('--title-font', titleFontInput.value);
        document.documentElement.style.setProperty('--text-font', textFontInput.value);
        
        // Tamaño de texto
        document.documentElement.style.setProperty('--text-size', textSizeInput.value + 'px');
        
        // Fondo
        const invitation = document.getElementById('invitation');
        switch(backgroundInput.value) {
            case 'texture1':
                invitation.style.backgroundImage = "url('assets/images/texture1.jpg')";
                break;
            case 'texture2':
                invitation.style.backgroundImage = "url('assets/images/texture2.jpg')";
                break;
            case 'gradient':
                invitation.style.backgroundImage = "linear-gradient(to bottom, #f9f3f0, #e8d7d0)";
                break;
            case 'solid':
                invitation.style.backgroundImage = "none";
                invitation.style.backgroundColor = "#f9f3f0";
                break;
        }
    }
    
    // Event listeners
    namesInput.addEventListener('input', updateText);
    dateInput.addEventListener('input', updateText);
    timeInput.addEventListener('input', updateText);
    placeInput.addEventListener('input', updateText);
    verseInput.addEventListener('input', updateText);
    
    mainColorInput.addEventListener('input', updateStyles);
    secondaryColorInput.addEventListener('input', updateStyles);
    textColorInput.addEventListener('input', updateStyles);
    backgroundInput.addEventListener('change', updateStyles);
    titleFontInput.addEventListener('change', updateStyles);
    textFontInput.addEventListener('change', updateStyles);
    textSizeInput.addEventListener('input', updateStyles);
    
    // Inicializar
    updateText();
    updateStyles();
});