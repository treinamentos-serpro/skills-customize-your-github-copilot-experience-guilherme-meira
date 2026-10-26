
# 📘 Assignment: Jogo da Forca

## 🎯 Objetivo

Implemente um jogo da forca em Python para praticar strings, listas, condicionais, loops e entrada de dados. O jogador deve descobrir uma palavra escolhida aleatoriamente antes de esgotar as tentativas permitidas.

## 📝 Tarefas

### 🛠️ Preparar a palavra e os palpites

#### Descrição

Complete a seleção da palavra secreta e a exibição do progresso, permitindo que o jogador informe letras para revelar a palavra.

#### Requisitos

O programa concluído deve:

- Selecionar aleatoriamente uma palavra da lista `words` fornecida no código inicial.
- Exibir cada letra ainda não descoberta como um sublinhado, mantendo as letras descobertas em suas posições.
- Ler os palpites do jogador e registrar as letras já informadas.
- Atualizar o progresso quando o palpite corresponder a uma ou mais letras da palavra.

### 🛠️ Controlar tentativas e encerrar a partida

#### Descrição

Implemente o loop principal do jogo e encerre a partida quando o jogador descobrir a palavra ou atingir o limite de tentativas incorretas.

#### Requisitos

O programa concluído deve:

- Definir e acompanhar o limite de tentativas incorretas usando `max_incorrect` e `incorrect_guesses`.
- Informar quando uma letra já tiver sido tentada, sem penalizar o jogador novamente pelo mesmo palpite.
- Encerrar a partida quando todas as letras da palavra forem descobertas ou o limite de tentativas incorretas for atingido.
- Exibir uma mensagem de vitória ou derrota e revelar a palavra secreta em caso de derrota.