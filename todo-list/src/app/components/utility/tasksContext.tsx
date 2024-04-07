"use client"
import { createContext } from "react"

interface TasksContextTypes {
    activeSearch: boolean;
    activeFilter: boolean;
    currentTag: string;
    setActiveSearch: React.Dispatch<React.SetStateAction<boolean>>;
    setActiveFilter: React.Dispatch<React.SetStateAction<boolean>>;
    setCurrentTag: React.Dispatch<React.SetStateAction<string>>;
}

export const TasksContext = createContext<TasksContextTypes | undefined>(undefined);