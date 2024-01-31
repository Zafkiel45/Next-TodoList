import { useContext, useEffect, useState, useCallback} from "react"
import { todoContext } from "./context"

export const InputTask = () => {

    interface controler {
        visible: string;
        blur?: boolean;
    }
    
    const [displayControl, setDisplayControl] = useState<controler>({
        visible: 'hidden',
    });

    const {
        setBlur, 
        blur, 
        key, 
        setTask, 
        name,
        setName, 
        descrebe, 
        toggleSideBarFunction, 
        task 
    } = useContext(todoContext);

    useEffect(() => {
        const Storage = JSON.parse(localStorage.getItem(key) || '[]');
        setTask(Storage);
    }, [key]);

    const setElementStorage = useCallback(async () => {

        const Storage = await JSON.parse(localStorage.getItem(key) || '[]');
        const NameSeem = await Storage.find((item: { nome: string; }) => {return item.nome === name})
        
        interface currentObjectErros {
            nameSeem: boolean | undefined;
            nameLength: boolean;
            nameVoid: boolean;
            nameSpace: boolean;
        }
        
        const objectError: currentObjectErros = {
            nameSeem: NameSeem != undefined,
            nameLength: name.length >= 25,
            nameVoid: name === '',
            nameSpace: name.trim() === '',
        }
        
        if(objectError.nameSeem || objectError.nameVoid || objectError.nameLength || objectError.nameSpace) {
            setName(() => '')
            window.alert("[ERRO] \n - Não é possível adicionar o mesmo nome para uma outra tarefa;\n -Não é possível deixar o nome da tarefa em branco;\n - Não é possível escrever nomes com mais de 30 caracteres; \n - Não é permitido apenas espaços em branco;");
        } else {

            Storage.unshift({
                nome: name,
                descricao: descrebe,
                prioridade: 'fill-gray-300'
            });
            
            localStorage.setItem(key, JSON.stringify(Storage))
            setName(() => '')
            setTask(() => Storage)
            toggleSideBarFunction()
        }
        
    }, [name, descrebe]) 
    
    const keyPressEvent = (event) => {
        if(event.key === 'Enter') {
            setElementStorage()
            toggleSideBarFunction()
            event.target.blur()
        }
    }

    const removeAllElements = () => {
        localStorage.removeItem(key)
        setTask(() => [])
        setBlur(() => false)
        setDisplayControl({...displayControl, visible: 'hidden', blur: false})
    }
    
    const controlElementsDisplay = () => {
        setDisplayControl({...displayControl, visible: 'flex'});
        setBlur(() => true)
    }

    const sortElements = async (a:number, b:number, c:number, d:number) => {

        const Storage = await JSON.parse(localStorage.getItem(key) || '[]');

        const levelPriority = {
            "bg-red-500": a,
            "bg-yellow-500": b,
            "bg-blue-500": c,
            "fill-gray-300": d,
        }

        interface currentPriority {
            prioridade: string | number;
        }

        Storage.sort((one: currentPriority, two: currentPriority) => levelPriority[one.prioridade] - levelPriority[two.prioridade]);
        localStorage.setItem(key, JSON.stringify(Storage));
        setTask(() => Storage)
        toggleSideBarFunction()
    }

    return (
        <>        
            <div className={`flex pt-3 w-full transition-all ${blur ? 'blur-sm':null} h-screen items-center desktop:w-4/5 desktop:gap-2 mobileMini:gap-3 mobileMini:w-[90%] tablet:gap-5 flex-col gap-4`}>
                {/* close button */}
                <div onClick={toggleSideBarFunction} className="self-end tablet:hidden relative bottom-3 right-2 w-fit h-fit bg-red-500 p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </div>
                <span className="text-lg mobileMini:text-xl desktopMini:text-2xl">Lista de Tarefas</span>
                {/* task input */}
                <div className="flex justify-center w-full items-center">
                    <input type="text" value={name}  onKeyDown={keyPressEvent} onChange={(e) => setName(e.target.value)} placeholder="Digite uma tarefa..." className="placeholder:text-zinc-400 focus:border focus:border-blue-400 placeholder:text-xs w-4/5 shadow-md px-3 py-2 text-white font-normal rounded-md bg-zinc-800 "/>
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
                    <button onClick={controlElementsDisplay} className={`bg-red-500 desktop:py-2 flex items-center justify-center text-white font-medium w-4/5 desktopMini:px-6  tablet:px-4 h-fit py-2 px-9 shadow-md rounded-md`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                        </svg>
                    </button>
                </div>
                {/* filter */}
                <div className={`border-zinc-700 border h-auto p-2  w-4/5 rounded-lg  flex gap-4 items-center flex-col`}>
                    <div className="tablet:text-center">Filtrar Lista por prioridade</div>
                    <div className="flex tablet:flex-col desktopMini:flex-row desktopMini:py-2 tablet:items-center  gap-2">
                        <button onClick={() => sortElements(11,5,0, 20)} className="bg-blue-transparent border w-fit h-fit hover:bg-blue-500 hover:text-white  px-4 py-1 tablet:w-28  desktopMini:w-fit rounded-lg border-blue-500 text-blue-500 font-normal shadow-md cursor-pointer">Baixa</button>
                        <button onClick={() => sortElements(5,0,11, 20)} className="bg-yellow-transparent border w-fit h-fit hover:bg-yellow-500 hover:text-white  px-4 py-1 tablet:w-28  desktopMini:w-fit rounded-lg border-yellow-500 text-yellow-500 font-normal shadow-md cursor-pointer">Média</button>
                        <button onClick={() => sortElements(0,5,11, 20)} className="bg-red-transparent border w-fit h-fit hover:bg-red-500 hover:text-white   px-4 py-1 tablet:w-28  desktopMini:w-fit rounded-lg border-red-500  text-red-500 font-normal shadow-md cursor-pointer">Alta</button>
                    </div>
                </div>
            </div>
            <Modal setBlur={setBlur} dispacth={setDisplayControl} objectComplete={displayControl} removeAllElements={removeAllElements} />
        </>
    )
}

const Modal = ({removeAllElements, objectComplete, dispacth, setBlur}) => {
    
    return (
        <div className={`absolute top-0 ${objectComplete.visible} overflow-y-scroll text-white gap-4 items-center flex-col p-4 bg-zinc-700 z-10  tablet:h-fit tablet:py-7 tablet:top-[2%]  tablet:rounded-lg tablet:overflow-hidden  tablet:left-[30%] tablet:w-[80vw] desktopMini:top-[4%] desktopMini:left-[55%] desktopMini:w-[60vw] desktopBig:left-[97%] desktopBig:w-[45vw] w-full h-full shadow-md`}>
            {/* Close button */}
            <div className="flex w-full items-center justify-between">
                <button disabled className="w-[16px] opacity-0">
                </button>
                <h1 className="font-bold mobileMini:text-xl">Aviso</h1>
                <svg onClick={() => {
                    dispacth({...objectComplete, visible: 'hidden'});
                    setBlur(() => false)
                }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg cursor-pointer" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
            </div>
            {/* text 1 */}
            <p className="font-normal">
                Se prosseguir com esta ação <strong>todas as suas tarefas serão excluídas
                e não poderá recuperá-las nunca mais.</strong> Caso tenha mudado de ideia
                basta cancelar apertando no &quot;x&quot;. Vale lembrar que também é possível excluir 
                tarefas de forma individual clicando nela e descendo até a última opção.
            </p>
            {/* text 2 */}
            <div className="bg-red-400 text-white font-normal border border-red-600 w-full p-4 shadow-md rounded-md">
                Você perderá todas as suas tarefas e suas configurações como: detalhes da tarefa,
                prioridades e quaisquer outras opções de configuração relacionado a tarefas. 
                <br />
                <br />
                É importante enfatizar que é possível recria-las do zero caso queira uma tarefa 
                exatamente igual a tarefa excluída.
            </div>
            {/* Delete all button */}
            <button onClick={removeAllElements} className="font-bold bg-red-500 w-fit h-fit px-4 py-1 shadow-md rounded-lg">
                Excluir
            </button>
        </div>
    )
}
