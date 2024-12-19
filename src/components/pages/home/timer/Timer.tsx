"use client";

import { useEffect, useState } from "react";
import React, { useCallback } from "react";

const deadline = new Date(2024, 11, 23, 0, 0, 0, 0).getTime();

const dateValues = ["days", "hours", "minutes", "seconds"];

const Timer: React.FC = () => {
  const [remainingTime, setRemainingTime] = useState<Array<string>>([
    "--",
    "--",
    "--",
    "--",
  ]);
  const [intervalId, setIntervalId] = useState<ReturnType<
    typeof setInterval
  > | null>(null);

  const getTime = useCallback(
    (deadline: number) => {
      const time = deadline - new Date().getTime();
      if (time < 0) return clearInterval(intervalId!);
      const seconds = time / 1000;
      const days = Math.floor(seconds / 86400);
      const hours = Math.floor((seconds % 86400) / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = Math.floor(seconds % 60);

      const formattedTime = `${days.toString().padStart(2, "0")}:${hours
        .toString()
        .padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
      setRemainingTime(formattedTime.split(":"));
    },
    [intervalId]
  );

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    setIntervalId(interval);
    getTime(deadline);

    return () => clearInterval(interval);

    //eslint-disable-next-line
  }, []);

  return (
    <div
      className={
        "relative flex flex-col flex-nowrap items-center justify-center gap-6 grow max-xl:w-full"
      }
    >
      <div
        className={
          "text-2xl xl:text-3xl fullHD:text-4.5xl font-bold text-center text-classic-red"
        }
      >
        Zeit zum Bestellen und Erhalten vor Weihnachten:
      </div>
      <ul className={"relative flex flex-row flex-nowrap items-center gap-4"}>
        {dateValues.map((value, index) => (
          <li
            key={value}
            className={"relative flex flex-col flex-nowrap items-center gap-3"}
          >
            <div
              className={
                "relative flex items-center justify-center bg-classic-red text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl text-2xl  xl:text-3xl fullHD:text-5xl font-medium"
              }
            >
              <span style={{ opacity: "0" }}>44</span>
              <p
                className={
                  "absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]"
                }
              >
                {remainingTime[index]}
              </p>
            </div>
            <p
              className={
                "font-medium text-xs sm:text-sm xl:text-base fullHD:text-xl text-classic-red"
              }
            >
              {value}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timer;
