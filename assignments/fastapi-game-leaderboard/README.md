# 📘 Assignment: Game Leaderboard API with FastAPI

## 🎯 Objetivo

Construa uma API de placar para jogos usando FastAPI. A atividade conecta APIs REST e jogos por meio da consulta, ordenação e inclusão de pontuações.

## 📝 Tarefas

### 🛠️ Consultar as pontuações

#### Descrição

Implemente um endpoint para consultar todas as pontuações iniciais fornecidas no código inicial.

#### Requisitos

O programa concluído deve:

- Iniciar a aplicação com `uvicorn starter_code:app --reload`.
- Responder a `GET /scores` com a lista completa de pontuações em memória.
- Incluir em cada pontuação os campos `id`, `player`, `game` e `score`.

### 🛠️ Criar um ranking por jogo

#### Descrição

Implemente um endpoint que filtre as pontuações pelo nome do jogo e retorne o ranking da maior para a menor pontuação.

#### Requisitos

O programa concluído deve:

- Responder a `GET /leaderboard/{game}` filtrando pelo jogo informado, sem diferenciar maiúsculas de minúsculas.
- Ordenar os resultados por `score` em ordem decrescente.
- Retornar uma lista vazia quando ainda não houver pontuações para o jogo solicitado.

### 🛠️ Registrar uma nova pontuação

#### Descrição

Use um modelo Pydantic para validar os dados enviados pelo jogador e adicione a nova pontuação ao placar em memória.

#### Requisitos

O programa concluído deve:

- Definir no modelo `ScoreCreate` os campos `player` e `game` como textos não vazios e `score` como um inteiro não negativo.
- Responder a `POST /scores` com status HTTP `201`, incluindo um `id` gerado pela aplicação.
- Manter a nova pontuação disponível nas consultas seguintes enquanto a aplicação estiver em execução.
- Aceitar um corpo JSON como:

  ```json
  {
    "player": "Ava",
    "game": "Space Quest",
    "score": 480
  }
  ```