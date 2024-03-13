import { SetStateAction } from "react";

interface TypeOfProps {
  setDisplayControl: (
    value: SetStateAction<{ visible: string; blur: boolean }>
  ) => void;
  displayControl: { visible: string; blur: boolean };
}

export const DeleteButton = ({
  setDisplayControl,
  displayControl,
}: TypeOfProps) => {
  return (
    <div className="w-full desktopMini:w-4/5 text-white flex justify-center items-center p-4 border border-red-600 bg-red-400 rounded-lg shadow-md">
      <button
        onClick={() =>
          setDisplayControl({
            ...displayControl,
            visible: "flex",
            blur: true,
          })
        }
        className="font-bold bg-red-500 w-fit h-fit px-4 py-1 shadow-md rounded-lg"
      >
        Excluir tarefa
      </button>
    </div>
  );
};
