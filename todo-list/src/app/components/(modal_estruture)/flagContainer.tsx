'use client'
import UnknownSvg from '../utility/svg_components/unknown';
import { FlagComponent } from './flag';
import { useContext } from 'react';
import { TasksContext } from '../utility/tasksContext';

export const ContainerOfFlags = () => {

    const { setVisibility } = useContext(TasksContext);

    return (
        <div className="
            w-full 
            h-fit 
            py-2 
            px-3 
            rounded-md
            flex  
            desktopMini:w-4/5
            flex-col
            items-center  
            dark:bg-[#161319]
            dark:border-[#6C567D]
            border-[#818181]
            border
            gap-3
        ">
            <div className="
                flex 
                justify-between
                w-full 
                px-2
                bg-transparent 
            ">
                <div>
                    Tipos de tarefas:
                </div>
                <div onClick={() => setVisibility(() => true)}>
                    <UnknownSvg/>
                </div>
            </div>
            <div className='
                flex 
                gap-3
                justify-center
                flex-wrap
                w-full 
                h-fit
            '>
                <FlagComponent 
                    BackgroundColor='bg-[#151929]' 
                    BorderColor='border-[#565A7D]'
                    BallColor='bg-[#3197D0]' 
                    typeOfFlag='casa'
                />
                <FlagComponent 
                    BackgroundColor='bg-[#292915]' 
                    BorderColor='border-[#7D7D56]'
                    BallColor='bg-[#CDD031]' 
                    typeOfFlag='estudos'
                />
                <FlagComponent 
                    BackgroundColor='bg-[#162915]' 
                    BorderColor='border-[#627D56]'
                    BallColor='bg-[#77D031]' 
                    typeOfFlag='trabalho'
                />
                <FlagComponent 
                    BackgroundColor='bg-[#3F2E1E]' 
                    BallColor='bg-[#D07E31]' 
                    BorderColor='border-[#CEA88D]'
                    typeOfFlag='rotina'
                />
                <FlagComponent 
                    BackgroundColor='bg-[#40123B]' 
                    BallColor='bg-[#FF0DE7]' 
                    BorderColor='border-[#C18DCE]'
                    typeOfFlag='evento'
                />
                <FlagComponent 
                    BackgroundColor='bg-[#381C1C]' 
                    BallColor='bg-[#D03131]' 
                    BorderColor='border-[#6D3030]'
                    typeOfFlag='urgente'
                />
                <FlagComponent 
                    BackgroundColor='bg-[#1D1F0F]' 
                    BallColor='bg-[#4C642F]' 
                    BorderColor='border-[#53582C]'
                    typeOfFlag='viagem'
                />
                <FlagComponent 
                    BackgroundColor='bg-[#161430]' 
                    BallColor='bg-[#403998]' 
                    BorderColor='border-[#2C3658]'
                    typeOfFlag='academia'
                />
                <FlagComponent 
                    BackgroundColor='bg-[#152F33]' 
                    BallColor='bg-[#33DFD5]' 
                    BorderColor='border-[#3F8185]'
                    typeOfFlag='compras'
                />
                
            </div>
        </div>
    )
}