import React, { useEffect, useState } from "react";
import Scantext from "./scantext";
import { countAtom } from "../App";
import { useAtom } from "jotai";
import WeekCounter from "./weekcounter";
function Heading() {
  const [Dagens, setDagens] = useState("Tomhet");
  setInterval(uppdateTime, 1000);
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  async function getFoodData(id) {
    const foodData = await fetch(
      `https://ntifoodpeople.vercel.app/api/food/day`
    );
    const currenFoodData = await foodData.json();
    return currenFoodData;
  }

  function uppdateTime() {
    const newtime = new Date().toLocaleTimeString();
    setTime(newtime);
  }
  useEffect(() => {
    const melker = async () => {
      const dagens = await getFoodData();
      setDagens(dagens.items[0].description);
    };
    melker();
  }, []);

  return (
    <div className="Dagens">
      <div>
        Dagens mat: <p dangerouslySetInnerHTML={{ __html: Dagens }}></p>
      </div>
      <div>
        <p>{time}</p>
      </div>
      <WeekCounter />
    </div>
  );
}

export default Heading;
