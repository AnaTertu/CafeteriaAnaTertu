// Função para obter os detalhes do pedido armazenados localmente (pode ser ajustada conforme sua implementação)
function getDetalhesPedido() {
    // Supondo que os detalhes do pedido tenham sido armazenados no localStorage com a chave "detalhesPedido"
    const detalhesPedidoString = localStorage.getItem('detalhesPedido');
    if (detalhesPedidoString) {
      return JSON.parse(detalhesPedidoString);
    } else {
      return null;
    }
  }
  
  // Função para exibir os detalhes do pedido na página de confirmação
  function exibirDetalhesPedido() {
    const detalhesPedido = getDetalhesPedido();
  
    if (detalhesPedido) {
      const orderDetailsElement = document.querySelector('.order-details');
      const orderItemsElement = document.createElement('ul');
  
      orderDetailsElement.innerHTML = `
        <h2>Obrigado pelo seu pedido!</h2>
        <p>Seu pedido foi confirmado e está sendo processado. Abaixo estão os detalhes do seu pedido:</p>
        <h3>Detalhes do Pedido:</h3>
        <ul>
          <li><strong>Nome:</strong> ${detalhesPedido.nome}</li>
          <li><strong>E-mail:</strong> ${detalhesPedido.email}</li>
          <li><strong>Endereço:</strong> ${detalhesPedido.endereco}</li>
          <li><strong>Itens do Pedido:</strong></li>
        </ul>
      `;
  
      detalhesPedido.itens.forEach(item => {
        const orderItemElement = document.createElement('li');
        orderItemElement.textContent = item;
        orderItemsElement.appendChild(orderItemElement);
      });
  
      orderDetailsElement.querySelector('ul').appendChild(orderItemsElement);
  
      orderDetailsElement.innerHTML += `
        <li><strong>Total:</strong> ${detalhesPedido.total}</li>
      `;
    }
  }
  
  // Chamar a função para exibir os detalhes do pedido ao carregar a página
  exibirDetalhesPedido();
  