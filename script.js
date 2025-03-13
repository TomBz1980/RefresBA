document.addEventListener("DOMContentLoaded", function() {
    // Animaciones básicas
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseout', () => {
            card.style.transform = 'none';
        });
    });

    // Manejo del formulario
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Solicitud enviada. Nos contactaremos en menos de 1 hora.');
        this.reset();
    });
});