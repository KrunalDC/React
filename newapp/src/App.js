import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Profile } from "./Pages/Profile";
import { Contact } from "./Pages/Contact";
import { Navbar } from "./Pages/Navbar";
import { createContext, useState } from "react";

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("Krunal Test Code");
  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/profile" element={<Profile></Profile>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="*" element={<h1>Error Page</h1>}></Route>
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}
export default App;
