import { useContext, useState } from "react";
import { todoContext } from "./context";
import { CloseButton } from "./(input_estruture)/closeButton";
import { InputRename } from "./(modal_estruture)/inputRename";
import { TextArea } from "./(modal_estruture)/textArea";
import { Description } from "./(modal_estruture)/Description";
import { DeleteButton } from "./(modal_estruture)/delete_button";
import { ModalWarn } from "./(modal_estruture)/Modal_warn";
import { UpdateDB } from "./utility/updateDB";

export const Modal = () => {
  const {
    key,
    setSideBar,
    rename,
    setRename,
    setTask,
    sideBar,
    descrebe,
    setDescrebe,
    title,
    task,
    indexed
  } = useContext(todoContext);

  const [displayControl, setDisplayControl] = useState({
    visible: "hidden",
    blur: false,
  });
  // the function responsible of sideBar toggle
  const toggleSideBar = (): void => {
    setSideBar({
      ...sideBar,
      position: "right-[-200%]",
      display: "hidden",
    });
  };
  // The function responsible of adding a description of a task
  const addDescrebe = (): void => {
    const openDatabase: IDBOpenDBRequest = indexedDB.open("database");

    openDatabase.onsuccess = () => {
      const request:IDBDatabase = openDatabase.result;
      const transaction:IDBTransaction = request.transaction("tasks", 'readwrite');
      const store:IDBObjectStore = transaction.objectStore("tasks");
      const element:IDBRequest = store.get(title);

      element.onerror = () => {
        console.log("erro ao buscar o elemento!");
      }
      element.onsuccess = (event) => {
        console.log("elemento obtido com sucesso!");
        const currentTarget = (event.target as IDBRequest).result;
        currentTarget.description = descrebe; 

        store.put(currentTarget).onsuccess = () => { 
          UpdateDB(setTask, undefined, setDescrebe);
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
      const element:IDBRequest = store.get(title);

      element.onsuccess = (event) => {
        const elementTarget = (event.target as IDBRequest).result;
        elementTarget.title = rename;

        store.put(elementTarget).onsuccess = () => {
          console.log("rename is finished!")
          setRename("");
        }
      }

      UpdateDB(setTask, undefined, undefined);
    }
  };
  // The function responsible for delete a individual task
  const RemoveTask = () => {

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
      <nav
        className={`absolute ${
          displayControl.blur ? "blur-sm" : " blur-0"
        } transition-all ${
          sideBar.display
        } gap-5 flex-col items-center py-10 top-0 ${
          sideBar.position
        } w-screen h-screen overflow-y-scroll bg-white text-black dark:bg-zinc-900 p-3 dark:text-white z-10`}
      >
        {/* close button */}
        <CloseButton toggleSideBarFunction={toggleSideBar} isModal={true} />
        {/* Input Rename */}
        <InputRename addRename={addRename} renameKey={addRemameWithKey} />
        {/* Textarea */}
        <TextArea
          addDescrebe={addDescrebe}
          addDescrebeWithKey={addDescribeWithKey}
          descrebe={descrebe}
          setDescrebe={setDescrebe}
        />
        {/* Description */}
        <Description indexed={indexed} task={task} />
        {/* Priority */}
        
        {/* Delet button */}
        <DeleteButton
          displayControl={displayControl}
          setDisplayControl={setDisplayControl}
        />
      </nav>
      {/* Modal warn */}
      <ModalWarn
        displayControl={displayControl}
        setDisplayControl={setDisplayControl}
        removeTask={RemoveTask}
      />
    </>
  );
};
