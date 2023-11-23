import { useContext, useEffect, useState} from "react"
import { todoContext } from "./context"

export const InputTask = () => {

    const {key, setTask, name, setName, descrebe} = useContext(todoContext)
    const [displayControl, setDisplayControl] = useState({
        visible: 'hidden',
    })
    useEffect(() => {
        const Storage = JSON.parse(localStorage.getItem(key) || '[]');
        setTask(Storage)
    }, []);

    console.log(name)
    const setElementStorage = () => {
        const Storage = JSON.parse(localStorage.getItem(key) || '[]');
        const NameSeem = Storage.find((item) => {return item.nome === name})
        
        if(NameSeem != undefined || name === '' || name.length >= 30) {
            setName(() => '')
            window.alert("[ERRO] - Não é possível adicionar o mesmo nome para uma outra tarefa; Não é possível deixar o nome da tarefa em branco.");
        } else {
            Storage.push({
                nome: name,
                descricao: descrebe,
                prioridade: 'fill-gray-300'
            });
            
            localStorage.setItem(key, JSON.stringify(Storage))
            setName(() => '')
            setTask(() => Storage)
        }
    };
    const removeAllElements = () => {
        localStorage.clear(key)
        setTask(() => [])
        setDisplayControl({...displayControl, visible: 'hidden', blur: false})
    }

    return (
        <>        
            <div className={`flex pt-3 desktopMini:w-[90%] desktopMini:justify-center tablet:flex-row tablet:gap-2 flex-col gap-4`}>
                <div className="flex justify-center items-center">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite uma tarefa..." className="placeholder:text-zinc-400 placeholder:text-xs tablet:w-full shadow-md px-2 py-2 text-white font-normal w-4/5 rounded-md bg-zinc-700 "/>
                </div>
                <div className="flex justify-center items-center">
                    <button onClick={setElementStorage} className="bg-blue-400 text-white font-medium w-4/5  tablet:w-fit tablet:px-4  desktopMini:px-6 h-fit py-1 px-8 shadow-md rounded-md">Adicionar</button>
                </div>
                <div className="flex justify-center items-center">
                    <button onClick={() => setDisplayControl({...displayControl, visible: 'flex', blur: true})} className="bg-red-400 text-white font-medium w-4/5   desktopMini:px-6 tablet:w-fit tablet:px-4 h-fit py-1 px-8 shadow-md rounded-md">Excluir tudo</button>
                </div>
            </div>
            <Modal dispacth={setDisplayControl} objectComplete={displayControl} visible={displayControl.visible} removeAllElements={removeAllElements} />
        </>
    )
}

const Modal = ({removeAllElements, objectComplete, dispacth}) => {
    return (
        <div className={`absolute top-10 ${objectComplete.visible} text-white gap-4 items-center flex-col p-4 rounded-lg bg-zinc-700 z-10 mobileMini:text-lg desktop:w-[30%] desktopMini:w-[40%] tablet:w-[60%] mobileMini:w-[70%] w-[90%] h-auto shadow-md`}>
            <div className="flex w-full items-center justify-between">
                <button disabled className="w-[16px] opacity-0">
                </button>
                <h1 className="font-bold mobileMini:text-xl">Aviso</h1>
                <svg onClick={() => dispacth({...objectComplete, visible: 'hidden'})} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
            </div>
            <p className="font-normal">
                Se prosseguir com esta ação <strong>todas as suas tarefas serão excluídas
                e não poderá recuperá-las nunca mais.</strong> Caso tenha mudado de ideia
                basta cancelar apertando no "x". Vale lembrar que também é possível excluir 
                tarefas de forma individual clicando nela e descendo até a última opção.
            </p>
            <button onClick={removeAllElements} className="font-bold bg-red-500 w-fit h-fit px-4 py-1 shadow-md rounded-lg">
                Excluir
            </button>
        </div>
    )
}