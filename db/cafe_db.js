// Importar a biblioteca SQLite
const sqlite3 = require('sqlite3').verbose();

// Criar uma conexão com o banco de dados
const db = new sqlite3.Database('cafe.db');

// Criar uma tabela 'produtos'
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS produtos (id INTEGER PRIMARY KEY, nome TEXT, preco REAL)");

  // Exemplo de inserção de dados
  const stmt = db.prepare("INSERT INTO produtos (nome, preco) VALUES (?, ?)");
  stmt.run("Café Expresso", 6.00);
  stmt.run("Café Latte", 10.00);
  stmt.finalize();
});

// Fechar a conexão após as operações
db.close();
