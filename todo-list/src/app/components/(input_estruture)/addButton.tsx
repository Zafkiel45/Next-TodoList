import AddSVG from '../utility/svg_components/add'

export const AddButton = ({setElementStorage}:{setElementStorage: () => Promise<unknown>}) => {
    return (
        <div className="flex justify-center w-full items-center">
            <button
                onClick={setElementStorage}
                aria-label='botão para adicionar uma tarefa'
                className="
                dark:bg-[#161319] 
                bg-[#B570FA]
                flex items-center 
                justify-center 
                border
                border-[#6C567D]
                text-white 
                font-medium 
                w-4/5  
                tablet:px-4 
                desktop:py-2 
                desktopMini:px-6 
                h-fit 
                py-3
                px-9 
                shadow-md 
                rounded-md"
            >   
            <AddSVG />
        </button>
      </div>
    )
}