import { useContext, useState } from "react";
import { todoContext } from "./context";
import { CloseButton } from "./(input_estruture)/closeButton";
import { InputRename } from "./(modal_estruture)/inputRename";
import { TextArea } from "./(modal_estruture)/textArea";
import { Description } from "./(modal_estruture)/Description";
import { Priority } from "./(modal_estruture)/setPriority";
import { DeleteButton } from "./(modal_estruture)/delete_button";
import { ModalWarn } from "./(modal_estruture)/Modal_warn";

export const Modal = () => {
  const {
    key,
    setSideBar,
    name,
    setName,
    setTask,
    sideBar,
    descrebe,
    setDescrebe,
    idx,
    task,
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
    const Storage = JSON.parse(localStorage.getItem(key) || "[]");

    if (Storage[idx]) {
      Storage[idx].descricao = descrebe;
      localStorage.setItem(key, JSON.stringify(Storage));
      setTask(() => Storage);
      setDescrebe(() => "");
    }
  };
  // The function responsible about the rename setting
  const addRename = (): void => {
    const Storage = JSON.parse(localStorage.getItem(key) || "[]");

    try {
      if (!Storage) {
        throw new Error(
          "ocorreu um erro com o banco de dados ao tentar renomear esta tarefa"
        );
      }

      if (Storage[idx] && name.length <= 30) {
        Storage[idx].nome = name;
        localStorage.setItem(key, JSON.stringify(Storage));
        setTask(() => Storage);
        setName(() => "");
      } else {
        window.alert("ERRO - Excedeu a quantidade de caracteres permitada.");
        setName(() => "");
      }
    } catch (error) {}
  };
  // The function responsible for adding the priority to for a task
  const PriorityFunction = (tag: string) => {
    const Storage = JSON.parse(localStorage.getItem(key) || "[]");

    try {
      if (!Storage) {
        throw new Error(
          "ocorreu um erro com o banco de dados ao alterar a prioridade da tarefa"
        );
      }

      if (Storage[idx]) {
        Storage[idx].prioridade = tag;
        localStorage.setItem(key, JSON.stringify(Storage));
        setTask(() => Storage);
      }
    } catch (error) {
      console.log("ocorreu um erro " + error);
    }
  };
  // The function responsible for delete a individual task
  const RemoveTask = () => {
    const Storage = JSON.parse(localStorage.getItem(key) || "[]");

    try {
      if (!Storage) {
        throw new Error("Ocorreu um erro ao remover o item da lista");
      }

      const filtedStorage = Storage.filter((element: any, idxs: number) => {
        return idx !== idxs;
      });
      localStorage.setItem(key, JSON.stringify(filtedStorage));
      setTask(() => filtedStorage);
      setDisplayControl({ ...displayControl, visible: "hidden", blur: false });
      toggleSideBar();
    } catch ({ name, mensage }) {
      console.log(`ocorreu o seguinte erro ${mensage} com o nome dê ${name}`);
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
        <Description idx={idx} task={task} />
        {/* Priority */}
        <Priority PriorityFunction={PriorityFunction} idx={idx} task={task} />
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
