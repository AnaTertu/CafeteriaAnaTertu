// Função para processar o formulário de checkout
function processarCheckout(event) {
    event.preventDefault(); // Evita que o formulário seja enviado
  
    // Obter os valores dos campos do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('payment').value;
  
    // Verificar se todos os campos estão preenchidos
    if (!name || !email || !address || !paymentMethod) {
      alert('Por favor, preencha todos os campos do formulário.');
      return;
    }
  
    // Lógica adicional para processar o checkout, como enviar uma solicitação para um servidor, salvar os dados no banco de dados, etc.
    // Aqui, vamos apenas exibir os dados do checkout
    console.log('Detalhes do Checkout:');
    console.log('Nome:', name);
    console.log('E-mail:', email);
    console.log('Endereço:', address);
    console.log('Método de Pagamento:', paymentMethod);
  
    alert('Compra finalizada com sucesso!');
  
    // Redirecionar para uma página de confirmação de compra, se necessário
    // window.location.href = 'pagina-confirmacao.html';
  }
