import { useEffect, useState, useContext  } from "react"
import { todoContext } from "./context"

export const Tasks = () => {


    const { key, task, setTask } = useContext(todoContext)

    return (
        <>        
            {task.map((item, index) => {
                return (
                    <li  className="text-white" key={index}>{item.nome} </li>
                )
            })}
        </>
    )
}