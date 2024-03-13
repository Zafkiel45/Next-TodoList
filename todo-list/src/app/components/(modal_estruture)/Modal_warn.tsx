import { SetStateAction } from "react";

interface TypeOfProps {
  displayControl: {
    visible: string;
    blur: boolean;
  };
  setDisplayControl: (
    value: SetStateAction<{
      visible: string;
      blur: boolean;
    }>
  ) => void;
  removeTask: () => void;
}

export const ModalWarn = ({
  displayControl,
  setDisplayControl,
  removeTask,
}: TypeOfProps) => {
  return (
    <div
      className={`absolute ${displayControl.visible} text-white flex tablet:left-[15%] gap-4 items-center flex-col p-4  bg-zinc-800 z-10  desktop:w-[45%] desktop:left-[29%] desktopMini:left-[27%] desktopMini:w-[50%] tablet:h-fit tablet:bg-zinc-700 tablet:top-[10%] tablet:rounded-lg tablet:w-[70%] w-full h-full shadow-md`}
    >
      <div className="flex w-full items-center justify-between">
        <button disabled className="w-[16px] opacity-0"></button>
        <h1 className="font-bold">Aviso</h1>
        <svg
          onClick={() =>
            setDisplayControl({
              ...displayControl,
              visible: "hidden",
              blur: false,
            })
          }
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
      </div>
      <p>
        Após excluir uma tarefa não é possível mais recuperá-la. Antes de
        excluir uma terafa tenha certeza de quê realmente deseja fazer isso.
        Caso tenha mudado de ideia, basta apertar o &quot;x&quot;.
      </p>
      <div className="bg-red-400 text-white font-normal border border-red-600 w-full p-4 shadow-md rounded-md">
        A tarefa será excluída e você perderá todas as suas personalizações como
        descrição e prioridade. Tenha em mente que você irá excluir apenas está
        tarefa, e não todas. Caso queria prosseguir com a ação, aperte o botão
        abaixo.
      </div>
      <button
        onClick={removeTask}
        className="font-bold bg-red-500 w-fit h-fit px-4 py-1 shadow-md rounded-lg"
      >
        Excluir
      </button>
    </div>
  );
};
