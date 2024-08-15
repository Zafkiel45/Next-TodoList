'use client';
import { SearchTask } from "./(tasks_estruture)/search";
import { FilterTasks } from "./(tasks_estruture)/filter";
// hooks
import { useMemo } from "react";
import { useAtom } from "jotai";
import { useSetAtom } from "jotai";
import { useAtomValue } from "jotai";
// atoms
import { visibleStateAtom } from "../(atoms)/(modal)/modal-atoms";
import { indexedItemIndexAtom } from "../(atoms)/(modal)/modal-atoms";
import { tasksIndexStateAtom } from "../(atoms)/(tasks)/tasks-atoms";
import { tasksStateAtom } from "../(atoms)/(tasks)/tasks-atoms";

export const Tasks = () => {
    
    const setIndexedItemState = useSetAtom(indexedItemIndexAtom);
    const setTasksIndexState = useSetAtom(tasksIndexStateAtom);
    
    const [visibleState, setVisibleState] = useAtom(visibleStateAtom); 
    
    const tasks = useAtomValue(tasksStateAtom);

    const tasksOptimized = useMemo(() => {
        try {

            return tasks.map((item, index) => {
                return (
                    <li  
                        onClick={() => {
                            InterativeElements(item.id, index)
                        }} 
                        className="
                            relative 
                            tablet:hover:scale-105 
                            border 
                            dark:border-[#6C567D] 
                            border-[#818181]
                            tablet:transition-transform 
                            w-full 
                            desktop:w-[90%] 
                            hover:cursor-pointer 
                            desktop:h-14 
                            mobileMini:py-3 
                            mobileMini:h-11 
                            items-center 
                            flex 
                            justify-between 
                            text-sm 
                            h-10 
                            bg-[#F8F8F8] 
                            dark:bg-[#161319]
                            transition-colors 
                            shadow-md 
                            rounded-lg 
                            py-2 
                            px-3 
                            text-black 
                            dark:text-white
                            "
                        key={Math.random()}> 
                        <div>{item.title}</div>
                        <div className={`${tasks[index].color} animate-pulse -top-1 -right-1 rounded-full w-3 h-3 absolute`}>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="dark:fill-[#B371D1] fill-[#3F3F3F] bi bi-three-dots" viewBox="0 0 16 16">
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                            </svg>
                        </div>
                    </li>
                )
            })

        } catch({name, mensage}) {
            console.log("ocorreu um erro " + name + " " + mensage)
        }
    }, [tasks]);
    

    const InterativeElements = (e:number, m: number):void => {
        setVisibleState({
            ...visibleState,
            position: 'right-0',
            display: 'flex'
        });
        setIndexedItemState(e);
        setTasksIndexState(m)
    }

    return (
        <>    
            <ol className="flex flex-col gap-3 items-center py-4 list-none w-4/5 h-full">
                {tasksOptimized}
                <SearchTask/>
                <FilterTasks/>
            </ol>    
        </>
    )
}
