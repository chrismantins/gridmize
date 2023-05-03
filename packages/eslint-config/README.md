# Configuração base do ESLint

## Sobre

Configuração base do ESLint para ReactJS e NodeJS.

## Setup

1. Instalação

```
npm i -D eslint @mycelium/eslint-config
```

2. Crie um arquivo `.eslintrc.json` ou `.eslintrc.js` na raiz do projeto:

React:

```
{
  "extends": "@mycelium/eslint-config/react.js"
}
```

Node:

```
{
  "extends": "@mycelium/eslint-config/node.js"
}
```
