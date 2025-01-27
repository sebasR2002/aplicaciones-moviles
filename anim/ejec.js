document.addEventListener('click', function() {
    var sound = new Howl({
        src: ['./bike-bell.mp3'],
        html5: true
    });

    // Reproducir el sonido
    sound.play();

    // Animación de la bicicleta
    gsap.to("#bici", { 
        x: '50vw',
        duration: 4, // duración de la animación
        
    });

    // Animación de la nube
    gsap.to("#nube", {
        x: '100vw',
        xPercent: -100,
        duration: 20, // duración de la animación
    });

    // Animación del sol
    gsap.to("#sol", {
        rotation: 360,
        duration: 20, // duración de la animación
    });
}, { once: false }); 