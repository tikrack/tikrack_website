const Add = () => {
  return (
    <>
      <button
        className={
          "h-[45px] w-[45px] rounded-[12px] bg-black flex justify-center items-center"
        }
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={"w-[20px]"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#CCCCCC"
            stroke-width="0.096"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M4 12H20M12 4V20"
              stroke="#ffffff"
              stroke-width="2.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
      </button>
    </>
  );
};

export default Add;
