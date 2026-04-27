/* === INTERACCIÓN DELGISALCLIC.COM === */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Plataforma Del Gis al Clic inicializada.');

    // Animación sutil del péndulo al hacer scroll
    const pendulum = document.querySelector('.pendulum');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (pendulum) {
            // Un movimiento oscilatorio basado en el scroll
            const angle = Math.sin(scrolled / 100) * 15;
            pendulum.style.transform = `rotate(${angle}deg)`;
        }
    });

    // Revelado suave de elementos (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
});
