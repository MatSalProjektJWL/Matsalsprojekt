import Heading from "./components/header";
import Scantext from "./components/scantext";
import { atom } from "jotai";
export const countAtom = atom(0);

function App() {
  return (
    <>
      <div className="App">
        <Heading />
        <Scantext />
      </div>
    </>
  );
}

export default App;
