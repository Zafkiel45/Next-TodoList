import { useContext, useState, KeyboardEvent } from "react";
import { todoContext } from "./context";
import { SwitchModeButton } from "./(input_estruture)/switch_button";
import { HowToUse } from "./(input_estruture)/howToUse";
import { InputNameTask } from "./(input_estruture)/inputNameTask";
import { AddButton } from "./(input_estruture)/addButton";
import { DeleteButton } from "./(input_estruture)/deleteButton";
import { Modal } from "./(input_estruture)/Modal";
import { useIndexedDB } from "./(database)/useOpenDB";
import { UpdateDB } from "./utility/updateDB";
import { HeaderInput } from "./(input_estruture)/header";

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
    setTask,
    name,
    setName,
    descrebe,
    toggleSideBarFunction,
  } = useContext(todoContext);

  // ===========================================================================
  useIndexedDB("tasks", "database");
  const addElementInDB = async () => {
    const currentDataBase: IDBOpenDBRequest = indexedDB.open("database");

    currentDataBase.onsuccess = () => {
      console.log("banco de dados aberto!");
      const request = currentDataBase.result;
      const database = request.transaction("tasks", "readwrite");
      const objectStorage = database.objectStore("tasks");

      database.onerror = () => {
        window.alert("mesmo nome!");
      };

      if (name === "" || name.trim() === "" || name.length === 25) {
        window.alert("nome vazio!");
        setName("");
        database.abort();
        return;
      }

      objectStorage.add({
        title: name,
        description: descrebe,
        type: '',
        color: '',
      });

      UpdateDB(setTask, setName);
      toggleSideBarFunction();
    };

    currentDataBase.onerror = () => {
      console.log("ops, algo deu errado!");
    };
  };
  // ===========================================================================
  const keyPressEvent = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addElementInDB();
      toggleSideBarFunction();
      event.currentTarget.blur();
    }
  };
  // ===========================================================================
  const removeAllElements = (): void => {
    const openDatabase: IDBOpenDBRequest = indexedDB.open("database");

    openDatabase.onsuccess = () => {
      const database: IDBDatabase = openDatabase.result;
      const transaction: IDBTransaction = database.transaction(
        "tasks",
        "readwrite"
      );
      const objectStore: IDBObjectStore = transaction.objectStore("tasks");

      const clearDatabase = objectStore.clear();

      clearDatabase.onsuccess = () => {
        console.log("database deleted with sucesss");
      };
      clearDatabase.onerror = () => {
        console.log("database is'n deleted");
      };

      setTask(() => []);
      setBlur(() => false);
      setDisplayControl({ ...displayControl, visible: "hidden", blur: false });
    };
  };
  // ===========================================================================
  const controlElementsDisplay = () => {
    setDisplayControl({ ...displayControl, visible: "flex" });
    setBlur(() => true);
  };
  // ===========================================================================
  return (
    <>
      <div
        className={`
        flex 
        pt-3 
        w-full 
        transition-all 
        ${blur ? "blur-sm" : null} 
        h-fit items-center 
        desktop:w-4/5 
        desktop:gap-2 
        mobileMini:gap-3
        mobileMini:w-[90%] 
        tablet:gap-5 
        flex-col 
        gap-4`}
      >
        {/* close button */}
        <HeaderInput title="Lista de tarefas" />
        {/* task input */}
        <InputNameTask keyEvent={keyPressEvent} />
        {/* add button */}
        <AddButton setElementStorage={addElementInDB} />
        {/* delete button */}
        <DeleteButton controlElementsDisplay={controlElementsDisplay} />
        {/* order */}

        <SwitchModeButton />
        <HowToUse />
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
