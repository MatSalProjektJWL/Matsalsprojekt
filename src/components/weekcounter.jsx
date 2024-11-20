import React, { useEffect, useState } from "react";
import Scantext from "./scantext";
import { WeekAtom, DayAtom, DayCountAtom, WeekCountAtom,ScannedAtom } from "../App";
import { useAtom } from "jotai";
function WeekCounter() {
  const [weekCount, setWeekCount] = useAtom(WeekCountAtom);
  const [dayCount, setDayCount] = useAtom(DayCountAtom);
  const [day, setDay] = useAtom(DayAtom);
  const [week, setWeek] = useAtom(WeekAtom);

  const getweek = () => {
    const today = new Date();
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const dayOfYear = (today - firstDayOfYear + 86400000) / 86400000;
    const week = Math.floor(dayOfYear / 7);
    return week;
  };
  const getDay = () => {
    const today = new Date();
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const dayOfYear = Math.floor(
      (today - firstDayOfYear + 86400000) / 86400000
    );

    return dayOfYear;
  };
  useEffect(() => {
    const currentWeek = getweek();
    const currentDay = getDay();

    if (day != currentDay) {
      console.log("Cureent day: ", day === currentDay);
      if (week != currentWeek) {
        console.log("Cureent week: ", week === currentWeek);
        setDay(currentDay);
        setWeek(currentWeek);
        setDayCount(0);
        setWeekCount(0);
      }
      if (week === currentWeek) {
        setDay(currentDay);
        setDayCount(0);
      }
    }
  }, []);

  return (
    <>
      <div>Total mängd scanningar idag:{dayCount}</div>
      <div>Total mängd scanningar denna vecka:{weekCount}</div>
    </>
  );
}

export default WeekCounter;
