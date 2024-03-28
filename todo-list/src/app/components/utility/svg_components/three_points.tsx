function Points({ 
  fill,
  height = "h-[29px]",
  width = "h-[29px]"
}) {
    return (
      <svg
        viewBox="0 0 29 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${fill} ${height} ${width}`}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.008 14.5a2.175 2.175 0 11-4.35 0 2.175 2.175 0 014.35 0zm9.667 0a2.175 2.175 0 11-4.35 0 2.175 2.175 0 014.35 0zm7.492 2.175a2.175 2.175 0 100-4.35 2.175 2.175 0 000 4.35z"
          fill="#B371D1"
        />
      </svg>
    )
  }
  
  export default Points;