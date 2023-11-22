import { useState, useContext } from "react"
import { todoContext } from "./context"

export const Tasks = () => {


    const { task, setSideBar, setIdx} = useContext(todoContext)
    const InterativeElements = (e) => {
        setSideBar('right-0');
        setIdx(e);
    }


    return (
        <>    
            <ol className="flex flex-col gap-3 items-center list-none w-4/5 h-full overflow-scroll">
                {task.map((item, index) => {
                    return (
                        <li  onClick={() => {InterativeElements(index)}} className="w-full text-sm h-10 bg-zinc-700 shadow-md rounded-lg py-2 px-3 text-white" key={index}>{item.nome} </li>
                    )
                })}
            </ol>    
        </>
    )
}