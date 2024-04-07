'use client'
import CloseSvg from '../utility/svg_components/x';
import SearchSvg from '../utility/svg_components/search';
import { TasksContext } from '../utility/tasksContext';
import { useContext } from 'react';
import { todoContext } from '../context';
import { KeyboardEvent } from 'react';
import { useState } from 'react';

export const SearchTask = () => {

    const { 
        activeSearch,
        setActiveSearch,
    } = useContext(TasksContext);

    const [search, setSearch] = useState('');
    const [currentElementsSearched, setCurrentElementsSearched] = useState([]);
    const { task, setSideBar, sideBar, setIndexed, setTitle } = useContext(todoContext);

    const HandlDescription = (taskId:number) => {
   
        // Encontre a tarefa correta usando o ID
        const taskToDisplay = task.find(item => item.id === taskId);
    
        if (taskToDisplay) {
            setIndexed(task.indexOf(taskToDisplay));
        } else {
            setIndexed(null);
        }
    }    
        
    const HandleSearchTasks = () => {
        const elementFilred = task.filter((item) => {
            return item.title.toLowerCase().trim().includes(search.toLowerCase().trim());
        })
        try {
            if(elementFilred.length === 0) {
                throw new Error("esse elemento não existe!")
            }
            setCurrentElementsSearched(elementFilred)
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
        setSideBar({
            ...sideBar,
            position: 'right-0',
            display: 'flex'
        });
        setTitle(e);
    }

    const HandleCloseSearchModal = () => {
        setActiveSearch(false);
        setSearch('');
        setCurrentElementsSearched([]);
    }

    return (
        <div className={`
            w-screen
            h-full
            flex
            absolute 
            top-0 
            left-0
            dark:bg-[#161319]
            bg-[#F8F8F8]
            flex-col
            gap-6
            z-10
            px-2
            dark:text-white
            ${activeSearch ? 'flex':'hidden'}
        `}>
            <div className='flex items-center justify-between px-3 py-2'>
                <div className='h-[24px] w-[24px]'></div>
                <div>
                    <h1 className='text-lg'>
                        Busque por tarefas
                    </h1>
                </div>
                <div onClick={HandleCloseSearchModal}>
                    <CloseSvg height='h-[24px] w-[24px]'/>
                </div>
            </div>
            <div className='flex gap-2 w-full'>
                <div>
                    <input 
                        type="text" 
                        value={search}
                        onKeyDown={HandleKeyEvent}
                        onChange={(e) => setSearch(e.target.value)}
                        aria-label='pesquise por uma tarefa'
                        placeholder='Pesquise por algo'
                        className='
                          dark:bg-[#161319]
                            border 
                            dark:border-[#6C567D]
                            rounded-md
                            dark:placeholder:text-[#BA8AEB]
                            placeholder:text-sm
                            px-3
                            py-1
                            w-full
                        '
                    />
                </div>
                <div onClick={HandleSearchTasks} className='
                    dark:bg-[#161319]
                    border 
                    dark:border-[#6C567D]
                    rounded-md
                    px-2
                '>
                    <button className='flex w-full h-full justify-center items-center'>
                        <SearchSvg/>
                    </button>
                </div>
            </div>
            <div>
               <ol className='flex flex-col gap-3'>
                    {currentElementsSearched.map((item, index) => {
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
                                    ${currentElementsSearched[index].color} 
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
    )
}