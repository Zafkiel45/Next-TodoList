'use client'
import { useContext } from "react"
import { TasksContext } from "../utility/tasksContext"

export const TagsOfFilter = ({
    BackgroundColor, 
    typeOfFlag, 
    BallColor,
} ) => {

    const { setCurrentTag } = useContext(TasksContext);

    return (
        <div onClick={() => setCurrentTag(typeOfFlag)} className={`
            ${BackgroundColor} 
            w-fit
            h-fit 
            py-1 
            px-3
            text-white
            relative
            rounded-md
            cursor-point
            flex-grow
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