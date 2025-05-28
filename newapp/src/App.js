import { useState } from "react";
import "./App.css";

function App() {
  let [changeNumber, setChangeNumber] = useState(0);
  const increaseNumber = () => {
    setChangeNumber(changeNumber + 1);
  };
  const decreaseNumber = () => {
    setChangeNumber(changeNumber - 1);
  };
  const setToZero = () => {
    setChangeNumber(0);
  };
  return (
    <div className="App">
      <button onClick={increaseNumber}>Increase</button>
      <button onClick={decreaseNumber}>Decrease</button>
      <button onClick={setToZero}>Set to Zero</button>
      {changeNumber}
    </div>
  );
}
export default App;
