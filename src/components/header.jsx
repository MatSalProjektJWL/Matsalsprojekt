import React, { useState } from "react";

function Heading() {
  const [Dagens, setDagens] = useState("Tomhet");
  const [Amount, setAmount] = useState("Tomhet");
  setInterval(uppdateTime,1000) 
  const now = new Date().toLocaleTimeString();
  const [time,setTime] = useState(now);
  
  function uppdateTime(){
    const newtime = new Date().toLocaleTimeString();
    setTime(newtime)
  }
  
 
  const scan = () => {
    setAmount(Amount + 1);
  };
  return (
    <div className="Dagens">
      <p>Dagens mat: {Dagens}</p>
      <p>Totalt för dagen: {Amount}</p>
      <p>{time}</p>
    </div>
  );
}

export default Heading;
