const Aside = () => {
  return (
    <>
      <div
        className={
          "fixed top-[50px] right-[28px] flex flex-col gap-[15px] w-[50px]"
        }
      >
        <a
          href="https://google.com"
          className={
            "w-[50px] h-[50px] group hover:shadow-big transition-all duration-300 hover:shadow-rose-600 hover:bg-rose-600 flex justify-center items-center border rounded-full border-gray-400"
          }
        >
          <svg
            viewBox="0 0 24 24"
            className={"transition-all duration-300 w-[31px]"}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={
                  "group-hover:stroke-white transition-all duration-300"
                }
              ></path>
              <path
                d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
                stroke="#000000"
                className={
                  "group-hover:stroke-white transition-all duration-300"
                }
                strokeWidth="1.5"
              ></path>
              <path
                d="M17.5 6.51L17.51 6.49889"
                stroke="#000000"
                strokeWidth="1.5"
                className={
                  "group-hover:stroke-white transition-all duration-300"
                }
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </a>
        <a
          href="https://google.com"
          className={
            "w-[50px] h-[50px] group hover:bg-[#24A1DE] hover:shadow-sky-600 hover:shadow-big hover:border-[#24A1DE] flex transition-all duration-300 justify-center items-center border rounded-full border-gray-400"
          }
        >
          <svg
            viewBox="0 0 192 192"
            className={"w-[30px]"}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                stroke="#000000"
                className={
                  "group-hover:stroke-white transition-all duration-300"
                }
                strokeWidth="12"
                d="M23.073 88.132s65.458-26.782 88.16-36.212c8.702-3.772 38.215-15.843 38.215-15.843s13.621-5.28 12.486 7.544c-.379 5.281-3.406 23.764-6.433 43.756-4.54 28.291-9.459 59.221-9.459 59.221s-.756 8.676-7.188 10.185c-6.433 1.509-17.027-5.281-18.919-6.79-1.513-1.132-28.377-18.106-38.214-26.404-2.649-2.263-5.676-6.79.378-12.071 13.621-12.447 29.891-27.913 39.728-37.72 4.54-4.527 9.081-15.089-9.837-2.264-26.864 18.483-53.35 35.835-53.35 35.835s-6.053 3.772-17.404.377c-11.351-3.395-24.594-7.921-24.594-7.921s-9.08-5.659 6.433-11.693Z"
              ></path>
            </g>
          </svg>
        </a>
      </div>
    </>
  );
};

export default Aside;
