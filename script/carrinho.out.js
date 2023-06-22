//Obtendo o parâmetro "produto" da URL 
const urlParams = new URLSearchParams(window.location.search);
const produtoId = urlParams.get('produto');

// Função para adicionar o produto ao carrinho
function adicionarAoCarrinho(produto) {
  const tabelaItens = document.getElementById('itens-carrinho');
  const totalCarrinho = document.getElementById('total-carrinho');

  // Criar uma nova linha na tabela
  const novaLinha = document.createElement('tr');

  // Colunas da linha
  const colunaNome = document.createElement('td');
  colunaNome.textContent = produto.nome;

  const colunaQuantidade = document.createElement('td');
  const inputQuantidade = document.createElement('input');
  inputQuantidade.type = 'number';
  inputQuantidade.value = '1';
  inputQuantidade.min = '1';
  colunaQuantidade.appendChild(inputQuantidade);

  const colunaPreco = document.createElement('td');
  colunaPreco.textContent = 'R$ ' + produto.preco.toFixed(2);

  const colunaRemover = document.createElement('td');
  const botaoRemover = document.createElement('button');
  botaoRemover.textContent = 'Remover';
  botaoRemover.addEventListener('click', () => removerItemCarrinho(produto.nome));
  colunaRemover.appendChild(botaoRemover);

  // Adicionar colunas à linha
  novaLinha.appendChild(colunaNome);
  novaLinha.appendChild(colunaQuantidade);
  novaLinha.appendChild(colunaPreco);
  novaLinha.appendChild(colunaRemover);

  // Adicionar nova linha à tabela
  tabelaItens.appendChild(novaLinha);

  // Atualizar total do carrinho
  const itensCarrinho = tabelaItens.getElementsByTagName('tr');
  let total = 0;

  for (let i = 0; i < itensCarrinho.length; i++) {
    const item = itensCarrinho[i];
    const precoTexto = item.getElementsByTagName('td')[2].textContent;
    const preco = parseFloat(precoTexto.replace('R$', '').trim());
    const quantidade = parseInt(item.getElementsByTagName('input')[0].value);
    total += preco * quantidade;
  }

  totalCarrinho.textContent = 'Total: R$ ' + total.toFixed(2);
}

// Função para remover um item do carrinho
function removerItemCarrinho(nome) {
  const tabelaItens = document.getElementById('itens-carrinho');
  const itensCarrinho = tabelaItens.getElementsByTagName('tr');

  for (let i = 0; i < itensCarrinho.length; i++) {
    const item = itensCarrinho[i];
    const nomeItem = item.getElementsByTagName('td')[0].textContent;

    if (nomeItem === nome) {
      tabelaItens.removeChild(item);
      break;
    }
  }

  // Atualizar total do carrinho
  let total = 0;

  for (let i = 0; i < itensCarrinho.length; i++) {
    const item = itensCarrinho[i];
    const precoTexto = item.getElementsByTagName('td')[2].textContent;
    const preco = parseFloat(precoTexto.replace('R$', '').trim());
    const quantidade = parseInt(item.getElementsByTagName('input')[0].value);
    total += preco * quantidade;
  }

  const totalCarrinho = document.getElementById('total-carrinho');
  totalCarrinho.textContent = 'Total: R$ ' + total.toFixed(2);
}

// Verificar se há um produto para adicionar ao carrinho
if (produtoId) {
  // Obter o produto com base no ID
  const produto = {
    nome: '',
    preco: 0
  };

  switch (produtoId) {
    case '1':
      produto.nome = 'Café Expresso';
      produto.preco = 6.00;
      break;
    case '2':
      produto.nome = 'Café Latte';
      produto.preco = 10.00;
      break;
    case '3':
      produto.nome = 'Cappuccino';
      produto.preco = 12.00;
      break;
    case '4':
      produto.nome = 'Macchiato';
      produto.preco = 10.00;
      break;
    // Adicionar casos para outros produtos, se necessário
  }

  // Adicionar o produto ao carrinho
  adicionarAoCarrinho(produto);
}
