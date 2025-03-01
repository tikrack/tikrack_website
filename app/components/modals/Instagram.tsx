import React, { useEffect, useState } from "react";

const Instagram: React.FC<{
  show: boolean;
}> = ({ show }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(show);
  }, [show]);

  return (
    <>
      <div
        className={`h-[90vh] shadow-mid w-[350px] ${open ? "left-[3vw]" : "left-[-100%]"} shadow-rose-600 fixed top-1/2 -translate-y-1/2 bg-white  rounded-[20px] border-2 transition-all duration-300 border-rose-300`}
      ></div>
    </>
  );
};

export default Instagram;
