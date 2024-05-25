import React, { useEffect, useState } from "react";

interface StopwatchProps {
  setTime: (time: string | null) => void;
}

export const Stopwatch: React.FC<StopwatchProps> = ({ setTime }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 59) {
          setMinutes((prevMinutes) => {
            if (prevMinutes === 59) {
              setHours((prevHours) => prevHours + 1);

              return 0;
            }
            return prevMinutes + 1;
          });
          return 0;
        }

        return prevSeconds + 1;
      });
    }, 1000);
    setTime(
      String(
        `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`
      )
    );
    return () => clearInterval(timer);
  }, [seconds, minutes, hours]);

  const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

  return (
    <div>
      <h1>
        {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
      </h1>
    </div>
  );
};
