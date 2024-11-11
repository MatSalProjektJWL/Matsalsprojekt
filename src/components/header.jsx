import React, { useState } from "react";
import Scantext from "./scantext";


function Heading() {
  const [Dagens, setDagens] = useState("Tomhet");
  setInterval(uppdateTime,1000) 
  const now = new Date().toLocaleTimeString();
  const [time,setTime] = useState(now);
  
  function uppdateTime(){
    const newtime = new Date().toLocaleTimeString();
    setTime(newtime)
  }
  
 

  return (
    <div className="Dagens">
      <p>Dagens mat: {Dagens}</p>
      <p>{time}</p>
      <p>Totalt för dagen: {Scantext.Amount}</p>
    </div>
  );
}

export default Heading;
