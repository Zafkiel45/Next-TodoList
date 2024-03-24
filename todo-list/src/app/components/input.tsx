import {
  useContext,
  useEffect,
  useState,
  useCallback,
  KeyboardEvent,
} from "react";
import { todoContext } from "./context";
import { SwitchModeButton } from "./(input_estruture)/switch_button";
import { CloseButton } from "./(input_estruture)/closeButton";
import { InputNameTask } from "./(input_estruture)/inputNameTask";
import { AddButton } from "./(input_estruture)/addButton";
import { DeleteButton } from "./(input_estruture)/deleteButton";
import { SwithOrder } from "./(input_estruture)/switchOrder";
import { Modal } from "./(input_estruture)/Modal";
import { useIndexedDB } from "./(database)/useOpenDB";

export interface controler {
  visible: string;
  blur?: boolean;
}

export const InputTask = () => {
  const [displayControl, setDisplayControl] = useState<controler>({
    visible: "hidden",
  });
  const {
    setBlur,
    blur,
    key,
    setTask,
    name,
    setName,
    descrebe,
    toggleSideBarFunction,
    task,
  } = useContext(todoContext);
 
  // ===========================================================================
  useIndexedDB('tasks', 'database');
  const addElementInDB = async () => {
    const currentDataBase:IDBOpenDBRequest = indexedDB.open('database');

      currentDataBase.onsuccess = () => {
        console.log("banco de dados aberto!");
        const request = currentDataBase.result;
        const database = request.transaction('tasks','readwrite');
        const objectStorage = database.objectStore('tasks');
        const currentObjects = [];

        database.onerror = () => {
          window.alert("mesmo nome!")
        }

        if(
          name === '' || 
          name.trim() === '' || 
          name.length === 25 
        ) {
          window.alert("nome vazio!");
          setName('');
          database.abort();
          return;
        }

        objectStorage.add({
          title: name, 
          priority: 'height',
          description: descrebe,
        });

        objectStorage.openCursor().onsuccess = (event) => {
          const cursor: IDBCursorWithValue | null = (event.target as IDBRequest)
            .result;
  
          if (cursor) {
            currentObjects.push(cursor.value);
            cursor.continue();
          } else {
            setTask(currentObjects);
            setName('')
          }
        };
      }

      currentDataBase.onerror = () => {
        console.log("ops, algo deu errado!"); 
      } 
  }
  // ===========================================================================
  const keyPressEvent = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addElementInDB();
      toggleSideBarFunction();
      event.currentTarget.blur();
    }
  };

  const removeAllElements = (): void => {
    const openDatabase: IDBOpenDBRequest = indexedDB.open('database');
    
    openDatabase.onsuccess = () => {
      const database: IDBDatabase = openDatabase.result;
      const transaction: IDBTransaction = database.transaction("tasks", "readwrite");
      const objectStore: IDBObjectStore = transaction.objectStore("tasks");
  
     const clearDatabase = objectStore.clear();
  
     clearDatabase.onsuccess = () => {
      console.log("database deleted with sucesss");
     }
     clearDatabase.onerror = () => {
      console.log("database is'n deleted");
     }
  
      setTask(() => []);
      setBlur(() => false);
      setDisplayControl({ ...displayControl, visible: "hidden", blur: false });
    }
  };

  const controlElementsDisplay = () => {
    setDisplayControl({ ...displayControl, visible: "flex" });
    setBlur(() => true);
  };

  const sortElements = async (a: number, b: number, c: number, d: number) => {
    const Storage = await JSON.parse(localStorage.getItem(key) || "[]");

    const levelPriority = {
      "bg-red-500": a,
      "bg-yellow-500": b,
      "bg-blue-500": c,
      "fill-gray-300": d,
    };

    interface currentPriority {
      prioridade: string | number;
    }

    Storage.sort(
      (one: currentPriority, two: currentPriority) =>
        levelPriority[one.prioridade] - levelPriority[two.prioridade]
    );
    localStorage.setItem(key, JSON.stringify(Storage));
    setTask(() => Storage);
    toggleSideBarFunction();
  };

  return (
    <>
      <div
        className={`flex pt-3 w-full transition-all ${
          blur ? "blur-sm" : null
        } h-screen items-center desktop:w-4/5 desktop:gap-2 mobileMini:gap-3 mobileMini:w-[90%] tablet:gap-5 flex-col gap-4`}
      >
        {/* close button */}
        <CloseButton
          isModal={false}
          toggleSideBarFunction={toggleSideBarFunction}
        />
        <span className="text-lg text-black transition-all dark:text-white mobileMini:text-xl desktopMini:text-2xl">
          Lista de Tarefas
        </span>
        {/* task input */}
        <InputNameTask keyEvent={keyPressEvent} />
        {/* add button */}
        <AddButton setElementStorage={addElementInDB} />
        {/* delete button */}
        <DeleteButton controlElementsDisplay={controlElementsDisplay} />
        {/* order */}
        <SwithOrder sortElements={sortElements} />
        <SwitchModeButton />
      </div>
      <Modal
        Blur={setBlur}
        dispatch={setDisplayControl}
        objectComplete={displayControl}
        removeAllElements={removeAllElements}
      />
    </>
  );
};
