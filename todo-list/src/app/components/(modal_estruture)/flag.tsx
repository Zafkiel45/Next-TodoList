'use client'
import { useContext } from "react";
import { todoContext } from "../context";
import { UpdateDB } from "../utility/updateDB";

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

    const { title, setTask } = useContext(todoContext);

    const addFlagInDatabase = () => {
        const openDatabase: IDBOpenDBRequest = indexedDB.open("database");
        openDatabase.onsuccess = () => {
            console.log("pronto para adicionar flags");
            const database: IDBDatabase = openDatabase.result;
            const transaction: IDBTransaction = database.transaction('tasks',"readwrite");
            const objectstore: IDBObjectStore = transaction.objectStore('tasks');
            const currentBallColor = objectstore.get(title);

            currentBallColor.onerror = () => {
                console.log("erro ao obter color");
            }
            currentBallColor.onsuccess = (event) => {
                const setNewsValues = (event.target as IDBRequest).result;
    
                setNewsValues.type = typeOfFlag;
                setNewsValues.color = BallColor;
                objectstore.put(setNewsValues).onsuccess = () => {
                    UpdateDB(setTask)
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
            cursor-point
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