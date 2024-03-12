'use client'
import { createContext } from "react"

interface modeType {
    mode: string;
    toggleTheme: () => void;
}

export const SwitchMode = createContext<modeType | null>(null)