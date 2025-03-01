import React from "react";

const Container: React.FC<{
  children?: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <>
      <div
        className={`md:w-[calc(100%-200px)] w-[calc(100%-100px)] mx-auto ${className}`}
      >
        {children}
      </div>
    </>
  );
};

export default Container;
