
export function Greet() {
    return (
        <div className="w-screen h-fit flex flex-col gal-2">
            <div className="w-full h-fit">
                <p className="text-[#111111] font-bold text-xl">Bem vindo de volta</p>
            </div>
            <div className="w-full h-fit">
                <p className="text-[#111111] font-medium text-lg">
                    Você tem certa de 10 tarefas pendentes
                </p>
            </div>
        </div>
    )
}