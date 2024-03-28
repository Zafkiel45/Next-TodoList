import SearchSvg from "../utility/svg_components/search";
import FilterSvg from "../utility/svg_components/filter";

export const ButtonsOfTasks = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-2 items-center h-fit py-4">
        <div
          className="
            dark:text-[#BA8AEB] 
            border
            dark:border-[#6C567D] 
            border-[#818181]
            dark:bg-[#161319]
            bg-[#F8F8F8]
            w-4/5
            p-2
            rounded-md
            cursor-pointer
            flex
            justify-between"
          >
          <div>pesquise por algo</div>
          <div>
            <SearchSvg />
          </div>
        </div>
        <div
          className="
          dark:text-[#BA8AEB] 
            border
            dark:border-[#6C567D] 
            border-[#818181]
            dark:bg-[#161319]
            bg-[#F8F8F8]
            w-4/5
            p-2
            rounded-md
            cursor-pointer
            flex
            justify-between
          ">
          <div>filter tarefas</div>
          <div>
            <FilterSvg />
          </div>
        </div>
      </div>
    </>
  );
};
