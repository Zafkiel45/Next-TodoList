'use client'
import CloseSvg from '../utility/svg_components/x';
import SearchSvg from '../utility/svg_components/search';
import { use, useContext } from 'react';
import { todoContext } from '../context';
import { KeyboardEvent } from 'react';
import { useState } from 'react';

// hooks
import { useAtom } from 'jotai';
import { useAtomValue } from 'jotai';
import { useSetAtom } from 'jotai';
// atoms 
import { 
    visibleStateAtom,
    indexedItemIndexAtom, 
} from '@/app/(atoms)/(modal)/modal-atoms';
import { 
    inputSearchTasksModalAtom, 
    inputSearchValueAtom, 
    tasksStateAtom, 
    tasksIndexStateAtom,
    tasksSearchedAtom,
} from '@/app/(atoms)/(tasks)/tasks-atoms';

export const SearchTask = () => {
    // update and read functiosn:
    const [inputSearchModalState, setInputSearchModalState] = useAtom(inputSearchTasksModalAtom);
    const [inputSearchValueState, setInputSearchValueState] = useAtom(inputSearchValueAtom);
    const [tasksSearchedState, setTasksSearchedState] = useAtom(tasksSearchedAtom);
    const [visibleState, setVisibleState] = useAtom(visibleStateAtom);
    // only read value:
    const tasksState = useAtomValue(tasksStateAtom);
    // only update:
    const setTasksIndexState = useSetAtom(tasksIndexStateAtom);
    const setIndexedItemState = useSetAtom(indexedItemIndexAtom);

    const HandlDescription = (taskId:number) => {
        // Encontre a tarefa correta usando o ID
        const taskToDisplay = tasksState.find(item => item.id === taskId);
    
        if (taskToDisplay) {
            setTasksIndexState(tasksState.indexOf(taskToDisplay));
        } else {
            setTasksIndexState(null);
        }
    }    
        
    const HandleSearchTasks = () => {
        const elementFilred = tasksState.filter((item) => {
            return item.title.toLowerCase().trim().includes(inputSearchValueState.toLowerCase().trim());
        })
        try {
            if(elementFilred.length === 0) {
                throw new Error("esse elemento não existe!")
            }
            setTasksSearchedState(elementFilred)
        } catch (mensage) {
            window.alert("a tarefa não existe" + mensage)
        }
    }

    const HandleKeyEvent = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            HandleSearchTasks();
        }
    }
    const HandleOpenModal = (e:number) => {
        setVisibleState({
            ...visibleState,
            position: 'right-0',
            display: 'flex'
        });
        setIndexedItemState(e);
    }

    const HandleCloseSearchModal = () => {
        setInputSearchModalState(false);
        setInputSearchValueState('');
        setTasksSearchedState([]);
    }

    return (
        <div className={`fixed top-0 left-0 w-screen h-screen ${inputSearchModalState ? 'flex':'hidden'} z-20`}>
            <div className={`
                h-full 
                w-full
                flex
                absolute 
                top-0 
                left-0
                dark:bg-[#161319]
                bg-[#F8F8F8]
                flex-col
                gap-4
                px-2
                mobileMini:items-center
                dark:text-white
                
            `}>
                <div className='flex items-center w-full justify-between px-3 py-2'>
                    <div className='h-[24px] w-[24px]'></div>
                    <div>
                        <h1 className='text-lg desktopMini:text-xl'>
                            Busque por tarefas
                        </h1>
                    </div>
                    <div className='cursor-pointer' onClick={HandleCloseSearchModal}>
                        <CloseSvg height='h-[24px] w-[24px]'/>
                    </div>
                </div>
                <div className='flex gap-2 justify-center w-full'>
                    <div className='mobileMini:w-4/5 tablet:w-[70%]'>
                        <input 
                            type="text" 
                            value={inputSearchValueState}
                            onKeyDown={HandleKeyEvent}
                            onChange={(e) => setInputSearchValueState(e.target.value)}
                            aria-label='pesquise por uma tarefa'
                            placeholder='Pesquise por algo'
                            className='
                            dark:bg-[#161319]
                                border 
                                dark:border-[#6C567D]
                                border-[#818181]
                                rounded-md
                                dark:placeholder:text-[#BA8AEB]
                                placeholder-text-[#5B5757]
                                placeholder:text-sm
                                px-3
                                py-1
                                mobileMini:py-2
                                w-full
                            '
                        />
                    </div>
                    <div onClick={HandleSearchTasks} className='
                        dark:bg-[#161319]
                        border 
                        dark:border-[#6C567D]
                        border-[#818181]
                        rounded-md
                        px-2
                    '>
                        <button className=' flex w-full h-full justify-center items-center'>
                            <SearchSvg/>
                        </button>
                    </div>
                </div>
                <div className='w-full flex justify-center overflow-y-hidden'>
                    <ol className='flex overflow-y-scroll w-full mobileMini:w-11/12 tablet:w-[79%] desktop:w-[82%]  py-3 px-1 flex-col items-center gap-3'>
                        {tasksSearchedState.map((item, index) => {
                            return (
                                <li  key={item.title} onClick={() => {
                                    HandleOpenModal(item.id);
                                    HandlDescription(item.id);
                                }} className='
                                relative 
                                tablet:hover:scale-105 
                                border 
                                dark:border-[#6C567D] 
                                border-[#818181]
                                tablet:transition-transform 
                                w-full 
                                desktop:w-[90%] 
                                hover:cursor-pointer 
                                desktop:h-14 
                                mobileMini:py-3 
                                mobileMini:h-11 
                                items-center 
                                flex 
                                justify-between 
                                text-sm 
                                h-10 
                                bg-[#F8F8F8] 
                                dark:bg-[#161319]
                                transition-colors 
                                shadow-md 
                                rounded-lg 
                                py-2 
                                px-3 
                                text-black 
                                dark:text-white
                                '>
                                    <div className={`
                                        ${tasksSearchedState[index].color} 
                                        animate-pulse 
                                        -top-1 
                                        -right-1 
                                        rounded-full 
                                        w-3 
                                        h-3 
                                        absolute`
                                    }>
                                    </div>
                                    <div>
                                        {item.title}
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="dark:fill-[#B371D1] fill-[#3F3F3F] bi bi-three-dots" viewBox="0 0 16 16">
                                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                                            </svg>
                                    </div>
                                </li>
                                
                            )
                        })}
                </ol>
                </div>
            </div>
        </div>
    )
}