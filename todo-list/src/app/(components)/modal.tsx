'use client';
import { useState } from "react";
import { InputRename } from "../components/(modal_estruture)/inputRename";
import { TextArea } from "../components/(modal_estruture)/textArea";
import { Description } from "../components/(modal_estruture)/Description";
import { DeleteButton } from "../components/(modal_estruture)/delete_button";
import { HeaderOfModal } from "../components/(modal_estruture)/header";
import { UpdateDB } from "../components/utility/updateDB";
import { ContainerOfFlags } from "../components/(modal_estruture)/flagContainer";
import { TutorialModal } from "../components/utility/tutorialModal";

// hooks
import { useAtomValue } from "jotai";
import { useAtom } from "jotai";
// atoms
import { tasksDescriptionStateAtom } from "../(atoms)/(modal)/modal-atoms";
import { indexedItemIndexAtom } from "../(atoms)/(modal)/modal-atoms";
import { visibleStateAtom } from "../(atoms)/(modal)/modal-atoms";
import { renameStateAtom } from "../(atoms)/(modal)/modal-atoms";
import { tasksStateAtom } from "../(atoms)/(tasks)/tasks-atoms";

export const Modal = () => {

  // atoms values
  const [tasksDescriptionState, setTasksDescriptionState] = useAtom(tasksDescriptionStateAtom);
  const [visibleState, setVisibleState] = useAtom(visibleStateAtom);
  const [renameState, setRenameState] = useAtom(renameStateAtom);
  const [tasksState, setTasksState] = useAtom(tasksStateAtom);
  // only read atoms
  const indexedItemIndexState = useAtomValue(indexedItemIndexAtom)

  const content = `
    Ao clicar em alguma das opções, como "academia", você vai marca que esta tarefa
    é voltada para academia, assim, ajudando no reconhecendo no tipo de tarefa. Ao
    escolher uma das opções, a bolinha irá aparecer no canto superior direito da tarefa
    com sua respectiva cor, que ajuda na identificação do tipo da tarefa. Também é 
    possível alterar seu tipo quando quiser!
  `
  const [displayControl, setDisplayControl] = useState({
    visible: "hidden",
    blur: false,
  });
  // the function responsible of sideBar toggle
  const toggleSideBar = (): void => {
    setVisibleState({
      ...visibleState,
      display: 'hidden',
      position: 'right-[-200%]'
    });
  };
  // The function responsible of adding a description of a task
  const addDescrebe = (): void => {
    const openDatabase: IDBOpenDBRequest = indexedDB.open("database");

    openDatabase.onsuccess = () => {
      const request:IDBDatabase = openDatabase.result;
      const transaction:IDBTransaction = request.transaction("tasks", 'readwrite');
      const store:IDBObjectStore = transaction.objectStore("tasks");
      const element:IDBRequest = store.get(indexedItemIndexState);

      element.onerror = () => {
        console.log("erro ao buscar o elemento!");
      }
      element.onsuccess = (event) => {
        console.log("elemento obtido com sucesso!");
        const currentTarget = (event.target as IDBRequest).result;
        currentTarget.description = tasksDescriptionState; 

        store.put(currentTarget).onsuccess = () => { 
          UpdateDB(setTasksState, undefined, setTasksDescriptionState);
        }
      }

    }
  };
  // The function responsible about the rename setting
  const addRename = (): void => {
    const openDatabase: IDBOpenDBRequest = indexedDB.open("database");

    openDatabase.onsuccess = () => {
      const request:IDBDatabase = openDatabase.result;
      const transaction:IDBTransaction = request.transaction("tasks", 'readwrite');
      const store:IDBObjectStore = transaction.objectStore("tasks");
      const element:IDBRequest = store.get(indexedItemIndexState);

      element.onsuccess = (event) => {
        const elementTarget = (event.target as IDBRequest).result;
        elementTarget.title = renameState;

        store.put(elementTarget).onsuccess = () => {
          setRenameState("");
        }
      }

      UpdateDB(setTasksState, undefined, undefined);
    }
  };
  // The function responsible for delete a individual task
  const RemoveTask = () => {
    const openDatabase: IDBOpenDBRequest = indexedDB.open("database");

    openDatabase.onsuccess = () => {
      const request:IDBDatabase = openDatabase.result;
      const transaction:IDBTransaction = request.transaction("tasks", 'readwrite');
      const store:IDBObjectStore = transaction.objectStore("tasks");
      const element:IDBRequest = store.delete(indexedItemIndexState);

      element.onsuccess = () => {
        console.log("elemento removido com sucesso!");
        setDisplayControl({
          ...displayControl,
          visible: "hidden",
          blur: false,
        })
        toggleSideBar()
        UpdateDB(setTasksState);
      }
    }

  };
  // key events
  const addDescribeWithKey = (e: { key: string }) => {
    if (e.key === "Enter") {
      addDescrebe();
    }
  };
  const addRemameWithKey = (e: { key: string }) => {
    if (e.key === "Enter") {
      addRename();
    }
  };
  return (
    <>
      <div className={`fixed top-0 flex left-0 w-screen h-screen ${displayControl.blur ? "blur-sm" : " blur-0"} transition-all ${visibleState.display} z-30`}>
        <nav
          className={`
          absolute
          gap-5 
          flex
          flex-col 
          items-center 
          py-3 
          top-0 
          ${visibleState.position} 
          w-full 
          h-full  
          overflow-y-scroll 
          bg-white 
          text-black 
          dark:bg-[#121013] 
          px-3
          dark:text-white 
          `
        }
        >
          <HeaderOfModal closeModal={toggleSideBar} />
          {/* Input Rename */}
          <InputRename addRename={addRename} renameKey={addRemameWithKey} />
          {/* Textarea */}
          <TextArea
            addDescrebe={addDescrebe}
            addDescrebeWithKey={addDescribeWithKey}
            descrebe={tasksDescriptionState}
            setDescrebe={setTasksDescriptionState}
          />
          {/* Description */}
          <Description task={tasksState} />
          {/* flags */}
          <ContainerOfFlags/>        
          {/* Delet button */}
          <DeleteButton removeTask={RemoveTask}/>
          {/* ModalTutorial */}
          <TutorialModal content={content} />
        </nav>
      </div>
    </>
  );
};
