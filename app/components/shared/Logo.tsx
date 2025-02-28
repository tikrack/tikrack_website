import React from "react";

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <>
      <img
        src="/images/logo.svg"
        alt="tikrack logo"
        loading={"lazy"}
        className={`w-[100px] ${className}`}
      />
    </>
  );
};

export default Logo;
