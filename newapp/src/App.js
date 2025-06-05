import "./App.css";
import { useCounter } from "./useCounter";

function App() {
  const { number, increaseValue, decreaseValue, resetVal } = useCounter();
  return (
    <div className="App">
      {number}
      <button onClick={increaseValue}>Increase</button>
      <button onClick={decreaseValue}>Decrease</button>
      <button onClick={resetVal}>Reset</button>
    </div>
  );
}
export default App;
