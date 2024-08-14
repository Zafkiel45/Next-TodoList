'use client'
import { UpdateDB } from "../utility/updateDB";
// hooks;
import { useAtomValue } from "jotai";
import { useSetAtom } from "jotai";
// atmos 
import { indexedItemIndexAtom } from "@/app/(atoms)/(modal)/modal-atoms";
import { tasksStateAtom } from "@/app/(atoms)/(tasks)/tasks-atoms";

interface Props {
    BallColor: string;
    BorderColor: string;
    BackgroundColor: string;
    typeOfFlag: string;
}

export const FlagComponent = ({
    BallColor, 
    BorderColor,
    BackgroundColor,
    typeOfFlag,
}:Props) => {

    const indexedItemIndexState = useAtomValue(indexedItemIndexAtom);
    const setTasksState = useSetAtom(tasksStateAtom);

    const addFlagInDatabase = () => {
        const openDatabase: IDBOpenDBRequest = indexedDB.open("database");
        openDatabase.onsuccess = () => {
            console.log("pronto para adicionar flags");
            const database: IDBDatabase = openDatabase.result;
            const transaction: IDBTransaction = database.transaction('tasks',"readwrite");
            const objectstore: IDBObjectStore = transaction.objectStore('tasks');
            const currentBallColor = objectstore.get(indexedItemIndexState);

            currentBallColor.onerror = () => {
                console.log("erro ao obter color");
            }
            currentBallColor.onsuccess = (event) => {
                const setNewsValues = (event.target as IDBRequest).result;
    
                setNewsValues.type = typeOfFlag;
                setNewsValues.color = BallColor;
                objectstore.put(setNewsValues).onsuccess = () => {
                    UpdateDB(setTasksState);
                }
            }
        }
    }
    
    return (
        <div onClick={addFlagInDatabase} className={`
            border 
            ${BorderColor}
            ${BackgroundColor} 
            w-fit
            h-fit 
            text-white
            py-1 
            px-3
            relative
            rounded-md
            cursor-pointer
            flex-grow
            desktopMini:text-lg
        `}
        aria-label={`marque sua tarefa como ${typeOfFlag}`}
        >
            {/* ball */}
            <div className={`
                absolute 
                ${BallColor}
                animate-pulse
                -right-1
                -top-1
                w-[10px]
                h-[10px]
                rounded-full

            `}></div>
            {typeOfFlag}
        </div>
    )
}