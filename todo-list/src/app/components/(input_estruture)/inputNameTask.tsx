'use client'
// hooks
import { useAtom } from "jotai"
// atoms 
import { inputTaskNameAtom } from "@/app/(atoms)/(input)/input-atoms"

interface TypeOfProps {
    keyEvent: (e:any) => void;
}

export const InputNameTask = ({keyEvent}:TypeOfProps) => {
   
    const [inputTaskNameState, setInputTaskNameState] = useAtom(inputTaskNameAtom);

    return (
        <div className="flex justify-center w-full items-center">
            <input
                type="text"
                value={inputTaskNameState}
                onKeyDown={keyEvent}
                onChange={(e) => setInputTaskNameState(e.target.value)}
                placeholder="Digite um nome..."
                aria-label="inserir o nome da tarefa"
                className={`
                placeholder:text-[#5B5757] 
                placeholder:font-semibold
                dark:placeholder:text-[#BA8AEB] 
                transition-all  focus:border border 
                border-[#818181] 
                dark:border-[#6C567D] 
                placeholder:text-xs 
                w-4/5 shadow-md 
                px-3 
                py-2 
                text-black 
                dark:text-white 
                font-normal 
                rounded-md 
                bg-[#D9D9D9] 
                dark:bg-[#161319]
            `}
            />
      </div>
    )
}