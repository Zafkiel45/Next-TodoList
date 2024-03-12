export const AddButton = ({setElementStorage}:{setElementStorage: () => Promise<void>}) => {
    return (
        <div className="flex justify-center w-full items-center">
            <button
                onClick={setElementStorage}
                className="bg-blue-500 flex items-center justify-center text-white font-medium w-4/5  tablet:px-4 desktop:py-2 desktopMini:px-6 h-fit py-2 px-9 shadow-md rounded-md"
            >   
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="margin-auto bi bi-plus h-7 w-7"
                viewBox="0 0 16 16"
            >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
        </button>
      </div>
    )
}