# Configuração base do Typescript

## Sobre

Configuração base do Typescript para ReactJS e NodeJS.

## Setup

1. Instalação

Se não tiver o Typescript instalado:

```
npm i -D typescript @gridmize/config/typescript
```

Se já tiver o Typescript instalado:

```
npm i -D @gridmize/config/typescript
```

2. Crie um arquivo `tsconfig.json` na raiz do projeto:

React:

```
{
  "extends": "@gridmize/config/typescript/react",
  "include": ["src"]
}
```

Node:

```
{
  "extends": "@gridmize/config/typescript/node.json",
  "include": ["src"]
}
```
