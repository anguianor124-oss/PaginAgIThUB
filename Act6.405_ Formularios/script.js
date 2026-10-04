const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const juego = document.getElementById("juegoFavorito").value;
    const mensaje = document.getElementById("mensaje").value;

    resultado.innerHTML = `
        <h3>Datos enviados</h3>

        <p><strong>Nombre:</strong> ${nombre}</p>

        <p><strong>Correo:</strong> ${correo}</p>

        <p><strong>Videojuego favorito:</strong> ${juego}</p>

        <p><strong>Comentario:</strong> ${mensaje}</p>
    `;

    formulario.reset();
}
);