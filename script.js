// Seleciona todos os blocos de conteúdo
const blocks = document.querySelectorAll('.reveal');

// Configurações do observador
const observerOptions = {
    threshold: 0.2 // Ativa quando 20% do item estiver visível
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Começa a observar cada bloco
blocks.forEach(block => {
    observer.observe(block);
});

