// removeAllElements, objectComplete, dispacth, setBlur

import { Dispatch, SetStateAction } from "react";
import { controler } from "../input";
import CloseButton from '../utility/svg_components/x'

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
}: TypeOfProps) => {
  return (
    <div
      className={`
        absolute 
        top-0 
        ${objectComplete.visible} 
      text-black 
        dark:text-white 
        gap-4 items-center 
        flex-col 
        p-4 
        bg-white 
        dark:bg-[#1F1414]
        z-10  
        tablet:h-fit 
        tablet:py-7 
        tablet:top-[2%]  
        tablet:rounded-lg 
        tablet:overflow-hidden  
        tablet:left-[30%] 
        tablet:w-[80vw] 
        desktopMini:top-[4%] 
        desktopMini:left-[55%] 
        desktopMini:w-[60vw] 
        desktopBig:left-[97%] 
        desktopBig:w-[45vw] 
        w-full 
        h-full
        shadow-md`
      }
    >
      {/* Close button */}
      <div className="flex w-full items-center justify-between">
        <button disabled className="w-[24px] h-[24px] opacity-0"></button>
        <h1 className="font-bold text-lg dark:text-[#F06868] mobileMini:text-xl">AVISO!</h1>
        <div onClick={() => {
            dispatch({ ...objectComplete, visible: "hidden" });
            Blur(() => false);
        }}>
          <CloseButton height="h-[22px] w-[22px]" />
        </div>
      </div>
      <div className="text-center font-normal">
        Se você continuar, todas as suas tarefas serão apagadas! Caso esteja
        procurando uma forma de apagar apenas 1 tarefa, feche este aviso, e clique
        na tarefa que você quer apagar, desça para o final e clique em apagar.
        Caso não queira apagar nada, apenas feche este aviso. <span className="dark:text-[#F06868]">Caso você realmente
        queira apagar tudo, clique no botão abaixo.</span> 
        <br />
        <br />
        Quais são as consequências disso? Se você apagar todas as suas tarefas, elas nunca mais
        poderão ser recuperadas novamente. Porém, nada impede de você cria-las novamente. 
        Se você possui alguma tarefa que não deseja apagar, recomendamos que apague apenas 
        as tarefas que você não quer mais de forma individual.
      </div>
      {/* Delete all button */}
      <button
        onClick={removeAllElements}
        className="font-bold bg-red-500 text-white w-fit h-fit px-4 py-1 shadow-md rounded-lg"
      >
        apagar tudo
      </button>
    </div>
  );
};
