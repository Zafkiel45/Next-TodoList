import CloseButton from "../utility/svg_components/x";

export const HeaderOfModal = ({
    closeModal
}: {closeModal: () => void}) => {
    return (
        <header className={`flex w-full py-2 px-3 justify-between`}>
            <div className="w-[22px] h-[22px]"></div>
            <div className={`font-semibold text-lg`}>
                <h1>
                    Configurações
                </h1>
            </div>
            <div onClick={closeModal}>
                <button>
                    <CloseButton width="w-[22px]" height="h-[22px]"/>
                </button>
            </div>
        </header>
    )
}