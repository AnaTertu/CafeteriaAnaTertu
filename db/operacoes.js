// Importar a biblioteca SQLite
const sqlite3 = require('sqlite3').verbose();

// Criar uma conexão com o banco de dados
const db = new sqlite3.Database('cafe.db');

// Selecionar todos os produtos
db.all("SELECT * FROM produtos", (err, rows) => {
  if (err) {
    throw err;
  }
   // Imprimir os produtos
   console.log("Produtos na Cafeteria:");
   rows.forEach((row) => {
     console.log(`${row.id} - ${row.nome}: R$ ${row.preco.toFixed(2)}`);
   });
});

// Criar uma tabela 'produtos'
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS produtos (id INTEGER PRIMARY KEY, nome TEXT, preco REAL)");

  // Exemplo de inserção de dados
  const produtos = [
    { nome: "Café Expresso", preco: 6.00 },
    { nome: "Café Latte", preco: 10.00 },
    { nome: "Cappuccino", preco: 12.00 },
    { nome: "Macchiato", preco: 10.00 },
    { nome: "Café Mocha", preco: 14.00 },
    { nome: "Café Americano", preco: 6.00 },
    { nome: "Café Drip", preco: 10.00 },
    { nome: "Café Turco", preco: 10.00 }
  ];

  const stmt = db.prepare("INSERT INTO produtos (nome, preco) VALUES (?, ?)");

  produtos.forEach((produto) => {
    stmt.run(produto.nome, produto.preco);
  });

  stmt.finalize();
});

// Fechar a conexão após as operações
db.close();
