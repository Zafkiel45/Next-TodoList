import TrashSvg from '../utility/svg_components/trash'

export const DeleteButton = ({
  controlElementsDisplay,
}: {
  controlElementsDisplay: () => void;
}) => {
  return (
    <div className="flex justify-center w-full items-center">
      <button
        onClick={controlElementsDisplay}
        aria-label='botão para deletar todas as tarefas'
        className={`
        dark:bg-[#1F1414] 
        bg-[#FF6161]
        border 
        border-red-700
        dark:border-[#A35757]
        desktop:py-2 
        flex 
        items-center 
        justify-center 
        text-white 
        font-medium 
        w-4/5 
        desktopMini:px-6  
        tablet:px-4 
        h-fit 
        py-3 
        px-9 shadow-md 
        rounded-md`
      }
      >
        <TrashSvg />
      </button>
    </div>
  );
};
