# Mycelium Design System - Tokens

## Sobre

Um conjunto de tokens base do Mycelium Design System para utilizar na contrução do seu layout.

## Setup

1. Instalação

```
npm i -D @mycelium/tokens
```

2. Importação e utilização

React:

```javascript
import { colors, fontSizes, fonts } from '@mycelium/tokens';

export function App() {
  return (
    <div
      style={{
        backgroundColor: colors.gray700,
        color: colors.white,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1
        style={{
          fontFamily: fonts.default,
          fontSize: fontSizes['4xl'],
        }}
      >
        My App with Mycelium Design System Tokens
      </h1>
    </div>
  );
}
```
