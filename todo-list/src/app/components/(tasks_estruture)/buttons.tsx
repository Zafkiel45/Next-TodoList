'use client'
import SearchSvg from "../utility/svg_components/search";
import FilterSvg from "../utility/svg_components/filter";
// hooks
import { useSetAtom } from "jotai";
// atoms 
import { 
  inputSearchTasksModalAtom,
  inputFilterTasksModalAtom 
} from "@/app/(atoms)/(tasks)/tasks-atoms";


export const ButtonsOfTasks = () => {

  const setInputSearchModalState = useSetAtom(inputSearchTasksModalAtom);
  const setInputFilterModalState = useSetAtom(inputFilterTasksModalAtom);

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
        desktopBig:w-[70%]
      ">
        <div
          onClick={() => setInputSearchModalState(true)}
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
            desktop:w-[72%]
            
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
          onClick={() => setInputFilterModalState(true)}
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
            desktop:w-[72%]
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
