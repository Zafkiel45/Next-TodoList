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
### Outros imports 

```tsx
import { todoContext } from "./context";
import { SwitchModeButton } from "./(input_estruture)/switch_button";
import { CloseButton } from "./(input_estruture)/closeButton";
import { InputNameTask } from "./(input_estruture)/inputNameTask";
import { AddButton } from "./(input_estruture)/addButton";
import { DeleteButton } from "./(input_estruture)/deleteButton";
import { Modal } from "./(input_estruture)/Modal";
import { useIndexedDB } from "./(database)/useOpenDB";
import { UpdateDB } from "./utility/updateDB";
```
Temos uma série de coisas sendo importadas aqui. Sendo elas: 

- TodoContext: Para pegar os dados do contexto relacionados ao `TodoList`.

> [!Note]
> Posteriormente abstrair mais os contextos e torna-los mais coerentes. Antes 
de tudo, certifique-se se faz sentido criar um novo contexto e mantenha o 
atual estado do projeto (em produção) seguro enquanto atualiza. 

- SwitchModeButton: Componente reponsável por alternar entre modo claro e escuro.

- CloseButton: Componente responsável por esconder o container dos inputs em 
dispositivos mobiles. 

- InputNameTask: Componente responsável por capturar o texto dentro do input e 
atualizar o atual "title" da tasks (seria o nome da task).

- AddButton: Componente responsável por adicionar elementos dentro do IndexedDB

- DeleteButton: Componente responsável por remover todos os elementos do IndexedDB

- Modal: Componente responsável por aviso do perigo de apagar todas as tasks do
banco de dados.

- UseIndexedDB: Responsável por criar o banco de dados e configurar o schema dele.

- UpdateDB: Função responsável por atualizar os elementos do banco de dados para
o usuário! 


