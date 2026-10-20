var formulario = document.getElementById("formulario");

// Muestra (o borra) el mensaje de error debajo de un campo
function mostrarError(id, mensaje) {
    document.getElementById("error-" + id).textContent = mensaje;

    if (mensaje == "") {
        document.getElementById(id).className = "";
    } else {
        document.getElementById(id).className = "campo-error";
    }
}

formulario.addEventListener("submit", function (evento) {
    var nombre = document.getElementById("nombre").value.trim();
    var correo = document.getElementById("correo").value.trim();
    var mensaje = document.getElementById("mensaje").value.trim();
    var valido = true;

    if (nombre.length < 3) {
        mostrarError("nombre", "Escribe tu nombre (mínimo 3 letras).");
        valido = false;
    } else {
        mostrarError("nombre", "");
    }

    var patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!patronCorreo.test(correo)) {
        mostrarError("correo", "Escribe un correo válido, por ejemplo: nombre@correo.com");
        valido = false;
    } else {
        mostrarError("correo", "");
    }
    if (mensaje.length < 20) {
        mostrarError("mensaje", "El mensaje debe tener al menos 20 caracteres (llevas " + mensaje.length + ").");
        valido = false;
    } else {
        mostrarError("mensaje", "");
    }
    if (!valido) {
        evento.preventDefault();
    }
});
