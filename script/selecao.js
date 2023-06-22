// Seletor dos botões "Adicionar ao Carrinho"
const addToCartButtons = document.querySelectorAll('.coffee-item .btn');

// Função para adicionar um café ao carrinho
function addToCart(event) {
  event.preventDefault();
  const coffeeItem = event.target.closest('.coffee-item');
  const coffeeName = coffeeItem.querySelector('h3').textContent;

  // Crie lógica personalizada para adicionar o café ao carrinho
  // Exemplo: Exiba uma mensagem de sucesso
  console.log(`Café "${coffeeName}" adicionado ao carrinho com sucesso!`);
}

// Adiciona um ouvinte de evento de clique para cada botão "Adicionar ao Carrinho"
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});
