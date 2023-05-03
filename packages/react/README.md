# Mycelium Design System - React Components

## Sobre

Um conjunto de componentes do Mycelium Design System para utilizar na contrução do seu projeto Web.

## Setup

1. Instalação

```
npm i -D @mycelium/react
```

2. Importação e utilização

```javascript
import { Button } from '@mycelium/react';

export function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button variant='primary' size='md' disabled={false}>
        My Button with Mycelium
      </Button>
    </div>
  );
}
```
