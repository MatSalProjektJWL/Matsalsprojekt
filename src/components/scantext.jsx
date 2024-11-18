import React, { useEffect, useRef, useState } from "react";
import { useAtom } from "jotai";
import { atoms } from "../App";

function Scantext() {
  const [allatoms, setatoms] = useAtom(atoms);

  const [StudentsInList, insertToList] = useState([]);
  const user = useRef();

  async function getData(id) {
    const data = await fetch(
      `https://ntifoodpeople.vercel.app/api/users/${id}`
    );
    const currenData = await data.json();
    return currenData;
  }
  async function onChange() {
    if (user.current.value.length >= 8) {
      const hello = await getData(user.current.value.toLowerCase());
      user.current.value = "";
      console.log(hello[0]);
      if (StudentsInList.some((obj) => obj._id === hello[0]._id)) {
      } else {
        insertToList([...StudentsInList, hello[0]]);
        setatoms({
          ...allatoms,
          weekcount: allatoms.weekcount + 1,
          daycount: allatoms.daycount + 1,
        });
      }
      user.current.focus();
    }
  }

  useEffect(() => {
    user.current.focus();
  }, []);

  return (
    <div className="people">
      {StudentsInList.map((element) => {
        return <h2 key={element._id}>{element.username}</h2>;
      })}
      <input
        autoFocus
        onChange={onChange}
        style={{ opacity: 0 }}
        type="text"
        ref={user}
      />
    </div>
  );
}

export default Scantext;
