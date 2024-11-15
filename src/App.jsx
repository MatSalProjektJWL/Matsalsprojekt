import Heading from "./components/header";
import Scantext from "./components/scantext";

import { atomWithStorage } from "jotai/utils";

export const atoms = atomWithStorage("atoms", {
  day: 0,
  week: 0,
  daycount: 0,
  weekcount: 0,
});

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
