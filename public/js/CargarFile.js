document.addEventListener('DOMContentLoaded', () => {

    const fileInput = document.getElementById('image-upload');
    const preview = document.getElementById('image-preview');


    fileInput.addEventListener('change', function(e){

        const file = e.target.files[0];

        if(!file || !file.type.match('image.*')){
            alert('Porfavor seleccione una imagen valida');
            return;
        }


        const reader = new FileReader();

        reader.onload = function(event) {
            const img = document.createElement('img');
            img.src = event.target.result;
            img.style.maxWidth = '300px';
            img.style.maxHeight = '300px';
            preview.innerHTML = '';
            preview.appendChild(img);

        };

        reader.readAsDataURL(file);

       
    });


})