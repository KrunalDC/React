import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Menu } from "./Pages/Menu";
import { Contact } from "./Pages/Contact";
import { Navbar } from "./Pages/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/menu" element={<Menu></Menu>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="*" element={<Contact></Contact>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
