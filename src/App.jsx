import Heading from "./components/header";
import Scantext from "./components/scantext";

import { atomWithStorage } from "jotai/utils";

export const DayAtom = atomWithStorage(
  "DayAtom",
  localStorage.getItem("DayAtom") || 1000
);
export const WeekAtom = atomWithStorage(
  "WeekAtom",
  localStorage.getItem("WeekAtom") || 1000
);
export const DayCountAtom = atomWithStorage(
  "DayCountAtom",
  localStorage.getItem("DayCountAtom") || 0
);
export const WeekCountAtom = atomWithStorage(
  "WeekCountAtom",
  localStorage.getItem("WeekCountAtom") || 0
);


function App() {
  return (
    <>
      <div className="App">
        <Heading />
        <Scantext />
      </div>
      ;
    </>
  );
}

export default App;
