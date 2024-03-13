import { SetStateAction } from "react";

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
        className="dark:bg-zinc-800 bg-gray-200 dark:border-none border border-gray-300 rounded-lg w-full shadow-lg placeholder:text-zinc-500 placeholder:font-medium px-3 text-base py-3"
        placeholder="Digite uma descrição para sua tarefa..."
        name=""
        id=""
        cols={30}
        rows={10}
      ></textarea>
      <button
        disabled={descrebe === "" ? true : false}
        onClick={addDescrebe}
        className={`self-end ${
          descrebe === "" ? "bg-gray-400" : "bg-blue-400"
        } font-bold w-fit h-fit px-4 py-1 rounded-lg text-white`}
      >
        Salvar
      </button>
    </div>
  );
};
