import "./App.css";
import { Complanets } from "./Planet";
function App() {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];
  return (
    <div className="App">
      {planets.map((planet, key) => {
        return (
          <Complanets
            key={key}
            name={planet.name}
            isGasPlanet={planet.isGasPlanet}
          />
        );
      })}
    </div>
  );
}
export default App;
