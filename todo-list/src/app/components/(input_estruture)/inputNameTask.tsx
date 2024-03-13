'use client'
import { todoContext } from "../context"
import { useContext } from "react"

interface TypeOfProps {
    keyEvent: (e:any) => void;
}

export const InputNameTask = ({keyEvent}:TypeOfProps) => {
    const { setName, name } = useContext(todoContext);

    return (
        <div className="flex justify-center w-full items-center">
            <input
                type="text"
                value={name}
                onKeyDown={keyEvent}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite uma tarefa..."
                className={`placeholder:text-gray-500 dark:placeholder:text-zinc-400 transition-all  focus:border focus:border-blue-400 placeholder:text-xs w-4/5 shadow-md px-3 py-2 text-black dark:text-white font-normal rounded-md bg-gray-200 dark:bg-zinc-800`}
            />
      </div>
    )
}