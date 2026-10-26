# 📘 Assignment: Building REST APIs with FastAPI

## 🎯 Objetivo

Construa uma API REST para consultar e cadastrar livros usando FastAPI. A atividade pratica endpoints HTTP, parâmetros de rota, validação de dados com Pydantic e respostas de erro.

## 📝 Tarefas

### 🛠️ Criar um endpoint de status

#### Descrição

Prepare e execute a aplicação FastAPI do código inicial. Implemente um endpoint simples para confirmar que a API está disponível.

#### Requisitos

O programa concluído deve:

- Instalar FastAPI e Uvicorn com `python -m pip install fastapi uvicorn`.
- Iniciar a aplicação com `uvicorn starter_code:app --reload`.
- Responder a uma requisição `GET /health` com o JSON `{"status": "ok"}`.
- Exibir a documentação interativa em `/docs`.

### 🛠️ Consultar livros

#### Descrição

Implemente endpoints para listar os livros disponíveis e consultar um livro pelo seu ID.

#### Requisitos

O programa concluído deve:

- Responder a `GET /books` com a lista de livros em memória.
- Responder a `GET /books/{book_id}` com o livro correspondente ao ID inteiro informado.
- Retornar o status HTTP `404` quando não existir um livro com o ID solicitado.

### 🛠️ Cadastrar um livro

#### Descrição

Use um modelo Pydantic para validar os dados enviados no corpo de uma requisição e implemente a criação de um livro. Os dados podem permanecer em memória e não precisam ser preservados quando a aplicação for reiniciada.

#### Requisitos

O programa concluído deve:

- Definir no modelo `BookCreate` os campos `title` e `author`, ambos como texto.
- Responder a `POST /books` com um novo livro e um ID gerado pela aplicação.
- Retornar o status HTTP `201` após criar o livro.
- Validar o endpoint enviando um JSON como:

  ```json
  {
    "title": "The Hobbit",
    "author": "J. R. R. Tolkien"
  }
  ```