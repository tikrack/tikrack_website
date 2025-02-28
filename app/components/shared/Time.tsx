import { useEffect, useState } from "react";

const Time = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [ampm, setAmPm] = useState("AM");

  useEffect(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours > 12) {
      setHour(hours - 12);
      setAmPm("pm");
    } else {
      setHour(hours);
      setAmPm("am");
    }
    setMinute(minutes);
    setSeconds(seconds);

    let timeVal = setInterval(() => {
      fetch("https://api.keybit.ir/time/").then((r) => {
        r.json().then((rs) => {
          // @ts-ignore
          setHour(rs.time12.hour.en);
          setMinute(rs.time12.minute.en);
          setSeconds(rs.time12.second.en);
        });
      });
    });

    return () => {
      clearInterval(timeVal);
    };
  }, []);

  return (
    <>
      <div className={"flex flex-col text-[14px]"}>
        <span className={"text-gray-400 text-[15px]"}>Tehran, Iran</span>
        <span
          className={"font-bold"}
        >{`${hour}:${minute}:${seconds} ${ampm}`}</span>
      </div>
    </>
  );
};

export default Time;
