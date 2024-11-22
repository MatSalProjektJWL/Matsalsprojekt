import React, { useEffect, useRef, useState } from "react";
import { countAtom } from "../App";
import { useAtom } from "jotai";

function Scantext() {
  const [namn, setNamn] = useState("");
  const [klass, setKlass] = useState("");
  const [Amount, setAmount] = useState(0);
  const [count, setCount] = useAtom(countAtom);
  const [StudentsInList, insertToList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages
  const user = useRef();

  async function getData(id) {
    try {
      const response = await fetch(
        `https://ntifoodpeople.vercel.app/api/users/${id}`
      );
      if (!response.ok) {
        throw new Error("User not found");
      }
      const currenData = await response.json();
      return currenData;
    } catch (error) {
      setErrorMessage("User not found");
      return null;
    }
  }

  async function onChange() {
    if (user.current.value.length >= 7) {
      const hello = await getData(user.current.value.toLowerCase());
      user.current.value = "";
      if (!hello || hello.length === 0) {
        // User not found
        setErrorMessage("Person ej hittat");
      } else {
        const scannedUser = hello[0];
        // Check if user is already in the list using their unique ID
        if (StudentsInList.some((obj) => obj._id === scannedUser._id)) {
          setErrorMessage(`${scannedUser.username} har redan skannat.`);
        } else {
          // Add user to the list and clear any previous error messages
          insertToList([...StudentsInList, scannedUser]);
          setCount(count + 1);
          setErrorMessage(""); // Clear any previous error messages
        }
      }
      user.current.focus();
    }
  }

  useEffect(() => {
    const list = document.getElementById("student_list");
    if (StudentsInList.length) {
      list.scroll({
        top: list.scrollHeight,
        behavior: "smooth",
      });
    }
    user.current.focus();
  }, [StudentsInList]);

  return (
    <div className="container">
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {StudentsInList.length ? (
        <div className="students" id="student_list">
          {StudentsInList.map((element) => {
            // Determine highlight color based on the name "Josef Matti"
            let highlightColor = "";
            let font = "";
            let bg = "";
            let long = "";
            if (element.username === "Josef Matti") {
              highlightColor = "gold"; // Highlight for the specific name "Josef Matti"
              font = "Times New Roman";
              bg = "linear-gradient(to right, pink,black,pink)";
              long = "90%";
            } else if (element.teacher) {
              highlightColor = "blue"; // Highlight for teachers
            }

            // Logging for debugging purposes
            console.log(
              `Rendering ${element.username} with ID: ${element._id}`
            );

            return (
              <div className="person" key={element._id}>
                <h2
                  style={{
                    color: highlightColor,
                    fontFamily: font,
                    backgroundImage: bg,
                    width: long,
                    textAlign: "center",
                  }}
                >
                  {element.username}
                </h2>
                <div className="hr"></div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="students">
          <p>Ingen har skannat</p>
        </div>
      )}
      <div>
        <input
          autoFocus
          onChange={onChange}
          style={{ opacity: 0 }}
          type="text"
          max={10}
          ref={user}
        />
      </div>
    </div>
  );
}

export default Scantext;
