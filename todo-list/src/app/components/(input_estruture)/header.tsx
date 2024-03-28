'use client'

import { todoContext } from "../context"
import { useContext } from "react"
import { CloseButton } from "./buttonClose"

export const HeaderInput = () => {

    const { toggleSideBarFunction } = useContext(todoContext);

    return (
        <div className={`flex justify-around tablet:border-b-0 border-b pb-5 border-b-[#6C567D] w-full items-center`}>
            <span className={`w-[20px]`}>
            </span>
            <span  className="text-lg text-black transition-all dark:text-white mobileMini:text-xl desktopMini:text-2xl">
                Lista de Tarefas
            </span>
            <span>
                <CloseButton toggleSideBarFunction={toggleSideBarFunction}/>
            </span>
        </div>
    )
}