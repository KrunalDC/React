import { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [displayData, setDisplayData] = useState("");
  const callApi = (url) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${url}/`).then(
      (res) => {
        setDisplayData(res.data[0].excuse);
      }
    );
  };

  return (
    <div className="App">
      <div>
        <h1>Generate An Excuse</h1>
        <button onClick={() => callApi("party")}>Party</button>
        <button onClick={() => callApi("family")}>Family</button>
        <button onClick={() => callApi("office")}>Office</button>
        <p>{displayData}</p>
      </div>
    </div>
  );
}
export default App;
