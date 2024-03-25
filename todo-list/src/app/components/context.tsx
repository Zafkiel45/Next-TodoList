import { createContext } from "react";

interface SideBar {
    position: string,
    display: string,
}
interface myContextType {
    key: string;
    task: any[];
    name: string;
    blur: boolean;
    descrebe: string;
    sideBar: SideBar;
    title: number | null;
    indexed: number | null;
}
interface setTypeDispatch {
    setTask: React.Dispatch<React.SetStateAction<any[]>>;
    setName: React.Dispatch<React.SetStateAction<string>>;
    setBlur: React.Dispatch<React.SetStateAction<boolean>>;
    setSideBar: React.Dispatch<React.SetStateAction<SideBar>>;
    setDescrebe: React.Dispatch<React.SetStateAction<string>>;
    setTitle: React.Dispatch<React.SetStateAction<number | null>>;
    setIndexed: React.Dispatch<React.SetStateAction<number | null>>
}
interface methodsType extends myContextType, setTypeDispatch{
    toggleSideBarFunction: () => void;
}

export const todoContext = createContext<methodsType | undefined>(undefined);
