import { Input } from "./ui/input";
import SearchSVG from "../../public/svg-3.0-version/search-icon";

export function HandleSearchTask() {
    return (
        <div className="w-screen h-fit">
            <div className="relative px-2 rounded-md border-gray-300 border w-3/4  flex gap-2 items-center">
                <Input 
                    type="text" 
                    placeholder="Procure por tarefas..." 
                    className="border-l-0 px-[11%] rounded-md border-none utline-none absolute top-0 left-0 focus:outline-none"
                />
                <div className="relative top-0 left-0 h-[2.5rem] rounded-md px-[0.75rem] py-[0.5rem]">
                    <SearchSVG className="absolute fill-[#111111] top-0 left-0 h-full "/>
                </div>
            </div>
        </div>
    )
}