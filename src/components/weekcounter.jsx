import React, { useEffect, useState } from "react";
import Scantext from "./scantext";
import { atoms } from "../App";
import { useAtom } from "jotai";
function WeekCounter() {
  const [allatoms, setatoms] = useAtom(atoms);



  const getweek = () => {
    const today = new Date();
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const dayOfYear = (today - firstDayOfYear + 86400000) / 86400000;
    const week = Math.floor(dayOfYear / 7);
    return week;
  };
  const getDay = () => {
    const currentday = new Date();
    return currentday;
  };
  useEffect(() => {
    if (atoms.week === getweek()) {
    } else {
      setatoms({ ...allatoms, week: getweek() });
      setatoms({ ...allatoms, weekcount: 0 });
    }
    if (atoms.day == getDay()) {
    } else {
      setatoms({ ...allatoms, day: getDay() });
      setatoms({ ...allatoms, daycount: 0 });
    }
  }, []);

  return (
    <>
      <div>Total mängd scanningar denna vecka:{allatoms.weekcount}</div>
      <div>Total mängd scanningar idag:{allatoms.daycount}</div>
    </>
  );
}

export default WeekCounter;
