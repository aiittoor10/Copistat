document.getElementById('login').addEventListener('submit', function (e) {
    e.preventDefault();

    const usuarioInput = document.getElementById('usuario');
    const contraseniaInput = document.getElementById('contrasenia'); // Corregido: Seleccionar input de contraseña
    const alertContainer = document.getElementById('alertContainer');

    // Función para validar si el campo de usuario está vacío
    function validateUsuarioInput() {
        const usuarioValue = usuarioInput.value.trim();
        if (usuarioValue === '') {
            displayAlert('El usuario no puede estar vacío', 'danger');
            return false;
        }
        return true;
    }

    // Función para validar si el campo de contraseña está vacío
    function validarContraseniaInput() {
        const contraseniaValue = contraseniaInput.value.trim(); // Corregido: Obtener valor de la contraseña
        if (contraseniaValue === '') { // Corregido: Validar contra 'contraseniaValue' en lugar de 'contrasenia'
            displayAlert('La contraseña no puede estar vacía', 'danger'); // Corregido: Mensaje de alerta
            return false;
        }
        return true;
    }

    function displayAlert(message, alertType) {
        alertContainer.innerHTML = `<div class="alert alert-${alertType}" role="alert">${message}</div>`;
    }

    // Validar ambos campos antes de enviar el formulario
    if (validateUsuarioInput() && validarContraseniaInput()) {
        // Aquí puedes añadir el código para enviar el formulario si todos los campos están validados
        // this.submit(); // Comentar o descomentar esta línea según decidas enviar el formulario después de validar
        alertContainer.innerHTML = ''; // Limpiar el contenedor de alertas si todo está bien
    }
});
