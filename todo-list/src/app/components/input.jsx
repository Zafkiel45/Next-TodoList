import { useContext, useEffect} from "react"
import { todoContext } from "./context"

export const InputTask = () => {

    const {idx, key, setTask, name, setName, descrebe} = useContext(todoContext)

    useEffect(() => {
        const Storage = JSON.parse(localStorage.getItem(key) || '[]');
        setTask(Storage)
    }, []);

    console.log(name)
    const setElementStorage = () => {
        const Storage = JSON.parse(localStorage.getItem(key) || '[]');
        const NameSeem = Storage.find((item) => {return item.nome === name})
        
        if(NameSeem != undefined || name === '') {
            setName(() => '')
            window.alert("[ERRO] - Não é possível adicionar o mesmo nome para uma outra tarefa; Não é possível deixar o nome da tarefa em branco.");
        } else {
            Storage.push({
                nome: name,
                descricao: descrebe,
                prioridade: ''
            });
            
            localStorage.setItem(key, JSON.stringify(Storage))
            setName(() => '')
            setTask(() => Storage)
        }
    };
    const removeAllElements = () => {
        localStorage.clear(key)
        setTask(() => [])
    }

    return (
        <div className="flex pt-3 flex-col gap-4">
            <div className="flex justify-center items-center">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite uma tarefa..." className="placeholder:text-zinc-400 placeholder:text-xs shadow-md px-2 py-2 text-white font-normal w-4/5 rounded-md bg-zinc-700 "/>
            </div>
            <div className="flex justify-center items-center">
                <button onClick={setElementStorage} className="bg-blue-400 text-white font-medium w-4/5 h-fit py-1 px-8 shadow-md rounded-md">Adicionar</button>
            </div>
            <div className="flex justify-center items-center">
                <button onClick={removeAllElements} className="bg-red-400 text-white font-medium w-4/5 h-fit py-1 px-8 shadow-md rounded-md">Excluir tudo</button>
            </div>
        </div>
    )
}