// Importar a biblioteca SQLite
const sqlite3 = require('sqlite3').verbose();

// Criar uma conexão com o banco de dados
const db = new sqlite3.Database('dadoscliente.db');

// Função para inserir dados do formulário no banco de dados
function inserirDadosFormulario(nome, email, endereco, metodoPagamento) {
  // Preparar o comando SQL para inserção
  const stmt = db.prepare("INSERT INTO dados_cliente (nome, email, endereco, metodo_pagamento) VALUES (?, ?, ?, ?)");

  // Executar a inserção
  stmt.run(nome, email, endereco, metodoPagamento);

  // Finalizar a preparação do comando
  stmt.finalize();
}

// Exportar a função para uso em outros scripts
module.exports = {
  inserirDadosFormulario
};
