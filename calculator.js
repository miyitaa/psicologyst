document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // 1. Capturar los datos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const confirmationBox = document.getElementById('confirmationMessage');
    const submitBtn = document.getElementById('submitBtn');

    // Cambiar estado del botón
    submitBtn.innerText = "Enviando confirmación...";
    submitBtn.disabled = true;

    // 2. Variables que van a tu plantilla de EmailJS
    const templateParams = {
        to_name: name,
        to_email: email, 
        date: date,
        time: time
    };

    // 3. Enviar el correo electrónico
    // CAMBIA ESTOS DOS CAMPOS CON TUS DATOS DE EMAILJS:
    emailjs.send('AQUÍ_PEGA_TU_SERVICE_ID', 'AQUÍ_PEGA_TU_TEMPLATE_ID', templateParams)
        .then(function(response) {
            console.log('¡Correo enviado con éxito!', response.status, response.text);
            
            // Mostrar mensaje de éxito en pantalla
            confirmationBox.innerHTML = `<strong>¡Cita Agendada con éxito, ${name}!</strong><br> Se ha enviado una confirmación a tu correo ✉️.<br> Te esperamos el día 📅 ${date} a las ⏰ ${time}.`;
            confirmationBox.classList.remove('hidden');
            
            // Limpiar el formulario
            document.getElementById('appointmentForm').reset();
        }, function(error) {
            console.log('Error al enviar:', error);
            alert("Hubo un problema al enviar el correo. Revisa que tus IDs en el código estén bien escritos.");
        })
        .finally(function() {
            // Regresar el botón a la normalidad
            submitBtn.innerText = "Agendar Cita";
            submitBtn.disabled = false;
        });
});