export const CloseButton = (
  { 
    toggleSideBarFunction,
  }:{toggleSideBarFunction: () => void}) => {
    return (
        <div
        onClick={toggleSideBarFunction}
        className={`self-end relative bottom-3 right-2 w-fit h-fit bg-red-500 p-1 rounded-full`}
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="white"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
      </div>
    )
}