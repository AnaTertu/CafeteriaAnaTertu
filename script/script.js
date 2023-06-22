// Seletor do botão "Explorar"
const exploreButton = document.querySelector('.hero .btn');

// Função para adicionar a classe CSS de animação ao botão
function animateButton() {
  exploreButton.classList.add('animated');
}

// Adiciona um ouvinte de evento de clique ao botão
exploreButton.addEventListener('click', animateButton);
