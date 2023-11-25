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
  const [descrebe, setDescrebe] = useState('');
  const [sideBar, setSideBar] = useState({
    position:'right-[-200%]',
    display: 'hidden',
  });
  const [toggleSideBar, setToggleSideBar] = useState('left-0');
  const toggleSideBarFunction = () => {
    setToggleSideBar('left-[-100%]')
  }

  return (
    <todoContext.Provider value={{toggleSideBarFunction , key, task, setTask, setName, name, setSideBar, sideBar, descrebe, setDescrebe, idx, setIdx}}>
      <div className="flex gap-4 w-screen overflow-hidden h-screen py-5 rounded-lg shadow-md bg-zinc-900">
        <Modal/>
        <div className={`flex text-white justify-center absolute top-0 transition-all ${toggleSideBar} h-screen bg-zinc-800 w-screen z-10 font-bold items-center pt-2 flex-col`}>

          <InputTask/>   
        </div>
        <hr className="border-zinc-600" />
        <div className="h-auto overflow-y-scroll overflow-x-hidden  w-full py-2 flex justify-center">
          <Tasks/>       
        </div>
      </div>
    </todoContext.Provider>
  )
}
