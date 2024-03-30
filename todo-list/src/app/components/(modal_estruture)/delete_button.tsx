import { SetStateAction } from "react";
import DangerSvg from "../utility/svg_components/danger";

export const DeleteButton = ({ removeTask }: { removeTask: () => void }) => {
  return (
    <div
      className="
      w-full 
      desktopMini:w-4/5 
      dark:text-[#F06868]
      flex 
      flex-col
      gap-3
      justify-center 
      items-center 
      p-4 
      border 
      text-white
      dark:border-[#A35757]
      dark:bg-[#1F1414]
      bg-[#933F3F]
      rounded-lg 
      shadow-md"
    >
      <div className="flex w-full justify-start gap-3">
        <div>
          <DangerSvg />
        </div>
        <div>Zona de parigo!</div>
      </div>
      <div className="text-sm">
        Após deletar uma tarefa, ela nunca mais poderá ser recuperada novamente.
        Caso não seja o que você deseja, evite esta área. Esta opção apagara
        somente esta tarefa. Todas as outras permanecerão.
      </div>
      <button
        onClick={removeTask}
        className="
        font-bold 
        dark:bg-[#C23E3E] 
        text-white
        w-fit 
        border 
        bg-[#ea2929]
        border-[#561616]
        h-fit 
        px-5
        py-1 
        shadow-md 
        rounded-lg
        "
      >
        Deletar
      </button>
    </div>
  );
};
