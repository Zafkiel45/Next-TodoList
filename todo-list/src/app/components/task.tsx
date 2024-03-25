import { useContext, useMemo, useState } from "react"
import { todoContext } from "./context"

export const Tasks = () => {

    const { task, sideBar, setSideBar, setTitle, setIndexed} = useContext(todoContext);


    const tasksOptimized = useMemo(() => {
        try {

            return task.map((item, index) => {
                return (
                    <li  onClick={() => {InterativeElements(item.id, index)}} className="relative tablet:hover:scale-105 border dark:border-none border-gray-200 tablet:transition-transform w-full desktop:w-[90%] hover:cursor-pointer desktop:h-14 mobileMini:py-3 mobileMini:h-11 items-center flex justify-between text-sm h-10 bg-gray-100 dark:bg-zinc-800 transition-colors shadow-md rounded-lg py-2 px-3 text-black dark:text-white" key={Math.random()}> 
                        <div>{item.title}</div>
                        <div className={`${task[index].prioridade} animate-pulse top-[-2px] right-[-2px] rounded-full w-3 h-3 absolute`}>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                            </svg>
                        </div>
                    </li>
                )
            })

        } catch({name, mensage}) {
            console.log("ocorreu um erro " + name + " " + mensage)
        }
    }, [task]);

    const InterativeElements = (e:number, m: number):void => {
        setSideBar({
            ...sideBar,
            position: 'right-0',
            display: 'flex'
        });
        setTitle(e);
        setIndexed(m)
    }


    return (
        <>    
            <ol className="flex flex-col gap-3 items-center py-4 list-none w-4/5 h-full">
                {tasksOptimized}
            </ol>    
        </>
    )
}
