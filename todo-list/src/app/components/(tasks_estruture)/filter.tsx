'use client'
import AskIcon from '../utility/svg_components/unknown';
import { TasksContext } from '../utility/tasksContext';
import CloseButton from '../utility/svg_components/x';
import { TagsOfFilter } from './tags';
import {useContext} from 'react';
import { todoContext } from '../context';
import { UpdateDB } from '../utility/updateDB';

export const FilterTasks = () => {

    const {activeFilter, setActiveFilter, currentTag} = useContext(TasksContext);
    const { setTask} = useContext(todoContext)

    const HandleFilter = () => {

        if(currentTag === '') {
            window.alert('erro');
            return;
        }
        const request: IDBOpenDBRequest = indexedDB.open("database");

        request.onsuccess = () => {
          const database: IDBDatabase = request.result;
          const transaction: IDBTransaction = database.transaction("tasks");
          const store: IDBObjectStore = transaction.objectStore("tasks");
          const currentObject = [];

          store.openCursor().onsuccess = (event) => {
            const cursor: IDBCursorWithValue = (event.target as IDBRequest).result;

            if(cursor) {
                if(currentTag !== 'tudo') {
                    const currentElement = cursor.value.type === currentTag;
                    if(currentElement) {
                        currentObject.push(cursor.value);
                    } 
                } else {
                    UpdateDB(setTask);
                    setActiveFilter(false);
                    return;
                }
                cursor.continue();
            } else {
                setTask(currentObject);
            }
          }
        }
        setActiveFilter(false);
    }

    return (
        <div className={`${activeFilter ? 'flex':'hidden'} absolute top-0 left-0 w-screen dark:text-white h-screen bg-[#F8F8F8] dark:bg-[#161319] z-10 flex flex-col gap-5`}>
            <header className='w-full py-2 h-auto'>
                <nav className='flex justify-between px-3 items-center'>
                    <div>
                        <AskIcon/>
                    </div>
                    <div className='text-lg font-medium'>Filte tarefas</div>
                    <div className='cursor-pointer' onClick={() => setActiveFilter(false)} >
                        <CloseButton height='h-[22px] w-[22px]'/>
                    </div>
                </nav>
            </header>
            <main className='flex flex-col w-full h-fit px-3 gap-3'>
                <div className='flex w-full bg-gray-300 dark:bg-transparent py-4 rounded-md border dark:border-none border-[#818181] px-2 flex-wrap gap-2'>
                    <TagsOfFilter
                     BackgroundColor={'bg-[#5366A7]'}
                     BallColor={'bg-[#3197D0]'}
                     typeOfFlag={'casa'}
                    />
                    <TagsOfFilter
                     BackgroundColor={'bg-[#9F9C50]'}
                     BallColor={'bg-[#CDD031]'}
                     typeOfFlag={'estudos'}
                    />
                    <TagsOfFilter
                     BackgroundColor={'bg-[#44833F]'}
                     BallColor={'bg-[#77D031]'}
                     typeOfFlag={'trabalho'}
                    />
                    <TagsOfFilter
                     BackgroundColor={'bg-[#A97648]'}
                     BallColor={'bg-[#D07E31]'}
                     typeOfFlag={'rotina'}
                    />
                    <TagsOfFilter
                     BackgroundColor={'bg-[#87277D]'}
                     BallColor={'bg-[#FF0DE7]'}
                     typeOfFlag={'evento'}
                    />
                    <TagsOfFilter
                     BackgroundColor={'bg-[#D85050]'}
                     BallColor={'bg-[#D03131]'}
                     typeOfFlag={'urgente'}
                    />
                    <TagsOfFilter
                     BackgroundColor={'bg-[#8F9A4C]'}
                     BallColor={'bg-[#4C642F]'}
                     typeOfFlag={'viagem'}
                    />
                    <TagsOfFilter
                     BackgroundColor={'bg-[#3F388C]'}
                     BallColor={'bg-[#695EFA]'}
                     typeOfFlag={'academia'}
                    />
                    <TagsOfFilter
                     BackgroundColor={'bg-[#3C8792]'}
                     BallColor={'bg-[#33DFD5]'}
                     typeOfFlag={'compras'}
                    />
                    <TagsOfFilter
                     BackgroundColor={'bg-[#6C567D] border border-[#6C567D]'}
                     BallColor={'bg-[#7F2FBE]'}
                     typeOfFlag={'tudo'}
                    />
                </div>
                <div className={`w-full h-auto flex justify-center items-center mt-5`} >
                    <button onClick={HandleFilter} className='dark:bg-[#121013] bg-[#818181] text-white  border-[#5B5757] border dark:border-[#6C567D] w-fit h-fit px-10 py-2 rounded-md shadow-sm cursor-pointer'>
                        Filtrar!
                    </button>
                </div>
            </main>
        </div>
    )
}