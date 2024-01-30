'use client'
import { todoContext } from "./components/context"
import { InputTask } from "./components/input"
import { useState } from "react";
import { Tasks } from "./components/task";
import { Modal } from "./components/modal";


export default function Home() {

  const key = 'tasks';
  const [task, setTask] = useState([]);
  const [name, setName] = useState('');
  const [idx, setIdx] = useState(null);
  const [blur, setBlur] = useState(false);
  const [descrebe, setDescrebe] = useState('');
  const [sideBar, setSideBar] = useState({
    position:'right-[-200%]',
    display: 'hidden',
  });
  const [toggleSideBar, setToggleSideBar] = useState<string>('left-0');
  const toggleSideBarFunction = ():void => {
    setToggleSideBar('left-[-100%]')
  }
  const toggleSideBarFunctionReverse = ():void => {
    setToggleSideBar('left-0')
  }
  return (
    <todoContext.Provider value={{
      blur, 
      setBlur, 
      toggleSideBarFunction, 
      key, 
      task, 
      setTask, 
      setName, 
      name, 
      setSideBar, 
      sideBar, 
      descrebe, 
      setDescrebe, 
      idx, 
      setIdx
    }}>
      <div className="flex ">
        <div onClick={toggleSideBarFunctionReverse} className={`px-2 border-r justify-center border-r-zinc-800 w-[10vw] tablet:hidden bg-zinc-900 h-screen flex items-center`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
          </svg>
        </div>
        <div className={`flex text-white tablet:border-r border-r-zinc-800 justify-center absolute top-0 tablet:left-0 transition-all ${toggleSideBar} h-screen bg-zinc-900 desktopBig:w-[30vw]  tablet:w-[40vw] w-screen z-10 font-bold items-center pt-2 flex-col`}>
          <InputTask/>   
        </div>
        <Modal/>
        <div className={`transition-all flex tablet:justify-end tablet:w-[103vw] w-[90vw] ${blur ? 'blur-sm':null} overflow-hidden h-screen py-2 bg-zinc-900`}>
          <div className="h-full overflow-y-scroll overflow-x-hidden desktopBig:w-[70%] w-full tablet:w-[60%] flex justify-center">
            <Tasks/>       
          </div>
        </div>
      </div>
    </todoContext.Provider>
  )
}
