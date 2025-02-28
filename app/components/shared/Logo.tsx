import React from "react";
import { Link } from "react-router";

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <>
      <Link to={"/"}>
        <img
          src="/images/logo.svg"
          alt="tikrack logo"
          loading={"lazy"}
          className={`w-[100px] ${className}`}
        />
      </Link>
    </>
  );
};

export default Logo;
