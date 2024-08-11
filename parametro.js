// Obtén la zona de arrastre y el formulario
const dropArea = document.getElementById('drop-area');
const Form = document.getElementById('form');

// Agrega los siguientes eventos a la zona de arrastre
dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropArea.classList.add('drag-over');
});

dropArea.addEventListener('dragleave', () => {
    dropArea.classList.remove('drag-over');
});

dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    dropArea.classList.remove('drag-over');
    const files = e.dataTransfer.files;
    handleFiles(files);
});

// Función para manejar los archivos seleccionados
function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        console.log('Archivo seleccionado:', file.name);

        // Aquí puedes añadir la lógica para subir cada archivo al servidor
        uploadFile(file);
    }
}

// Función para manejar el evento de envío del formulario
Form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fileInput = Form.querySelector('#archivo');
    const files = fileInput.files;
    if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            console.log('Subir archivo:', file.name);
            uploadFile(file);
        }
    } else {
        alert('Por favor, seleccione un archivo primero.');
    }
});

// Función para subir el archivo (puedes adaptarla según tus necesidades)
function uploadFile(file) {
    const formData = new FormData();
    formData.append('archivos[]', file);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'subir.php', true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log('Archivo subido con éxito:', file.name);
        } else {
            console.error('Error al subir el archivo:', file.name);
        }
    };

    xhr.send(formData);
}
