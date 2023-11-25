import { useContext, useEffect, useState} from "react"
import { todoContext } from "./context"

export const InputTask = () => {

    const {key, setTask, name, setName, descrebe, toggleSideBarFunction } = useContext(todoContext)
    const [displayControl, setDisplayControl] = useState({
        visible: 'hidden',
    })
    useEffect(() => {
        const Storage = JSON.parse(localStorage.getItem(key) || '[]');
        setTask(Storage)
    }, [key]);

    const setElementStorage = () => {
        
        const Storage = JSON.parse(localStorage.getItem(key) || '[]');
        const NameSeem = Storage.find((item) => {return item.nome === name})
        
        if(NameSeem != undefined || name === '' || name.length >= 25 || name.trim() === '') {
            setName(() => '')
            window.alert("[ERRO] \n - Não é possível adicionar o mesmo nome para uma outra tarefa;\n -Não é possível deixar o nome da tarefa em branco;\n - Não é possível escrever nomes com mais de 30 caracteres; \n - Não é permitido apenas espaços em branco;");
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
            <div className={`flex pt-3 w-full h-screen items-center desktop:w-4/5 mobileMini:w-[90%] tablet:gap-2 flex-col gap-4`}>
                {/* close button */}
                <div onClick={toggleSideBarFunction} className="self-end tablet:hidden relative bottom-3 right-2 w-fit h-fit bg-red-500 p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </div>
                <span className="text-lg mobileMini:text-xl desktopMini:text-2xl">Lista de Tarefas</span>
                {/* task input */}
                <div className="flex justify-center w-full items-center">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite uma tarefa..." className="placeholder:text-zinc-400 focus:border focus:border-blue-400 placeholder:text-xs w-4/5 shadow-md px-3 py-2 text-white font-normal rounded-md bg-zinc-800 "/>
                </div>
                {/* add button */}
                <div className="flex justify-center w-full items-center">
                    <button onClick={setElementStorage} className="bg-blue-500 flex items-center justify-center text-white font-medium w-4/5  tablet:px-4 desktop:py-2 desktopMini:px-6 h-fit py-2 px-9 shadow-md rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="margin-auto bi bi-plus h-7 w-7" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                        </svg>
                    </button>
                </div>
                {/* delete button */}
                <div className="flex justify-center w-full items-center">
                    <button onClick={() => setDisplayControl({...displayControl, visible: 'flex', blur: true})} className="bg-red-500 desktop:py-2 flex items-center justify-center text-white font-medium w-4/5  desktopMini:px-6  tablet:px-4 h-fit py-2 px-9 shadow-md rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                        </svg>
                    </button>
                </div>
            </div>
            <Modal dispacth={setDisplayControl} objectComplete={displayControl} visible={displayControl.visible} removeAllElements={removeAllElements} />
        </>
    )
}

const Modal = ({removeAllElements, objectComplete, dispacth}) => {
    
    return (
        <div className={`absolute top-5 ${objectComplete.visible} text-white gap-4 items-center flex-col p-4 rounded-lg bg-zinc-700 z-10 mobileMini:top-3 desktop:w-[40%] desktopMini:w-[60%] tablet:w-[70%] mobileMini:w-[80%] w-[90%] h-auto shadow-md`}>
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
                basta cancelar apertando no &quot;x&quot;. Vale lembrar que também é possível excluir 
                tarefas de forma individual clicando nela e descendo até a última opção.
            </p>
            <div className="bg-red-400 text-white font-normal border border-red-600 w-full p-4 shadow-md rounded-md">
                Você perderá todas as suas tarefas e suas configurações como: detalhes da tarefa,
                prioridades e quaisquer outras opções de configuração relacionado a tarefas. 
                <br />
                <br />
                É importante enfatizar que é possível recria-las do zero caso queira uma tarefa 
                exatamente igual a tarefa excluída.
            </div>
            <button onClick={removeAllElements} className="font-bold bg-red-500 w-fit h-fit px-4 py-1 shadow-md rounded-lg">
                Excluir
            </button>
        </div>
    )
}
