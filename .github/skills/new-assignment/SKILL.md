---
name: new-assignment
description: Crie uma nova assignment de programação para estudantes da Mergington High School. Use esta skill sempre que o usuário quiser criar, adicionar, estruturar ou gerar uma nova assignment, exercício ou homework, mesmo que não use explicitamente a palavra "assignment".
---

# Criar Nova Tarefa de Programação

As assignments ficam em `assignments/<id>/`, e o site lê `config.json` para exibi-las. Siga estas etapas para criar ambos.

## Etapa 1: Coletar Requisitos

Se o usuário não tiver especificado, pergunte qual conceito de programação a assignment deve abordar.

Leia o [guia de assignments](./references/assignment-guide.md) para orientações sobre dificuldade, escopo e quando incluir starter code.

## Etapa 2: Criar a Assignment

1. Crie `assignments/<kebab-case-id>/README.md` seguindo o [template de assignment](../../../templates/assignment-template.md).
2. Opcionalmente, adicione starter code ou arquivos de dados no mesmo diretório.

## Etapa 3: Registrar no Website

Use os scripts incluídos; não edite `config.json` manualmente.

Para registrar a assignment, execute na raiz do repositório:

```sh
node .github/skills/new-assignment/scripts/update-config.js python-loops "Python Loops" "Practice loops and iteration"
```

Para registrar cada arquivo como attachment (starter code, arquivos de dados etc.), execute:

```sh
node .github/skills/new-assignment/scripts/add-attachment.js python-loops "Starter Code" starter-code.py python
```

Tipos comuns: `python`, `csv`, `json`, `txt`, `html`.

## Etapa 4: Verificar

Confirme que a assignment foi registrada corretamente: verifique se `config.json` contém a nova entrada e se todos os arquivos criados existem no disco.