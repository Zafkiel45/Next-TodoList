'use client'
import { ReactNode, useState } from "react"
import { SwitchMode } from "./modeContext"

export const AllElements = ({children}:{children:ReactNode}) => {

    const [mode, setMode] = useState<string>('dark')
    const toggleTheme = ():void => {
        setMode(() => mode === 'dark' ? 'light':'dark');
        console.log(mode)
    }

    return (
        <>
            <SwitchMode.Provider value={{mode, toggleTheme}}>
                {children}
            </SwitchMode.Provider>
        </>
    )
}