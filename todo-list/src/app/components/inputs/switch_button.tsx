'use client'
import {useEffect} from "react";

export const SwitchModeButton = () => {

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
              document.documentElement.classList.add(localStorage.ThemeStorage);
          } else {
              document.documentElement.classList.remove('dark');
              document.documentElement.classList.add(localStorage.ThemeStorage);
          }

      } catch (menssage) {
          console.log(`Erro ao trocar o tema: ${menssage}`);
      }
  }

  return (
    <div className="w-full flex justify-center items-center h-fit">
      <button onClick={toggleTheme} className={`border border-blue-300 group py-4 flex bg-blue-500 dark:bg-transparent dark:hover:bg-blue-500 transition-all items-center justify-center rounded-md shadow-sm w-4/5`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className={`bi bi-moon-fill fill-white dark:fill-blue-300 dark:group-hover:fill-white`}
          viewBox="0 0 16 16"
        >
          <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
        </svg>
      </button>
    </div>
  );
};
