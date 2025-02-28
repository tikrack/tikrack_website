import React from "react";

const Container: React.FC<{
  children?: React.ReactNode;
  className?: React.ClassAttributes<string>;
}> = ({ children, className }) => {
  return (
    <>
      <div className={`w-[calc(100%-200px)] mx-auto ${className}`}>
        {children}
      </div>
    </>
  );
};

export default Container;
