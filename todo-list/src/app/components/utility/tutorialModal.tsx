'use client';
import CloseButton from '../utility/svg_components/x';
// hooks
import { useAtom } from 'jotai';
// atoms 
import { modalTutorialStateAtom } from '@/app/(atoms)/(modal)/modal-utility-atoms';

export const TutorialModal = ({content}: {content: string;}) => {

  const [modalTutorialState, setModalTutorialState] = useAtom(modalTutorialStateAtom);

  return (
    <div className={`${modalTutorialState ? 'flex':'hidden'} ${modalTutorialState ? 'backdrop-blur-sm':'backdrop-blur-0'} z-20 items-center justify-center fixed top-0 left-0 w-full h-full bg-transparent`}>
        <div className={`flex flex-col border dark:border-[#6C567D] border-[#818181] gap-4 desktopMini:h-3/5 desktopMini:w-3/5 mobileMini:h-4/5 mobileMini:w-4/5 h-full w-full dark:bg-[#161319] bg-[#F8F8F8] rounded-md p-3`}>
            <div className='flex justify-between px-3 items-center'>
                <div className='w-5 h-5'></div>
                <h1 className='text-lg tablet:text-xl font-bold'>
                    Como usar
                </h1>
                <div onClick={() => setModalTutorialState(() => false)} >
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
