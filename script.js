document.getElementById('uploadForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const fileInput = document.getElementById('documento');
    const alertContainer = document.getElementById('alertContainer');

    // Eliminar alerta existente si hay alguna
    if (alertContainer.firstChild) {
        alertContainer.removeChild(alertContainer.firstChild);
    }

    if (fileInput.files.length === 0) {
        // Crear alerta de Bootstrap para mostrar el mensaje de error
        const alertElement = document.createElement('div');
        alertElement.className = 'alert alert-danger mt-3';
        alertElement.setAttribute('role', 'alert');
        alertElement.textContent = 'Debes seleccionar un documento.';

        // Agregar la alerta al contenedor
        alertContainer.appendChild(alertElement);
    } else {
        // Crear alerta de Bootstrap para mostrar el mensaje de éxito
        const alertElement = document.createElement('div');
        alertElement.className = 'alert alert-success mt-3';
        alertElement.setAttribute('role', 'alert');
        alertElement.textContent = 'El archivo se ha enviado correctamente.';

        // Agregar la alerta al contenedor
        alertContainer.appendChild(alertElement);
    }
});
