
interface TypeOfProps {
  task: any[];
  indexed: number;
}

export const Description = ({ task, indexed }: TypeOfProps) => {

  return (
    <div className="bg-gray-200 border border-gray-300 dark:border-none dark:bg-zinc-800 w-full desktopMini:w-4/5 h-auto p-4 rounded-lg shadow-md flex items-center ">
      {indexed !== null &&
      task !== undefined &&
      task[indexed] &&
      task[indexed].description !== "" ? (
        <>{task[indexed].description}</>
      ) : (
        <>
          <p className="italic">Sem descrição</p>
        </>
      )}
    </div>
  );
};
