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
      <div className="flex flex-col gap-4 w-4/5 overflow-hidden h-[90vh] py-5 rounded-lg shadow-md bg-zinc-800">
        <div className="flex flex-col">
          <InputTask/>   
        </div>
        <hr className="border-zinc-600" />
        <div className="h-full w-full pb-[8.5rem] flex justify-center">
          <Tasks/>       
        </div>
      </div>
    </todoContext.Provider>
  )
}
