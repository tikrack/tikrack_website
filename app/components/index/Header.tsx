import Logo from "~/components/shared/Logo";
import Nav from "~/components/shared/Nav";
import Time from "~/components/shared/Time";
import React from "react";
import Add from "~/components/shared/Add";

const Header = () => {
  return (
    <>
      <header className={"w-full flex justify-between items-center"}>
        {/*Start*/}
        <div className={"flex justify-start items-center basis-1/2 gap-[30px]"}>
          <Logo className={"!w-[45px]"} />
          <Nav />
        </div>
        {/*End*/}
        <div className={"flex justify-end items-center basis-1/2 gap-[20px]"}>
          <Time />
          <Add />
        </div>
      </header>
    </>
  );
};

export default Header;
