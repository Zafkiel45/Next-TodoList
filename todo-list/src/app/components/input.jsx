import { useContext, useEffect } from "react"
import { todoContext } from "./context"

export const InputTask = () => {

    const { key, task, setTask, name, setName, control, setControl } = useContext(todoContext)
    useEffect(() => {
        const Storage = JSON.parse(localStorage.getItem(key) || '[]');
        Storage.push({
            nome: name
        });
        localStorage.setItem(key, JSON.stringify(Storage))
        setTask(Storage)
    }, [control])

    return (
        <div className="flex gap-4">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="shadow-md border rounded-lg border-zinc-200" />
            <button onClick={() => setControl(!control)} className="bg-blue-400 text-white font-medium w-fit h-fit py-1 px-4 shadow-md rounded-md">Adicionar</button>
        </div>
    )
}