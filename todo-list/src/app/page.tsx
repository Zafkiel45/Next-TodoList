'use client'
import { todoContext } from "./components/context"
import { useState } from "react";
import { Modal } from "./components/modal";
import { AllElements } from "./components/utility/fatherMode";
import { CloseTasksButton } from "./components/(main_estruture)/closeTasksButton";
import { MainContainerInputs } from "./components/(main_estruture)/mainContainerInputs";
import { MainContainerTasks } from "./components/(main_estruture)/mainContainerTasks";


export default function Home() {

  const key = 'tasks';
  const [task, setTask] = useState([]);
  const [name, setName] = useState('');
  const [title, setTitle] = useState(null);
  const [blur, setBlur] = useState(false);
  const [rename, setRename] = useState('');
  const [descrebe, setDescrebe] = useState('');
  const [indexed, setIndexed] = useState(null);
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
    <AllElements>
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
        title, 
        setTitle,
        indexed,
        setIndexed,
        rename, 
        setRename
      }}>
        <div className="flex">
          <CloseTasksButton toggleSideBarFunctionReverse={toggleSideBarFunctionReverse} />
          <MainContainerInputs toggleSideBar={toggleSideBar} />
          <Modal/>
          <MainContainerTasks blur={blur} />
        </div>
      </todoContext.Provider>
    </AllElements>
  )
}
