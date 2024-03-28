'use client'
import {useEffect, useState} from "react";
import MoonSvg from '../utility/svg_components/moon';
import SunSvg from '../utility/svg_components/sun';

export const SwitchModeButton = () => {

  const [currentState, setCurrentState] = useState('')

  useEffect(() => {
      try {
          if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
              document.documentElement.classList.remove('light');
              localStorage.ThemeStorage = 'dark'
              document.documentElement.classList.add(localStorage.ThemeStorage);
          } else {
              document.documentElement.classList.remove('dark');
              localStorage.ThemeStorage= 'light'
              document.documentElement.classList.add(localStorage.ThemeStorage);
          }

      } catch(menssage) {
          console.log(`Erro ao definir tema: ${menssage}`);
      }
  },[]) 

  const toggleTheme = () => {
      try {
          const newCurrentMode = localStorage.ThemeStorage === 'dark' ? 'light':'dark'
          localStorage.ThemeStorage = newCurrentMode;

          if(newCurrentMode === 'dark') {
              document.documentElement.classList.remove('light');
              setCurrentState('dark')
              document.documentElement.classList.add(localStorage.ThemeStorage);
          } else {
              document.documentElement.classList.remove('dark');
              setCurrentState('light')
              document.documentElement.classList.add(localStorage.ThemeStorage);
          }

      } catch (menssage) {
          console.log(`Erro ao trocar o tema: ${menssage}`);
      }
  }

  return (
    <div className="w-full flex justify-center items-center h-fit">
      <button 
        onClick={toggleTheme} 
        aria-label="botão para trocar entre modo claro e escuro"
        className={`
          border 
          group 
          py-3
          flex 
          bg-[#D2BC6D]
          border-[#8a8532]
          dark:bg-[#161C24]
          dark:border-[#85A8D8]
          transition-all 
          items-center 
          justify-center 
          rounded-md 
          shadow-sm 
          w-4/5`}>
          {
            currentState === 'dark' ? 
              <MoonSvg/> 
              : 
              <SunSvg/>
          }
      </button>
    </div>
  );
};
