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

  useEffect(() => {
    const Storage = JSON.parse(localStorage.getItem(key) || "[]");

    try {
      if (!Storage) {
        throw new Error("Ocorreu um erro ao tentar inicializar sua lista");
      }
      setTask(Storage);
    } catch (erro) {
      console.log(
        `o seguinte erro ocorreu ao tentar inicializar sua lista ${erro}`
      );
    }
  }, [key]);

  const setElementStorage = useCallback(async () => {
    const Storage = await JSON.parse(localStorage.getItem(key) || "[]");
    const NameSeem = await Storage.find((item: { nome: string }) => {
      return item.nome === name;
    });

    interface currentObjectErros {
      nameSeem: boolean | undefined;
      nameLength: boolean;
      nameVoid: boolean;
      nameSpace: boolean;
    }

    const objectError: currentObjectErros = {
      nameSeem: NameSeem != undefined,
      nameLength: name.length >= 25,
      nameVoid: name === "",
      nameSpace: name.trim() === "",
    };

    if (
      objectError.nameSeem ||
      objectError.nameVoid ||
      objectError.nameLength ||
      objectError.nameSpace
    ) {
      setName(() => "");
      window.alert(
        "[ERRO] \n - Não é possível adicionar o mesmo nome para uma outra tarefa;\n -Não é possível deixar o nome da tarefa em branco;\n - Não é possível escrever nomes com mais de 30 caracteres; \n - Não é permitido apenas espaços em branco;"
      );
    } else {
      Storage.unshift({
        nome: name,
        descricao: descrebe,
        prioridade: "fill-gray-300",
      });

      localStorage.setItem(key, JSON.stringify(Storage));
      setName(() => "");
      setTask(() => Storage);
      toggleSideBarFunction();
    }
  }, [name, descrebe]);

  const keyPressEvent = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setElementStorage();
      toggleSideBarFunction();
      event.currentTarget.blur();
    }
  };

  const removeAllElements = (): void => {
    localStorage.removeItem(key);
    setTask(() => []);
    setBlur(() => false);
    setDisplayControl({ ...displayControl, visible: "hidden", blur: false });
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
        <CloseButton toggleSideBarFunction={toggleSideBarFunction}/>
        <span className="text-lg text-black transition-all dark:text-white mobileMini:text-xl desktopMini:text-2xl">
          Lista de Tarefas
        </span>
        {/* task input */}
        <InputNameTask keyEvent={keyPressEvent} />
        {/* add button */}
        <AddButton setElementStorage={setElementStorage} />
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

