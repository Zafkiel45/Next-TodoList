import { useEffect, useContext } from "react"
import { todoContext } from "./context"

export const Tasks = () => {

    const { task, priorityCurrentColor, setSideBar, setIdx, idx} = useContext(todoContext)

    const InterativeElements = (e) => {
        setSideBar('right-0');
        setIdx(e);
    }


    return (
        <>    
            <ol className="flex flex-col gap-3 items-center py-4 list-none w-4/5 h-full ">
                {task.map((item, index) => {
                    return (
                        <li  onClick={() => {InterativeElements(index)}} className="w-full flex justify-between text-sm h-10 bg-zinc-700 shadow-md rounded-lg py-2 px-3 text-white" key={index}> 
                            <div>{item.nome}</div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className={`${task[index].prioridade}`} height="22" viewBox="0 -960 960 960" width="22"><path d="M480-120q-33 0-56.5-23.5T400-200q0-33 23.5-56.5T480-280q33 0 56.5 23.5T560-200q0 33-23.5 56.5T480-120Zm-80-240v-480h160v480H400Z"/></svg>
                            </div>
                        </li>
                    )
                })}
            </ol>    
        </>
    )
}