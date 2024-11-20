import React, { useEffect, useState } from "react";
import Scantext from "./scantext";
import WeekCounter from "./weekcounter";
function Heading() {
  const [Dagens, setDagens] = useState("Tomhet");
  const [time, setTime] = useState();
  setInterval(uppdateTime, 1000);

  async function getFoodData(id) {
    const foodData = await fetch(
      `https://ntifoodpeople.vercel.app/api/food/day`
    );
    const currenFoodData = await foodData.json();
    return currenFoodData;
  }

  function uppdateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    setTime(`${hours}:${minutes}:${seconds}`);
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
      <div className="dagens-section">
        Dagens mat: <p dangerouslySetInnerHTML={{ __html: Dagens }}></p>
      </div>

      <div className="time">
        <p className="clock">{time}</p>
      </div>

      <div className="dagens-section">
        <WeekCounter />
      </div>
    </div>
  );
}

export default Heading;
