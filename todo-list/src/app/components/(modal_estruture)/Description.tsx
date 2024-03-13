export const Description = ({ idx, task }: { idx: number; task: any[] }) => {
  return (
    <div className="bg-gray-200 border border-gray-300 dark:border-none dark:bg-zinc-800 w-full desktopMini:w-4/5 h-auto p-4 rounded-lg shadow-md flex items-center ">
      {idx !== null &&
      task !== undefined &&
      task[idx] &&
      task[idx].descricao !== "" ? (
        <>{task[idx].descricao}</>
      ) : (
        <>
          <p className="italic">Sem descrição</p>
        </>
      )}
    </div>
  );
};
