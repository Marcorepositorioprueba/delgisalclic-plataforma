/* === DEL GIS AL CLIC: LOGIC V1.0 === */

document.addEventListener('DOMContentLoaded', () => {
    const book = document.querySelector('.book-3d');
    const stations = document.querySelectorAll('.chapter-station');

    // APERTURA DE LIBRO AL SCROLL
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        
        // El libro se abre en los primeros 300px de scroll
        if (scrollPos > 100) {
            book.classList.add('open');
        } else {
            book.classList.remove('open');
        }

        // REVEAL ANIMATIONS PARA LAS ESTACIONES
        stations.forEach(station => {
            const stationTop = station.getBoundingClientRect().top;
            if (stationTop < window.innerHeight * 0.8) {
                station.classList.add('active');
            }
        });
    });

    // EFECTO TIZA PARA LA PIZARRA
    const pizarra = document.querySelector('.station-pizarra');
    if (pizarra) {
        pizarra.addEventListener('mousemove', (e) => {
            // Lógica para rastro de tiza (opcional/futuro)
        });
    }
});
