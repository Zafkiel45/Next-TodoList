interface TypeOfProps {
  idx: number;
  task: any[];
  PriorityFunction: (tag: string) => void;
}

export const Priority = ({ idx, task, PriorityFunction }: TypeOfProps) => {
  return (
    <div className="flex flex-col gap-4 dark:bg-zinc-800 bg-gray-200 border border-gray-300 dark:border-none rounded-md p-4 shadow-md w-full desktopMini:w-4/5">
      <div>
        <p className="font-bold">Prioridade:</p>
      </div>
      <div className="flex gap-4 justify-center items-center">
        {idx !== null && task !== undefined && task[idx] ? (
          <>
            <button
              onClick={() => {
                PriorityFunction("bg-blue-500");
              }}
              className={`w-fit ${
                task[idx].prioridade === "bg-blue-500"
                  ? "bg-blue-500"
                  : "bg-transparent"
              } ${
                task[idx].prioridade === "bg-blue-500"
                  ? "text-white"
                  : "text-blue-500"
              }  border  hover:text-white hover:bg-blue-600 border-blue-600 h-fit rounded-md px-3 py-1`}
            >
              Baixa
            </button>
            <button
              onClick={() => {
                PriorityFunction("bg-yellow-500");
              }}
              className={`w-fit ${
                task[idx].prioridade === "bg-yellow-500"
                  ? "bg-yellow-500"
                  : "bg-transparent"
              } ${
                task[idx].prioridade === "bg-yellow-500"
                  ? "text-white"
                  : "text-yellow-600"
              } border  hover:text-white hover:bg-yellow-600 border-yellow-600 rounded-md h-fit px-3 py-1`}
            >
              Médio
            </button>
            <button
              onClick={() => {
                PriorityFunction("bg-red-500");
              }}
              className={`w-fit ${
                task[idx].prioridade === "bg-red-500"
                  ? "bg-red-500"
                  : "bg-transparent"
              } ${
                task[idx].prioridade === "bg-red-500"
                  ? "text-white"
                  : "text-red-500"
              } border  hover:text-white hover:bg-red-600 border-red-600 rounded-md h-fit px-3 py-1`}
            >
              Alta
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};
