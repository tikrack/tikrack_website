const Add = () => {
  return (
    <>
      <button
        className={
          "h-[45px] w-[45px] rounded-[12px] cursor-pointer bg-black flex justify-center items-center"
        }
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={"w-[15px]"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#CCCCCC"
            strokeWidth="0.096"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M4 12H20M12 4V20"
              stroke="#ffffff"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      </button>
    </>
  );
};

export default Add;
