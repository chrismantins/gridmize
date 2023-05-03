# Configuração base do Typescript

## Sobre

Configuração base do Typescript para ReactJS e NodeJS.

## Setup

1. Instalação

Se não tiver o Typescript instalado:

```
npm i -D typescript @mycelium/config/typescript
```

Se já tiver o Typescript instalado:

```
npm i -D @mycelium/config/typescript
```

2. Crie um arquivo `tsconfig.json` na raiz do projeto:

React:

```
{
  "extends": "@mycelium/config/typescript/react",
  "include": ["src"]
}
```

Node:

```
{
  "extends": "@mycelium/config/typescript/node.json",
  "include": ["src"]
}
```
