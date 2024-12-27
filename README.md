# API de Lendas

Este é um projeto de API simples criado com Node.js, Express e MongoDB, projetado para organizar e fornecer informações sobre lendas de maneira eficiente.

## Funcionalidades

- **Listar todas as lendas**: Retorna todas as lendas cadastradas no banco de dados.
- **Cadastrar uma nova lenda**: Permite adicionar uma nova lenda.
- **Atualizar uma lenda**: Atualiza as informações de uma lenda existente.
- **Deletar uma lenda**: Remove uma lenda pelo ID.

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **MongoDB** com **Mongoose**

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Como executar o projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure a conexão com o MongoDB no código:

   Atualize a string de conexão em `mongoose.connect()` com as suas credenciais.

4. Execute o servidor:

   ```bash
   node app.js
   ```

5. A API estará disponível em `http://localhost:3000`.

## Endpoints

### **GET /**

Lista todas as lendas.

- **Resposta:**  
  ```json
  [
    {
      "_id": "ID da lenda",
      "name": "Nome da lenda",
      "lenda": "Descrição da lenda",
      "ano": "Ano da lenda",
      "personagem": "Personagem principal",
      "nota": 5
    }
  ]
  ```

### **POST /**

Adiciona uma nova lenda.

- **Body (JSON):**
  ```json
  {
    "name": "Nome da lenda",
    "lenda": "Descrição da lenda",
    "ano": "Ano da lenda",
    "personagem": "Personagem principal",
    "nota": 5
  }
  ```

- **Resposta:**  
  ```json
  {
    "_id": "ID da lenda",
    "name": "Nome da lenda",
    "lenda": "Descrição da lenda",
    "ano": "Ano da lenda",
    "personagem": "Personagem principal",
    "nota": 5
  }
  ```

### **PUT /:id**

Atualiza uma lenda existente.

- **Parâmetro:**  
  `id` - ID da lenda a ser atualizada.

- **Body (JSON):**
  ```json
  {
    "name": "Novo nome da lenda",
    "lenda": "Nova descrição da lenda",
    "ano": "Novo ano da lenda",
    "personagem": "Novo personagem principal",
    "nota": 4
  }
  ```

- **Resposta:**  
  ```json
  {
    "_id": "ID da lenda",
    "name": "Novo nome da lenda",
    "lenda": "Nova descrição da lenda",
    "ano": "Novo ano da lenda",
    "personagem": "Novo personagem principal",
    "nota": 4
  }
  ```

### **DELETE /:id**

Remove uma lenda.

- **Parâmetro:**  
  `id` - ID da lenda a ser removida.

- **Resposta:**  
  ```json
  {
    "_id": "ID da lenda",
    "name": "Nome da lenda",
    "lenda": "Descrição da lenda",
    "ano": "Ano da lenda",
    "personagem": "Personagem principal",
    "nota": 5
  }
  ```

## Observações

- Certifique-se de proteger as credenciais do banco de dados em um arquivo de ambiente (`.env`).
- Utilize ferramentas como [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/) para testar os endpoints.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests ou abrir issues.

## Licença

Este projeto está sob a licença [MIT](LICENSE).