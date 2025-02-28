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
      setAmPm("PM");
    } else {
      setHour(hours);
      setAmPm("AM");
    }
    setMinute(minutes);
    setSeconds(seconds);
  }, []);

  return (
    <>
      <h1>{hour}</h1>
      <span>-</span>
      <h1>{minute}</h1>
      <span>-</span>
      <h1>{seconds}</h1>
      <span>-</span>
      <h1>{ampm}</h1>
    </>
  );
};

export default Time;
