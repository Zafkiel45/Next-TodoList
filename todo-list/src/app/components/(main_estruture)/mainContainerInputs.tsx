import { InputTask } from "../input"
export const MainContainerInputs = ({toggleSideBar}:{toggleSideBar:string}) => {
    return (
        <div className={`flex text-black dark:text-white tablet:border-r border-r-gray-300 dark:border-r-zinc-800 justify-center absolute top-0 tablet:left-0 transition-all ${toggleSideBar} h-screen bg-white dark:bg-zinc-900 desktopBig:w-[30vw]  tablet:w-[40vw] w-screen z-10 font-bold items-center pt-2 flex-col`}>
            <InputTask/>   
        </div>
    )
}