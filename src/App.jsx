import "./App.css";
import OptionSelection from "./components/OptionSelection";
import Translation from "./components/Translation";
import { arrayItems } from "./AIOptions";
import { useState } from "react";

function App() {
  const [option, setOption] = useState({});
  const [input, setInput] = useState("");
  //console.log(import.meta.env.VITE_Open_AI_Key);
  const selectOption = (option) => {
    setOption(option);
  };
  const doStuff = () => {
    setOption({ ...option, prompt: input });
  };
  console.log(option);
  return (
    <h1 className="App">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation doStuff={doStuff} setInput={setInput} />
      )}
    </h1>
  );
}

export default App;
