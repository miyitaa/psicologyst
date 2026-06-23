document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const confirmationBox = document.getElementById('confirmationMessage');
    const submitBtn = document.getElementById('submitBtn');

    submitBtn.innerText = "Enviando confirmación...";
    submitBtn.disabled = true;

    const templateParams = {
      const templateParams = {
    nombre: name,     // Antes decía to_name
    correo: email,    // Antes decía to_email
    fecha: date,      // Antes decía date
    hora: time        // Antes decía time
};
    };
    emailjs.send('service_0d3ekga','template_xg2y0ar', templateParams)
        .then(function(response) {
            console.log('¡Correo enviado con éxito!', response.status, response.text);

            confirmationBox.innerHTML = `<strong>¡Cita Agendada con éxito, ${name}!</strong><br> Se ha enviado una confirmación a tu correo ✉️.<br> Te esperamos el día 📅 ${date} a las ⏰ ${time}.`;
            confirmationBox.classList.remove('hidden');

            document.getElementById('appointmentForm').reset();
        }, function(error) {
            console.log('Error al enviar:', error);
            alert("Hubo un problema al enviar el correo. Revisa que tus IDs en el código estén bien escritos.");
        })
        .finally(function() {
            submitBtn.innerText = "Agendar Cita";
            submitBtn.disabled = false;
        });
});
