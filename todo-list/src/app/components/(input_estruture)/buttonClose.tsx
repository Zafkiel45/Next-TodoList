import CloseSvg from '../utility/svg_components/x';

export const CloseButton = (
    { 
      toggleSideBarFunction,
  
    }:{
      toggleSideBarFunction: () => void,
    }) => {

      return (
          <div
          onClick={toggleSideBarFunction}
          className={`tablet:hidden w-fit h-fit`}
          >
            <CloseSvg height='h-[20px]' width='w-[20px]' />
        </div>
      )
  }