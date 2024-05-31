
document.addEventListener('DOMContentLoaded', () => {
  const modeToggle = document.getElementById('modeToggle');
  const body = document.getElementById('body');
  const video = document.getElementById('video');
  const video2 = document.getElementById('video2');
  const btnPause = document.getElementById('btnPause');
  let isPlaying = true;

  // Toggle between dark and light modes
  modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    if (body.classList.contains('dark-mode')) {
      modeToggle.textContent = 'Light Mode';
      video.style.display = 'none';
      video2.style.display = 'block';
    } else {
      modeToggle.textContent = 'Dark Mode';
      video.style.display = 'block';
      video2.style.display = 'none';
    }
  });

  // Initialize with dark mode
  body.classList.add('dark-mode');
  modeToggle.textContent = 'Light Mode';
  video.style.display = 'none';
  video2.style.display = 'block';

  // Pause and play video functionality
  btnPause.addEventListener('click', () => {
    if (isPlaying) {
      video.pause();
      video2.pause();
      btnPause.innerHTML = '<img src="logoIcono/playWhite.png" alt="Icono de play" height="40px">';
    } else {
      video.play();
      video2.play();
      btnPause.innerHTML = '<img src="logoIcono/pausaWhite.png" alt="Icono de pausa" height="40px">';
    }
    isPlaying = !isPlaying;
  });
});

/*------- validacion del formulario---------  */
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const validateForm = (event) => {
        event.preventDefault();
        const fname = document.getElementById('fname');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');

        // Verificar si los campos del formulario no están vacíos
        if (fname.value.trim() === '' || email.value.trim() === '' || subject.value.trim() === '') {
            alert('Por favor, complete todos los campos.');
            return false;
        }

        // Verificar si el correo electrónico
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email.value.trim())) {
            alert('Por favor, ingrese una dirección de correo electrónico válida.');
            return false;
        }

        // Si todas las validaciones pasan, enviar el formulario
        alert('¡Formulario enviado correctamente!');
        contactForm.reset();
    };

    // Evento de escucha para el envío del formulario
    contactForm.addEventListener('submit', validateForm);
});