import { useContext, useEffect } from "react"
import { todoContext } from "./context"

export const InputTask = () => {

    const { key, task, setTask, name, setName, control, setControl } = useContext(todoContext)
    useEffect(() => {
        const Storage = JSON.parse(localStorage.getItem(key) || '[]');
        setTask(Storage)
    }, [control])
    const setElementStorage = () => {
        const Storage = JSON.parse(localStorage.getItem(key) || '[]');
        Storage.push({
            nome: name
        });
        localStorage.setItem(key, JSON.stringify(Storage))
        setControl(!control)
    }

    return (
        <div className="flex pt-6 flex-col gap-4">
            <div className="flex justify-center items-center">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite uma tarefa..." className="placeholder:text-zinc-400 placeholder:text-xs shadow-md px-2 py-2 text-white font-medium w-4/5 rounded-md bg-zinc-700 "/>
            </div>
            <div className="flex justify-center items-center">
                <button onClick={setElementStorage} className="bg-blue-400 text-white font-medium w-4/5 h-fit py-1 px-8 shadow-md rounded-md">Adicionar</button>
            </div>
        </div>
    )
}