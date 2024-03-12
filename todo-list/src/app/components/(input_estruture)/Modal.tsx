// removeAllElements, objectComplete, dispacth, setBlur

import { Dispatch, SetStateAction } from "react"
import { controler } from "../input";

interface TypeOfProps {
    Blur: Dispatch<SetStateAction<boolean>>;
    dispatch: Dispatch<SetStateAction<controler>>;
    objectComplete: controler;
    removeAllElements: () => void;
}

export const Modal = ({
    Blur,
    dispatch,
    objectComplete,
    removeAllElements,
}:TypeOfProps) => {
    return (
        <div
        className={`absolute top-0 ${objectComplete.visible} overflow-y-scroll text-black dark:text-white gap-4 items-center flex-col p-4 bg-white dark:bg-zinc-700 z-10  tablet:h-fit tablet:py-7 tablet:top-[2%]  tablet:rounded-lg tablet:overflow-hidden  tablet:left-[30%] tablet:w-[80vw] desktopMini:top-[4%] desktopMini:left-[55%] desktopMini:w-[60vw] desktopBig:left-[97%] desktopBig:w-[45vw] w-full h-full shadow-md`}
        >
        {/* Close button */}
        <div className="flex w-full items-center justify-between">
          <button disabled className="w-[16px] opacity-0"></button>
          <h1 className="font-bold mobileMini:text-xl">Aviso</h1>
          <svg
            onClick={() => {
              dispatch({ ...objectComplete, visible: "hidden" });
              Blur(() => false);
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-lg cursor-pointer"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </div>
        {/* text 1 */}
        <p className="font-normal">
          Se prosseguir com esta ação{" "}
          <strong>
            todas as suas tarefas serão excluídas e não poderá recuperá-las nunca
            mais.
          </strong>{" "}
          Caso tenha mudado de ideia basta cancelar apertando no &quot;x&quot;.
          Vale lembrar que também é possível excluir tarefas de forma individual
          clicando nela e descendo até a última opção.
        </p>
        {/* text 2 */}
        <div className="bg-red-500 text-white font-normal border border-red-600 w-full p-4 shadow-md rounded-md">
          Você perderá todas as suas tarefas e suas configurações como: detalhes
          da tarefa, prioridades e quaisquer outras opções de configuração
          relacionado a tarefas.
          <br />
          <br />É importante enfatizar que é possível recria-las do zero caso
          queira uma tarefa exatamente igual a tarefa excluída.
        </div>
        {/* Delete all button */}
        <button
          onClick={removeAllElements}
          className="font-bold bg-red-500 text-white w-fit h-fit px-4 py-1 shadow-md rounded-lg"
        >
          Excluir
        </button>
      </div>
    )
}