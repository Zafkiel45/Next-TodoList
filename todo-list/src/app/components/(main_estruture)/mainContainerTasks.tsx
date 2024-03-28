import { Tasks } from "../task"

export const MainContainerTasks = ({blur}:{blur:boolean}) => {
    return (
        <div className={`transition-all flex tablet:justify-end tablet:w-[103vw] w-[90vw] ${blur ? 'blur-sm':null} overflow-hidden h-screen py-2 bg-white dark:bg-[#121013]`}>
            <div className="h-full overflow-y-scroll overflow-x-hidden desktopBig:w-[70%] w-full tablet:w-[60%] flex justify-center">
                <Tasks/>       
            </div>
        </div>
    )
}