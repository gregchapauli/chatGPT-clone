import "./App.css";
import OptionSelection from "./components/OptionSelection";
import { arrayItems } from "./AIOptions";

function App() {
  //console.log(import.meta.env.VITE_Open_AI_Key);
  const selectOption = (option) => {
    console.log(option);
  };

  return (
    <h1 className="App">
      <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
    </h1>
  );
}

export default App;
