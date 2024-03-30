interface TypeOfProps {
  task: any[];
  indexed: number;
}

export const Description = ({ task, indexed }: TypeOfProps) => {
  return (
    <div
      className="
    placeholder:text-[#5B5757] 
    dark:border-[#6C567D]
    dark:bg-[#161319]
    dark:placeholder:text-[#BA8AEB]
    border-[#818181]
    bg-[#F8F8F8]
    border 
    w-full 
    desktopMini:w-4/5 
    h-auto 
    p-4 
    rounded-lg 
    shadow-md 
    flex 
    items-center 
    "
    >
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
