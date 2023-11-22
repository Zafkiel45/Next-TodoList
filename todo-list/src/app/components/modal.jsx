import { useContext } from "react"
import { todoContext } from "./context"

export const Modal = () => {

    const { priority, setPriority, key, setSideBar, name, setName ,setTask,  sideBar, descrebe, setDescrebe, idx, task } = useContext(todoContext);

    const toggleSideBar = () => {
        setSideBar('right-[-100%]')
    }
    const addDescrebe = () => {
        const Storage = JSON.parse(localStorage.getItem(key) || '[]');

        if(Storage[idx]) {
            Storage[idx].descricao = descrebe;
            localStorage.setItem(key, JSON.stringify(Storage));
            setTask(() => Storage)
            setDescrebe(() => '')
        }
    }
    const addRename = () => {
        const Storage = JSON.parse(localStorage.getItem(key) || '[]');

        if(Storage[idx]) {
            Storage[idx].nome = name;
            localStorage.setItem(key, JSON.stringify(Storage));
            setTask(() => Storage)
            setName(() => '')
        }
    }
    const PriorityFunction = (tag) => {
        const Storage = JSON.parse(localStorage.getItem(key) || '[]');
        
        if(Storage[idx]) {
            Storage[idx].prioridade = tag;
            localStorage.setItem(key, JSON.stringify(Storage));
            setTask(() => Storage)
        }
    }
    return (
        <nav className={`absolute transition-all flex gap-5 flex-col items-center py-10 top-0 ${sideBar} w-screen h-auto bg-zinc-900 p-3 text-white z-10`}>
            <div onClick={toggleSideBar} className="self-end relative bottom-3 w-fit h-fit bg-red-500 p-1 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
            </div>
            <div className="w-full h-auto flex gap-3">
                <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} placeholder="Renomear tarefa..." className="placeholder:text-xs placeholder:text-zinc-500 placeholder:font-medium px-2 w-full bg-zinc-800 shadow-md rounded-md" />
                <button disabled={name === '' ? true:false} onClick={addRename} className={`${name === '' ? 'bg-gray-400':'bg-blue-400'} w-fit h-fit py-1 px-2 rounded-lg shadow-sm font-bold`}>
                    Renomear
                </button>
            </div>
            <div className="w-full h-auto flex items-center gap-3 flex-col ">
                <textarea value={descrebe} onChange={(e) => setDescrebe(e.target.value)} className="bg-zinc-800 rounded-lg shadow-lg placeholder:text-zinc-500 placeholder:font-medium px-3 text-base py-3" placeholder="Digite uma descrição para sua tarefa..." name="" id="" cols="30" rows="10"></textarea>
                <button disabled={descrebe === '' ? true:false}  onClick={addDescrebe} className={`self-end ${descrebe === '' ? 'bg-gray-400':'bg-blue-400'} font-bold w-fit h-fit px-4 py-1 rounded-lg`}>
                    Salvar
                </button>
            </div>
            <div className=" bg-zinc-800 w-full h-auto p-4 rounded-lg shadow-md flex items-center ">
                {idx !== null && task !== undefined && task[idx] && task[idx].descricao !== '' ? (
                    <>
                        {task[idx].descricao}
                     </>
                ): (
                    <>
                        <p className="italic">Sem descrição</p>
                    </>
                )}
            </div>
            <div className="flex flex-col gap-4 bg-zinc-800 rounded-md p-4 shadow-md w-full">
                <div>
                    <p className="font-bold">
                        Prioridade:
                    </p>
                </div>
                <div className="flex gap-4 justify-center items-center">     
                    {idx !== null && task !== undefined && task[idx] ? (
                        <>                        
                            <button onClick={() => {PriorityFunction('baixa')}} className={`w-fit ${task[idx].prioridade === 'baixa' ? 'bg-blue-500':'bg-transparent'} ${task[idx].prioridade === 'baixa' ? 'text-white':'text-blue-400'}  border  hover:text-white hover:bg-blue-600 border-blue-600 h-fit rounded-md px-3 py-1`}>Baixa</button>
                            <button onClick={() => {PriorityFunction('média')}} className={`w-fit ${task[idx].prioridade === 'média' ? 'bg-yellow-500':'bg-transparent'} ${task[idx].prioridade === 'média' ? 'text-white':'text-yellow-400'} border  hover:text-white hover:bg-yellow-600 border-yellow-600 rounded-md h-fit px-3 py-1`}>Médio</button>
                            <button onClick={() => {PriorityFunction('alta')}} className={`w-fit ${task[idx].prioridade === 'alta' ? 'bg-red-500':'bg-transparent'} ${task[idx].prioridade === 'alta' ? 'text-white':'text-red-400'} border  hover:text-white hover:bg-red-600 border-red-600 rounded-md h-fit px-3 py-1`}>Alta</button>
                        </>
                    ):null}               
                </div>
            </div>
        </nav>
    )
}