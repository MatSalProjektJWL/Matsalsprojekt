import React, { useEffect, useRef, useState } from "react";
import studentlist from "./studentlist";
import Students from "./studentlist";

function Scantext() {
  const [namn, setNamn] = useState("");
  const [klass, setKlass] = useState("");
  const [Amount, setAmount] = useState(0);
  const melker = useRef();
  function dataConvertion() {
    {
      Students.forEach((element) => {
        if (melker.current.value === element.id) {
          setNamn(element.name);
          return setAmount(Amount + 1);
        }
      });
    }
  }

  useEffect(() => {
    melker.current.focus();
  }, [namn]);

  return (
    <div>
      <input
        autoFocus
        style={{ opacity: 1 }}
        type="text"
        onChange={dataConvertion}
        ref={melker}
      />
    </div>
  );
}

export default Scantext;
