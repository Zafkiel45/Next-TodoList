import CloseButton from '../utility/svg_components/x';
import { useContext } from 'react';
import { TasksContext } from './tasksContext';
export const TutorialModal = ({content}: {content: string;}) => {

  const { visibility, setVisibility } = useContext(TasksContext); 

  return (
    <div className={`${visibility ? 'flex':'hidden'} ${visibility ? 'backdrop-blur-sm':'backdrop-blur-0'} z-20 items-center justify-center fixed top-0 left-0 w-full h-full bg-transparent`}>
        <div className={`flex flex-col border dark:border-[#6C567D] border-[#818181] gap-4 desktopMini:h-3/5 desktopMini:w-3/5 mobileMini:h-4/5 mobileMini:w-4/5 h-full w-full dark:bg-[#161319] bg-[#F8F8F8] rounded-md p-3`}>
            <div className='flex justify-between px-3 items-center'>
                <div className='w-5 h-5'></div>
                <h1 className='text-lg tablet:text-xl font-bold'>
                    Como usar
                </h1>
                <div onClick={() => setVisibility(() => false)} >
                    <CloseButton height='h-5' width='w-5' />
                </div>
            </div>
            <div className='text-normal text-center tablet:text-lg'>
                {content}
            </div>
        </div>
    </div>
  );
};
