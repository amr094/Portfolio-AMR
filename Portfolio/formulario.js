function mostrarDatos() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const datosUsuario = `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`;

    alert(datosUsuario);
}