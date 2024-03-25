# Introdução: 

Aqui ficará toda a documentação do projeto. a Documentação será separada por 
arquivos. Por exemplo, temos o "input.tsx", irei criar uma sessão apenas para 
documenta-lo. O mesmo se aplicará para todos os arquivos. 

# Input.tsx 

Este arquivo é responsável por adicionar elementos no database(indexedDB) além
de possuir vários outros componentes como um botão remoção de todas as tarefas,
botão que altera o modo da página(darkmode/lightmode), dentre outras coisas que
serão descritas com mais detalhes abaixo. 

## imports: 
### Hooks e eventos
```tsx
import { useContext, useState, KeyboardEvent,} from "react";
```
Aqui importamos os hooks necessário e o `KeyboardEvent` para tipar um evento de 
`key`.
