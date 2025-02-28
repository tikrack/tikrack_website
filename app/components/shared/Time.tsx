import { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    fetch("https://api.keybit.ir/time/").then((r) => {
      // @ts-ignore
      return setTime(r);
    });

    if (time) {
      console.log("ok");
    }
  }, [time]);
  return <></>;
};

export default Time;
