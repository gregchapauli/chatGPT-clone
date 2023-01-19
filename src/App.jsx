import "./App.css";
import OptionSelection from "./components/OptionSelection";
import { arrayItems } from "./AIOptions";

function App() {
  //console.log(import.meta.env.VITE_Open_AI_Key);
  console.log(arrayItems);

  return (
    <h1 className="App">
      <OptionSelection arrayItems={arrayItems} />
    </h1>
  );
}

export default App;
