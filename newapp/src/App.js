import "./App.css";

function App() {
  return (
    <div className="App">
      <Job salary={90000} position="Senior SDE" company="Amazon" />
      <Job salary={80000} position="Junior developer" company="Google" />
      <Job salary={70000} position="QA" company="Microsoft" />
    </div>
  );
}

const Job = (props) => {
  return (
    <div>
      <h1>{props.position}</h1>
      <h2>{props.salary}</h2>
      <h3>{props.company}</h3>
    </div>
  );
};
export default App;
