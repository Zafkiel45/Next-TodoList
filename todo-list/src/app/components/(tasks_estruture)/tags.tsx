'use client'
import { useContext } from "react"
import { TasksContext } from "../utility/tasksContext"
// hooks
import { useSetAtom } from "jotai"
// atoms 
import { inputFilterTasksTagAtom } from "@/app/(atoms)/(tasks)/tasks-atoms"

export const TagsOfFilter = ({
    BackgroundColor, 
    typeOfFlag, 
    BallColor,
} ) => {

    const setInputFilterTag = useSetAtom(inputFilterTasksTagAtom);

    return (
        <div onClick={() => setInputFilterTag(typeOfFlag)} className={`
            ${BackgroundColor} 
            w-fit
            h-fit 
            py-1 
            px-3
            text-white
            relative
            rounded-md
            cursor-pointer
            flex-grow
            mobileMini:px-5 
            mobileMini:py-2
            tablet:px-6
            tablet:py-3
            desktopMini:px-8
            desktopMIni:text-lg
            desktop:px-7
            desktop:py-2
            
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