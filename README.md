# 📚 API de Alunos com Express

Este é um projeto simples de API REST para gerenciar alunos, desenvolvido com **Node.js** e **Express**.  
A API permite realizar operações **CRUD** (Create, Read, Update, Delete) para manipular informações de alunos.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)

---

## 📌 Como Executar o Projeto


### 1️⃣ Clonar o repositório  

git clone https://github.com/seu-usuario/seu-repositorio.git

### 2️⃣ Instalar as dependências
npm install

### 3️⃣ Executar o servidor
node index.js

📌 Rotas da API
🔹 Listar todos os alunos
GET /alunos
📌 Retorna uma lista de alunos cadastrados.

🔹 Buscar aluno por ID
GET /alunos/:id
📌 Retorna os detalhes do aluno com o ID especificado.

🔹 Cadastrar um novo aluno
POST /alunos
📌 Adiciona um novo aluno à lista.
🔹 Body (JSON):
{
  "id": 1,
  "nome": "João Silva",
  "idade": 20
}
🔹 Atualizar um aluno
PUT /alunos/:id
📌 Atualiza as informações de um aluno já cadastrado.
🔹 Body (JSON):
{
  "id": 1,
  "nome": "João Souza",
  "idade": 21
}
🔹 Remover um aluno
DELETE /alunos/:id
📌 Remove um aluno com o ID especificado.
