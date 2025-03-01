import Social from "~/components/shared/Social";
import Instagram from "~/components/modals/Instagram";
import React, { useState } from "react";

const Aside = () => {
  const [instagram, setInstagram] = useState(false);

  return (
    <>
      <div
        className={
          "fixed top-[100px] right-[28px] flex flex-col gap-[15px] w-[50px]"
        }
      >
        <Social
          name={"instagram"}
          hover={() => {
            setInstagram(true);
          }}
          closeHover={() => {
            setInstagram(false);
          }}
        />
        <Social name={"telegram"} />
        <Social name={"github"} />
      </div>
      <Instagram show={instagram} />
    </>
  );
};

export default Aside;
