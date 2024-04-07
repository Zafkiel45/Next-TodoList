'use client'
import SearchSvg from "../utility/svg_components/search";
import FilterSvg from "../utility/svg_components/filter";
import { useContext } from "react";
import { TasksContext } from "../utility/tasksContext";

export const ButtonsOfTasks = () => {

  const { setActiveSearch, setActiveFilter } = useContext(TasksContext)

  return (
    <>
      <div className="
        w-full 
        flex 
        flex-col 
        gap-2 
        items-center 
        h-fit 
        py-4
        tablet:w-[60%]
      ">
        <div
          onClick={() => setActiveSearch(true)}
          className="
            dark:text-[#BA8AEB] 
            border
            dark:border-[#6C567D] 
            border-[#818181]
            text-[#5B5757]
            dark:bg-[#161319]
            bg-[#F8F8F8]
            w-4/5
            p-2
            rounded-md
            cursor-pointer
            flex
            justify-between"
            aria-label="botão para pesquisar tarefas"
          >
          <div>pesquise por algo</div>
          <div>
            <SearchSvg />
          </div>
        </div>
        <div
          onClick={() => setActiveFilter(true)}
          className="
          dark:text-[#BA8AEB] 
            border
            dark:border-[#6C567D] 
            border-[#818181]
            dark:bg-[#161319]
            text-[#5B5757]
            bg-[#F8F8F8]
            w-4/5
            p-2
            rounded-md
            cursor-pointer
            flex
            justify-between
          "
          aria-label="botão para filtrar tarefas"
          >
          <div>filter tarefas</div>
          <div>
            <FilterSvg />
          </div>
        </div>
      </div>
    </>
  );
};
