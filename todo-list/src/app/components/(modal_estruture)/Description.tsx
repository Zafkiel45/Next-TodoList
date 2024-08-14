'use client'
// hooks
import { useAtomValue } from "jotai";
// atoms
import { tasksIndexStateAtom } from "@/app/(atoms)/(tasks)/tasks-atoms";

interface TypeOfProps {
  task: any[];
}

export const Description = ({ task }: TypeOfProps) => {

  const getTasksIndexState = useAtomValue(tasksIndexStateAtom);

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
      {getTasksIndexState !== null &&
      task !== undefined &&
      task[getTasksIndexState] &&
      task[getTasksIndexState].description !== "" ? (
        <>{task[getTasksIndexState].description}</>
      ) : (
        <>
          <p className="italic">Sem descrição</p>
        </>
      )}
    </div>
  );
};
