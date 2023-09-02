document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita el envío del formulario de la manera tradicional

    let nombre = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('message').value;

    let textoWhatsApp = `Hola, soy ${nombre} y mi correo es: (${email}). ${mensaje}`;
    let urlWhatsApp = `https://wa.me/3513021450?text=${encodeURIComponent(textoWhatsApp)}`; 

    window.open(urlWhatsApp, '_blank');  // Abre la URL en una nueva pestaña
});




