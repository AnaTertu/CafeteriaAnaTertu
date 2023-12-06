# CafeteriaAnaTertu
Projeto integrador de competência em Ciências da Computação da Universidade Cruzeiro do Sul

Introdução de Cypress para testes automatizados da Cafeteria da Ti

# Inicializa um projeto Node

## npm init --yes


# Instalar o Cypress
### npm install -D cypress
(para versão atual)
### npm install -D cypress@12.5.0
(versão utilizada)

## Abrir o Cypress
### npx cypress open

Caso o auto complite e a documentação não estejam disponíveis,
crie na raiz do projeto um arquivo:
### jsconfig.json
conteúdo:
{
    "include": ["./node_modules/cypress", "cypress/**/*.js"]
}

# Inserir SQLite para banco de dados

comando no bash
## npm install sqlite3

criar arquivos .js para realizar as requisições e arquivo .db para receber os dados coletados
executar com comando 
### node nomeDoArquivo.js

