"use client";
import { todoContext } from "../context";
import { useContext } from "react";

interface TypeOfProps {
  renameKey: (e: { key: string }) => void;
  addRename: () => void;
}

export const InputRename = ({ renameKey, addRename }: TypeOfProps) => {
  const { rename, setRename } = useContext(todoContext);

  return (
    <div className="w-full desktopMini:w-4/5 h-auto items-center flex gap-3">
      <input
        type="text"
        value={rename}
        onKeyDown={renameKey}
        onChange={(e) => {
          setRename(e.target.value);
        }}
        placeholder="Renomear tarefa..."
        className="placeholder:text-xs placeholder:text-stone-400 dark:border-none border border-gray-300 dark:placeholder:text-zinc-500 placeholder:font-medium mobileMini:py-3 px-3 w-full bg-gray-200 dark:bg-zinc-800 py-2 shadow-md rounded-md"
      />
      <button
        disabled={rename === "" ? true : false}
        onClick={addRename}
        className={`${
          rename === "" ? "bg-gray-400" : "bg-blue-400"
        } w-fit h-fit py-1 px-2 rounded-lg shadow-sm font-bold text-white`}
      >
        Renomear
      </button>
    </div>
  );
};
