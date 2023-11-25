import { useContext } from "react"
import { todoContext } from "./context"

export const Tasks = () => {

    const { task, sideBar, setSideBar, setIdx} = useContext(todoContext)

    const InterativeElements = (e) => {
        setSideBar({
            ...sideBar,
            position: 'right-0',
            display: 'flex'
        });
        setIdx(e);
    }


    return (
        <>    
            <ol className="flex flex-col gap-3 items-center py-4 list-none w-4/5 h-full">
                {task.map((item, index) => {
                    return (
                        <li  onClick={() => {InterativeElements(index)}} className="relative w-full desktop:w-[90%] hover:cursor-pointer desktop:h-14 mobileMini:py-3 mobileMini:h-11 items-center flex justify-between text-sm h-10 bg-zinc-800 shadow-md rounded-lg py-2 px-3 text-white" key={Math.random()}> 
                            <div>{item.nome}</div>
                            <div className={`${task[index].prioridade} animate-pulse top-[-2px] right-[-2px] rounded-full w-3 h-3 absolute`}>

                            </div>
                        </li>
                    )
                })}
            </ol>    
        </>
    )
}
