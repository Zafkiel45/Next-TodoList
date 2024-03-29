import { SetStateAction } from "react";
import PencilSvg from '../utility/svg_components/pencil';

interface TypeOfProps {
  descrebe: string;
  addDescrebeWithKey: (e: { key: string }) => void;
  setDescrebe: (value: SetStateAction<string>) => void;
  addDescrebe: () => void;
}

export const TextArea = ({
  descrebe,
  addDescrebeWithKey,
  setDescrebe,
  addDescrebe,
}: TypeOfProps) => {
  return (
    <div className="w-full desktopMini:w-4/5 h-auto flex items-center gap-3 flex-col ">
      <textarea
        value={descrebe}
        onKeyDown={addDescrebeWithKey}
        onChange={(e) => setDescrebe(e.target.value)}
        className="
        placeholder:text-xs 
        placeholder:text-[#5B5757] 
        dark:border-[#6C567D]
        dark:bg-[#161319]
        dark:placeholder:text-[#BA8AEB]
        border-[#818181]
        bg-[#F8F8F8]
        border 
        rounded-lg 
        w-full 
        shadow-lg 
        placeholder:font-medium 
        px-3 
        text-base 
        py-3"
        placeholder="Digite uma descrição para sua tarefa..."
        name=""
        id=""
        cols={30}
        rows={10}
      ></textarea>
      <button
        disabled={descrebe === "" ? true : false}
        onClick={addDescrebe}
        className={`
        self-end 
        font-bold 
        w-fit 
        h-fit 
        px-4 
        py-1 
        rounded-lg 
        placeholder:text-[#5B5757] 
        dark:border-[#6C567D]
        dark:bg-[#161319]
        dark:placeholder:text-[#BA8AEB]
        border-[#818181]
        bg-[#F8F8F8]
        border 
        `}
      >
        <PencilSvg/>
      </button>
    </div>
  );
};
