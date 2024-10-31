document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('section, h1, h2, h3');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });

    // Para adicionar a classe 'visible' quando as seções estiverem no viewport
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

function agendarConsulta() {
    alert("Consulta agendada!"); // Exemplo de ação ao clicar
}

function abrirChatBot() {
    window.open("https://api.whatsapp.com/send?phone=55XXXXXXXXX", "_blank");
}
