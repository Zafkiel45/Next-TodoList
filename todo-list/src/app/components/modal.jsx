

export const Modal = () => {
    return (
        <nav className="absolute flex gap-5 flex-col items-center py-10 top-0 right-0 w-screen h-screen bg-zinc-900 p-3 text-white z-10">
            <div className="w-full h-auto flex gap-3">
                <input type="text" placeholder="Renomear tarefa..." className="placeholder:text-xs placeholder:text-zinc-500 placeholder:font-medium px-2 w-full bg-zinc-800 shadow-md rounded-md" />
                <button className="bg-blue-400 w-fit h-fit py-1 px-2 rounded-lg shadow-sm font-bold">
                    Renomear
                </button>
            </div>
            <div className="w-full h-auto flex items-center gap-3 flex-col ">
                <textarea className="bg-zinc-800 rounded-lg shadow-lg placeholder:text-zinc-500 placeholder:font-medium px-3 text-base py-2" placeholder="Digite uma descrição para sua tarefa..." name="" id="" cols="30" rows="10"></textarea>
                <button className="self-end bg-blue-400 font-bold w-fit h-fit px-4 py-1 rounded-lg">
                    Salvar
                </button>
            </div>
        </nav>
    )
}