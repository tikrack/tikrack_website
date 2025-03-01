import Social from "~/components/shared/Social";
import React from "react";

const Aside = () => {
  return (
    <>
      <div
        className={
          "fixed top-[100px] right-[28px] flex flex-col gap-[15px] w-[50px]"
        }
      >
        <Social name={"instagram"} />
        <Social name={"telegram"} />
        <Social name={"github"} />
      </div>
    </>
  );
};

export default Aside;
