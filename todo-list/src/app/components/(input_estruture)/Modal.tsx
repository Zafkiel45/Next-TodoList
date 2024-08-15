'use client'
import CloseButton from '../utility/svg_components/x'
// hooks
import { useAtom, useSetAtom } from 'jotai';
// atoms 
import { warnModalStateAtom } from '@/app/(atoms)/(input)/input-atoms';
import { inputBlurModalAtom } from '@/app/(atoms)/(input)/input-atoms';

interface TypeOfProps {
  removeAllElements: () => void;
}

export const Modal = ({
  removeAllElements,
}: TypeOfProps) => {

  const [warnModalState, setWarnModalState]= useAtom(warnModalStateAtom);
  // only update
  const setInputBlurModalState = useSetAtom(inputBlurModalAtom);

  return (
    <div
      className={`
        fixed
        top-0 
        ${warnModalState.display} 
      text-black 
        dark:text-white 
        gap-4 items-center 
        flex-col 
        p-4 
        bg-white 
        tablet:border
        tablet:border-red-500
        dark:bg-[#1F1414]
        z-10  
        tablet:h-fit 
        tablet:py-7 
        tablet:top-[10%]  
        tablet:rounded-lg 
        tablet:overflow-hidden  
        tablet:left-[10%] 
        tablet:w-[80vw] 
        desktopMini:top-[15%] 
        desktopMini:left-[20%] 
        desktopMini:w-[60vw] 
        desktopBig:left-[25%] 
        desktopBig:w-[45vw] 
        w-screen 
        h-screen
        shadow-md`
      }
    >
      {/* Close button */}
      <div className="flex w-full items-center justify-between">
        <button disabled className="w-[24px] h-[24px] opacity-0"></button>
        <h1 
          className="
            font-bold 
            text-lg 
            text-orange-400 
            dark:text-[#F06868] 
            mobileMini:text-xl"
        >
          AVISO!
        </h1>
        <div onClick={() => {
            setWarnModalState({ ...warnModalState, display: "hidden" });
            setInputBlurModalState(false);
        }}>
          <CloseButton height="h-[22px] w-[22px]" />
        </div>
      </div>
      <div className="text-center font-normal">
        Se você continuar, todas as suas tarefas serão apagadas! Caso esteja
        procurando uma forma de apagar apenas 1 tarefa, feche este aviso, e clique
        na tarefa que você quer apagar, desça para o final e clique em apagar.
        Caso não queira apagar nada, apenas feche este aviso. <span className="dark:text-[#F06868] text-orange-400">Caso você realmente
        queira apagar tudo, clique no botão abaixo.</span> 
        <br />
        <br />
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
