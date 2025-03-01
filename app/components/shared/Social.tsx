import React from "react";

const Social: React.FC<{ name: string }> = ({ name }) => {
  const icon = () => {
    switch (name) {
      case "instagram":
        return instagram();
      case "telegram":
        return telegram();
      default:
        return <>T</>;
    }
  };

  return (
    <>
      <a
        href="https://google.com"
        className={`w-[50px] h-[50px] group hover:shadow-big transition-all duration-300 flex justify-center items-center border rounded-full border-gray-300 
        ${name === "instagram" && "hover:shadow-rose-600 hover:bg-rose-600"} 
        ${name === "telegram" && "hover:shadow-sky-600 hover:bg-sky-600"}`}
      >
        {icon()}
      </a>
    </>
  );
};

const instagram = () => {
  return (
    <>
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
            className={"group-hover:stroke-white transition-all duration-300"}
          ></path>
          <path
            d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
            stroke="#000000"
            className={"group-hover:stroke-white transition-all duration-300"}
            strokeWidth="1.5"
          ></path>
          <path
            d="M17.5 6.51L17.51 6.49889"
            stroke="#000000"
            strokeWidth="1.5"
            className={"group-hover:stroke-white transition-all duration-300"}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </svg>
    </>
  );
};

const telegram = () => {
  return (
    <>
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
            className={"group-hover:stroke-white transition-all duration-300"}
          ></path>
          <path
            d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
            stroke="#000000"
            className={"group-hover:stroke-white transition-all duration-300"}
            strokeWidth="1.5"
          ></path>
          <path
            d="M17.5 6.51L17.51 6.49889"
            stroke="#000000"
            strokeWidth="1.5"
            className={"group-hover:stroke-white transition-all duration-300"}
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </svg>
    </>
  );
};

export default Social;
