function Pencil({
  fill,
  height = "h-[36px]",
  width = "h-[36px]" 
}) {
    return (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${fill} ${height} ${width}`}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.449 2.751a1.2 1.2 0 00-1.697 0L8.915 20.588a2.4 2.4 0 00-.509.752l-3.509 8.187a1.2 1.2 0 001.576 1.576l8.187-3.509c.281-.12.536-.293.752-.509L33.249 9.25a1.2 1.2 0 000-1.698l-4.8-4.8zM10.612 22.285L27.6 5.297 30.703 8.4 13.715 25.388l-3.589 1.538-1.052-1.052 1.538-3.589z"
          fill="#B371D1"
        />
      </svg>
    )
  }
  
  export default Pencil;