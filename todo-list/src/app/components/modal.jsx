import { useContext, useState } from "react"
import { todoContext } from "./context"

export const Modal = () => {

    const { key, setSideBar, name, setName ,setTask,  sideBar, descrebe, setDescrebe, idx, task } = useContext(todoContext);
    const [displayControl, setDisplayControl] = useState({
        visible: 'hidden',
        blur: false
    })
    // the function responsible of sideBar toggle
    const toggleSideBar = () => {
        setSideBar({
            ...sideBar,
            position: 'right-[-200%]',
            display: 'hidden',
        })
    }
    // The function responsible of adding a description of a task
    const addDescrebe = () => {
        const Storage = JSON.parse(localStorage.getItem(key) || '[]');

        if(Storage[idx]) {
            Storage[idx].descricao = descrebe;
            localStorage.setItem(key, JSON.stringify(Storage));
            setTask(() => Storage)
            setDescrebe(() => '')
        }
    }
    // The function responsible about the rename setting 
    const addRename = () => {
        const Storage = JSON.parse(localStorage.getItem(key) || '[]');

        if(Storage[idx]) {
            Storage[idx].nome = name;
            localStorage.setItem(key, JSON.stringify(Storage));
            setTask(() => Storage)
            setName(() => '')
        }
    }
    // The function responsible for adding the priority to for a task 
    const PriorityFunction = (tag) => {
        const Storage = JSON.parse(localStorage.getItem(key) || '[]');
        
        if(Storage[idx]) {
            Storage[idx].prioridade = tag;
            localStorage.setItem(key, JSON.stringify(Storage));
            setTask(() => Storage)
        }
    }
    // The function responsible for delete a individual task
    const RemoveTask = () => {
        const Storage = JSON.parse(localStorage.getItem(key) || '[]');
        const filtedStorage = Storage.filter((element, idxs) => {
            return idx !== idxs
        })
        localStorage.setItem(key, JSON.stringify(filtedStorage));
        setTask(() => filtedStorage)
        setDisplayControl({...displayControl, visible: 'hidden', blur: false})
        toggleSideBar()
    }

    return (
        <>
            <nav className={`absolute ${displayControl.blur ? 'blur-sm':' blur-0'} transition-all ${sideBar.display} gap-5 flex-col items-center py-10 top-0 ${sideBar.position} w-screen h-screen overflow-y-scroll bg-zinc-900 p-3 text-white z-10`}>
                {/* close button */}
                <div onClick={toggleSideBar} className="self-end relative bottom-3 w-fit h-fit bg-red-500 p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </div>
                {/* Input Rename */}
                <div className="w-full desktopMini:w-4/5 h-auto items-center flex gap-3">
                    <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} placeholder="Renomear tarefa..." className="placeholder:text-xs placeholder:text-zinc-500 placeholder:font-medium mobileMini:py-3 px-3 w-full bg-zinc-800 py-2 shadow-md rounded-md" />
                    <button disabled={name === '' ? true:false} onClick={addRename} className={`${name === '' ? 'bg-gray-400':'bg-blue-400'} w-fit h-fit py-1 px-2 rounded-lg shadow-sm font-bold`}>
                        Renomear
                    </button>
                </div>
                {/* Textarea */}
                <div className="w-full desktopMini:w-4/5 h-auto flex items-center gap-3 flex-col ">
                    <textarea value={descrebe} onChange={(e) => setDescrebe(e.target.value)} className="bg-zinc-800 rounded-lg w-full shadow-lg placeholder:text-zinc-500 placeholder:font-medium px-3 text-base py-3" placeholder="Digite uma descrição para sua tarefa..." name="" id="" cols="30" rows="10"></textarea>
                    <button disabled={descrebe === '' ? true:false}  onClick={addDescrebe} className={`self-end ${descrebe === '' ? 'bg-gray-400':'bg-blue-400'} font-bold w-fit h-fit px-4 py-1 rounded-lg`}>
                        Salvar
                    </button>
                </div>
                {/* Description */}
                <div className=" bg-zinc-800 w-full desktopMini:w-4/5 h-auto p-4 rounded-lg shadow-md flex items-center ">
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
                {/* Priority */}
                <div className="flex flex-col gap-4 bg-zinc-800 rounded-md p-4 shadow-md w-full desktopMini:w-4/5">
                    <div>
                        <p className="font-bold">
                            Prioridade:
                        </p>
                    </div>
                    <div className="flex gap-4 justify-center items-center">     
                        {idx !== null && task !== undefined && task[idx] ? (
                            <>                        
                                <button onClick={() => {PriorityFunction('bg-blue-500')}} className={`w-fit ${task[idx].prioridade === 'bg-blue-500' ? 'bg-blue-500':'bg-transparent'} ${task[idx].prioridade === 'bg-blue-500' ? 'text-white':'text-blue-400'}  border  hover:text-white hover:bg-blue-600 border-blue-600 h-fit rounded-md px-3 py-1`}>Baixa</button>
                                <button onClick={() => {PriorityFunction('bg-yellow-500')}} className={`w-fit ${task[idx].prioridade === 'bg-yellow-500' ? 'bg-yellow-500':'bg-transparent'} ${task[idx].prioridade === 'bg-yellow-500' ? 'text-white':'text-yellow-400'} border  hover:text-white hover:bg-yellow-600 border-yellow-600 rounded-md h-fit px-3 py-1`}>Médio</button>
                                <button onClick={() => {PriorityFunction('bg-red-500')}} className={`w-fit ${task[idx].prioridade === 'bg-red-500' ? 'bg-red-500':'bg-transparent'} ${task[idx].prioridade === 'bg-red-500' ? 'text-white':'text-red-400'} border  hover:text-white hover:bg-red-600 border-red-600 rounded-md h-fit px-3 py-1`}>Alta</button>
                            </>
                        ):null}               
                    </div>
                </div>
                {/* Delet button */}
                <div className="w-full desktopMini:w-4/5 flex justify-center items-center p-4 border border-red-600 bg-red-400 rounded-lg shadow-md">
                    <button onClick={() => setDisplayControl({...displayControl, visible: 'flex', blur: true})} className="font-bold bg-red-500 w-fit h-fit px-4 py-1 shadow-md rounded-lg">
                        Excluir tarefa 
                    </button>
                </div>
            </nav>
            {/* Modal warn */}
            <div className={`absolute ${displayControl.visible} text-white top-[10%]  flex tablet:left-[15%] gap-4 items-center flex-col p-4 rounded-lg bg-zinc-700 z-10  desktop:w-[50%] desktop:left-[25%] desktopMini:left-[20%] desktopMini:w-[60%] tablet:w-[70%] w-[90%] h-auto shadow-md`}>
                    <div className="flex w-full items-center justify-between">
                        <button disabled className="w-[16px] opacity-0">
                        </button>
                        <h1 className="font-bold">Aviso</h1>
                        <svg onClick={() => setDisplayControl({...displayControl, visible: 'hidden', blur: false})} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                        </svg>
                    </div>
                    <p>
                        Após excluir uma tarefa não é possível mais recuperá-la. Antes de 
                        excluir uma terafa tenha certeza de quê realmente deseja fazer isso.
                        Caso tenha mudado de ideia, basta apertar o &quot;x&quot;. 
                    </p>
                    <div className="bg-red-400 text-white font-normal border border-red-600 w-full p-4 shadow-md rounded-md">
                        A tarefa será excluída e você perderá todas as suas personalizações como descrição e prioridade. 
                        Tenha em mente que você irá excluir apenas está tarefa, e não todas. Caso queria prosseguir com a 
                        ação, aperte o botão abaixo. 
                    </div>
                    <button onClick={RemoveTask} className="font-bold bg-red-500 w-fit h-fit px-4 py-1 shadow-md rounded-lg">
                        Excluir
                    </button>
            </div>
        </>
    )
}
