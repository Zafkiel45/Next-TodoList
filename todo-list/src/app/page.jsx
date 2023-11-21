'use client'
import { todoContext } from "./components/context"
import { InputTask } from "./components/input"
import { useState } from "react";
import { Tasks } from "./components/task";

export default function Home() {

  const key = 'tasks';
  const [task, setTask] = useState([])
  const [name, setName] = useState('')
  const [control, setControl] = useState(true)
  console.log(task)
  return (
    <todoContext.Provider value={{key, task, setTask, setName, name, control, setControl}}>
      <div className="flex gap-10">
        <div className="bg-zinc-400 w-60 h-screen text-white flex justify-center">
          sideBar
        </div>
        <div className="flex flex-col">
          <InputTask/>   
          <Tasks/>       
        </div>
      </div>
    </todoContext.Provider>
  )
}
