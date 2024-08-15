'use client';
import { useContext, KeyboardEvent } from "react";
import { todoContext } from "../components/context";
import { SwitchModeButton } from "../components/(input_estruture)/switch_button";
import { HowToUse } from "../components/(input_estruture)/howToUse";
import { InputNameTask } from "../components/(input_estruture)/inputNameTask";
import { AddButton } from "../components/(input_estruture)/addButton";
import { DeleteButton } from "../components/(input_estruture)/deleteButton";
import { Modal } from "../components/(input_estruture)/Modal";
import { useIndexedDB } from "../components/(database)/useOpenDB";
import { UpdateDB } from "../components/utility/updateDB";
import { HeaderInput } from "../components/(input_estruture)/header";
// hooks
import { useAtom, useSetAtom, useAtomValue } from "jotai";
// atoms
import { tasksStateAtom } from "../(atoms)/(tasks)/tasks-atoms";
import { inputTaskNameAtom } from "../(atoms)/(input)/input-atoms";
import { tasksDescriptionStateAtom } from "../(atoms)/(modal)/modal-atoms";
import { warnModalStateAtom } from "../(atoms)/(input)/input-atoms";
import { inputBlurModalAtom } from "../(atoms)/(input)/input-atoms";

export const InputTask = () => {
  // only update:
  const setTasksState = useSetAtom(tasksStateAtom);
  // update and read 
  const [inputTaskNameState, setInputTaskNameState] = useAtom(inputTaskNameAtom);
  const [warnModalState, setWarnModalState] = useAtom(warnModalStateAtom);
  const [inputBlurModalState, setInputBlurModalState] = useAtom(inputBlurModalAtom);
  // only read:
  const tasksDescriptionState = useAtomValue(tasksDescriptionStateAtom);

  const { toggleSideBarFunction } = useContext(todoContext);

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

      if (inputTaskNameState === "" || inputTaskNameState.trim() === "" || inputTaskNameState.length >= 20) {
        window.alert("Erro!");
        setInputTaskNameState("");
        database.abort();
        return;
      }

      objectStorage.add({
        title: inputTaskNameState,
        description: tasksDescriptionState,
        type: '',
        color: '',
      });

      UpdateDB(setTasksState, setInputTaskNameState);
      toggleSideBarFunction();
    };

    currentDataBase.onerror = () => {
      console.log("ops, algo deu errado!");
    };
  };

  const keyPressEvent = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addElementInDB();
      toggleSideBarFunction();
      event.currentTarget.blur();
    }
  };

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

      setTasksState(() => []);
      setInputBlurModalState(() => false);
      setWarnModalState({ ...warnModalState, display: "hidden", blur: false });
    };
  };
  
  const controlElementsDisplay = () => {
    setWarnModalState({ ...warnModalState, display: "flex" });
    setInputBlurModalState(() => true);
  };

  return (
    <>
      <div
        className={`
        flex 
        pt-3 
        w-full 
        transition-all 
        ${inputBlurModalState ? "blur-sm" : null} 
        h-full
        overflow-auto
        mobileMini:pb-8
        items-center 
        desktop:w-4/5 
        desktop:gap-2 
        mobileMini:gap-3 
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
        removeAllElements={removeAllElements}
      />
    </>
  );
};
