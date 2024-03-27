function SvgComponent({fill}) {
    return (
      <svg
        width={35}
        height={35}
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${fill}`}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.667 6.417a1.167 1.167 0 00-2.334 0v9.916H6.417a1.167 1.167 0 000 2.334h9.916v9.916a1.167 1.167 0 002.334 0v-9.916h9.916a1.167 1.167 0 000-2.334h-9.916V6.417z"
          fill="#B371D1"
        />
      </svg>
    )
  }
  
  export default SvgComponent