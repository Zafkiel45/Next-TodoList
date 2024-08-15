"use client";
import AskIcon from "../utility/svg_components/unknown";
import CloseButton from "../utility/svg_components/x";
import { TagsOfFilter } from "./tags";
import { UpdateDB } from "../utility/updateDB";
import { TutorialModal } from "../utility/tutorialModal";
// hooks
import { useAtom } from "jotai";
import { useSetAtom } from "jotai";
import { useAtomValue } from "jotai";
// atoms 
import { 
  tasksStateAtom, 
  inputFilterTasksModalAtom, 
  inputFilterTasksTagAtom, 
} from "@/app/(atoms)/(tasks)/tasks-atoms";
import { modalTutorialStateAtom } from "@/app/(atoms)/(modal)/modal-utility-atoms";

export const FilterTasks = () => {
  // update and read functions:
  const [inputFilterModalState, setInputFilterModalState] = useAtom(inputFilterTasksModalAtom);
  // only update:
  const setTasksState = useSetAtom(tasksStateAtom);
  const setModalTutorialState = useSetAtom(modalTutorialStateAtom);
  // only read 
  const inputFilterTag = useAtomValue(inputFilterTasksTagAtom);

  const content = `
  Ao clicar em uma opção, como por exemplo, casa só irá aparecer as tarefas
  que você marcou como case. Isso não quer dizer que as outras tarefas foram
  apagadas, só é uma forma de organiza mais suas tarefas. Supondo que você 
  tenha centenas de tarefas e queira somente encontrar as que são para "viagem",
  esta função ajuda a filtra-las! Para mostrar todas de novo, basta clicar em 
  "tudo".
  `;
  
  const HandleFilter = () => {
    if (inputFilterTag === "") {
      window.alert("erro");
      return;
    }
    const request: IDBOpenDBRequest = indexedDB.open("database");

    request.onsuccess = () => {
      const database: IDBDatabase = request.result;
      const transaction: IDBTransaction = database.transaction("tasks");
      const store: IDBObjectStore = transaction.objectStore("tasks");
      const currentObject = [];

      store.openCursor().onsuccess = (event) => {
        const cursor: IDBCursorWithValue = (event.target as IDBRequest).result;

        if (cursor) {
          if (inputFilterTag !== "tudo") {
            const currentElement = cursor.value.type === inputFilterTag;
            if (currentElement) {
              currentObject.push(cursor.value);
            }
          } else {
            UpdateDB(setTasksState);
            setInputFilterModalState(false);
            return;
          }
          cursor.continue();
        } else {
          setTasksState(currentObject);
        }
      };
    };
    setInputFilterModalState(false);
  };

  return (
    <div
      className={`${
        inputFilterModalState ? "flex" : "hidden"
      } pb-3 top-0 left-0 w-screen h-screen fixed bg-[#F8F8F8] dark:bg-[#121013] z-10`}
    >
      <div
        className={`absolute w-full dark:text-white overflow-auto h-full flex items-center flex-col desktopMini:gap-8 gap-5`}
      >
        <header className="w-full py-2 h-auto">
          <nav className="flex justify-between px-3 items-center">
            <div onClick={() => setModalTutorialState(() => true)}>
              <AskIcon />
            </div>
            <div className="text-lg mobileMini:text-xl font-medium">
              Filte tarefas
            </div>
            <div
              className="cursor-pointer"
              onClick={() => setInputFilterModalState(false)}
            >
              <CloseButton height="h-[22px] w-[22px]" />
            </div>
          </nav>
        </header>
        <main className="flex mobileMini:w-4/5 tablet:w-[60%] desktopMini:w-3/5 desktop:w-2/4 flex-col w-full h-fit px-3 gap-3">
          <div className="flex w-full bg-gray-300 dark:bg-[#121013] py-4 rounded-md border dark:border-[#6C567D] border-[#818181] px-2 mobileMini:px-3 mobileMini:py-5 desktop:px-8 desktopMini:py-6 desktopMini:px-6 desktop:py-8 flex-wrap gap-2">
            <TagsOfFilter
              BackgroundColor={"bg-[#151929]"}
              BallColor={"bg-[#3197D0]"}
              typeOfFlag={"casa"}
            />
            <TagsOfFilter
              BackgroundColor={"bg-[#292915]"}
              BallColor={"bg-[#CDD031]"}
              typeOfFlag={"estudos"}
            />
            <TagsOfFilter
              BackgroundColor={"bg-[#162915]"}
              BallColor={"bg-[#77D031]"}
              typeOfFlag={"trabalho"}
            />
            <TagsOfFilter
              BackgroundColor={"bg-[#3F2E1E]"}
              BallColor={"bg-[#D07E31]"}
              typeOfFlag={"rotina"}
            />
            <TagsOfFilter
              BackgroundColor={"bg-[#40123B]"}
              BallColor={"bg-[#FF0DE7]"}
              typeOfFlag={"evento"}
            />
            <TagsOfFilter
              BackgroundColor={"bg-[#381C1C]"}
              BallColor={"bg-[#D03131]"}
              typeOfFlag={"urgente"}
            />
            <TagsOfFilter
              BackgroundColor={"bg-[#1D1F0F]"}
              BallColor={"bg-[#4C642F]"}
              typeOfFlag={"viagem"}
            />
            <TagsOfFilter
              BackgroundColor={"bg-[#161430]"}
              BallColor={"bg-[#695EFA]"}
              typeOfFlag={"academia"}
            />
            <TagsOfFilter
              BackgroundColor={"bg-[#152F33]"}
              BallColor={"bg-[#33DFD5]"}
              typeOfFlag={"compras"}
            />
            <TagsOfFilter
              BackgroundColor={"bg-[#412F4F] border border-[#6C567D]"}
              BallColor={"bg-[#7F2FBE]"}
              typeOfFlag={"tudo"}
            />
          </div>
          <div
            className={`w-full h-auto flex justify-center items-center mt-5`}
          >
            <button
              onClick={HandleFilter}
              className="dark:bg-[#121013] bg-[#818181] text-white  border-[#5B5757] border dark:border-[#6C567D] w-fit h-fit px-10 py-2 rounded-md shadow-sm cursor-pointer"
            >
              Filtrar!
            </button>
          </div>
          <TutorialModal content={content} />
        </main>
      </div>
    </div>
  );
};
