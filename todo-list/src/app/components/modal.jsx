import { useContext } from "react"
import { todoContext } from "./context"

export const Modal = () => {

    const { key, setSideBar, setTask,  sideBar, descrebe, setDescrebe, idx, task } = useContext(todoContext);

    const toggleSideBar = () => {
        setSideBar('right-[-100%]')
    }
    const addDescrebe = () => {
        const Storage = JSON.parse(localStorage.getItem(key) || '[]');

        if(Storage[idx]) {
            Storage[idx].descricao = descrebe;
            localStorage.setItem(key, JSON.stringify(Storage));
            setTask(Storage)
        }
    }
    return (
        <nav className={`absolute transition-all flex gap-5 flex-col items-center py-10 top-0 ${sideBar} w-screen h-screen bg-zinc-900 p-3 text-white z-10`}>
            <div onClick={toggleSideBar} className="self-end relative bottom-3 w-fit h-fit bg-red-500 p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
            </div>
            <div className="w-full h-auto flex gap-3">
                <input type="text" placeholder="Renomear tarefa..." className="placeholder:text-xs placeholder:text-zinc-500 placeholder:font-medium px-2 w-full bg-zinc-800 shadow-md rounded-md" />
                <button className="bg-blue-400 w-fit h-fit py-1 px-2 rounded-lg shadow-sm font-bold">
                    Renomear
                </button>
            </div>
            <div className="w-full h-auto flex items-center gap-3 flex-col ">
                <textarea value={descrebe} onChange={(e) => setDescrebe(e.target.value)} className="bg-zinc-800 rounded-lg shadow-lg placeholder:text-zinc-500 placeholder:font-medium px-3 text-base py-2" placeholder="Digite uma descrição para sua tarefa..." name="" id="" cols="30" rows="10"></textarea>
                <button onClick={addDescrebe} className="self-end bg-blue-400 font-bold w-fit h-fit px-4 py-1 rounded-lg">
                    Salvar
                </button>
            </div>
            <div className=" bg-zinc-800 w-full h-16 flex items-center ">
            {idx !== null && task !== undefined && task[idx] ? (
                <>
                    {task[idx].descricao}
                 </>
            ): null}
            </div>
        </nav>
    )
}