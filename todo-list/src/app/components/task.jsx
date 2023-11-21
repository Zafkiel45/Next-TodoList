import { useEffect, useState, useContext  } from "react"
import { todoContext } from "./context"

export const Tasks = () => {


    const { key, task, setTask } = useContext(todoContext)

    return (
        <>    
            <ol className="flex flex-col gap-3 items-center list-none w-4/5 h-full overflow-scroll">
                {task.map((item, index) => {
                    return (
                        <li  className="w-full text-sm h-10 bg-zinc-700 shadow-md rounded-lg py-2 px-3 text-white" key={index}>{item.nome} </li>
                    )
                })}
            </ol>    
        </>
    )
}