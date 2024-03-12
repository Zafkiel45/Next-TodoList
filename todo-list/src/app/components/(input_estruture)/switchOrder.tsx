interface TypeOfProps {
  sortElements: (a: number, b: number, c: number, d: number) => Promise<void>;
}

export const SwithOrder = ({ sortElements }: TypeOfProps) => {
  return (
    <div
      className={`dark:border-zinc-700 border-zinc-400 border h-auto p-2  w-4/5 rounded-lg  flex gap-4 items-center flex-col`}
    >
      <div className="tablet:text-center text-black dark:text-white transition-all">
        Filtrar Lista por prioridade
      </div>
      <div className="flex tablet:flex-col desktopMini:flex-row desktopMini:py-2 tablet:items-center  gap-2">
        <button
          onClick={() => sortElements(11, 5, 0, 20)}
          className="bg-blue-500 dark:bg-transparent border w-fit h-fit dark:hover:bg-blue-500 dark:hover:text-white  px-4 py-1 tablet:w-28  desktopMini:w-fit rounded-lg dark:border-blue-500 dark:text-blue-500 text-white font-medium shadow-sm dark:shadow-md cursor-pointer"
        >
          Baixa
        </button>
        <button
          onClick={() => sortElements(5, 0, 11, 20)}
          className="dark:bg-transparent bg-yellow-500 border w-fit h-fit dark:hover:bg-yellow-500 dark:hover:text-white  px-4 py-1 tablet:w-28  desktopMini:w-fit rounded-lg dark:border-yellow-500 text-white dark:text-yellow-500 font-medium shadow-sm dark:shadow-md cursor-pointer"
        >
          Média
        </button>
        <button
          onClick={() => sortElements(0, 5, 11, 20)}
          className="bg-red-500 dark:bg-transparent border w-fit h-fit dark:hover:bg-red-500 dark:hover:text-white px-4 py-1 tablet:w-28 desktopMini:w-fit rounded-lg dark:border-red-500 text-white dark:text-red-500 font-medium shadow-sm dark:shadow-md cursor-pointer"
        >
          Alta
        </button>
      </div>
    </div>
  );
};