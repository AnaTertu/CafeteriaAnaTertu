// Seletor do botão "Explorar"
const exploreButton = document.querySelector('.hero .btn');

// Função para adicionar a classe CSS de animação ao botão
function animateButton() {
  exploreButton.classList.add('animated');
}

// Adiciona um ouvinte de evento de clique ao botão
exploreButton.addEventListener('click', animateButton);

/*
Animação simples ao botão "Explorar" na seção de destaque:

No exemplo acima, a função animateButton adiciona uma classe CSS chamada "animated" ao botão quando o botão "Explorar" é clicado. Você pode definir a classe CSS "animated" com animações personalizadas no seu arquivo CSS.

Lembre-se de adicionar esse código JavaScript em uma tag <script> no final do seu documento HTML, antes do fechamento da tag <body>, ou em um arquivo JavaScript separado vinculado ao seu documento HTML usando a tag <script src="seu-arquivo.js"></script>.

Essa é apenas uma demonstração básica de como você pode adicionar lógica JavaScript para adicionar interatividade à sua página. Você pode personalizar e expandir esse exemplo com base nas suas necessidades específicas.
*/