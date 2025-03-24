import React from "react";
import { Routes, Route } from "react-router-dom";
// import { useEffect, useState } from "react";

// Styling & Components
import "./App.css";
import NavBar from "./components/NavBar";

// Main Pages
import Home from "./routes/Home";
import Primordia from "./routes/Primordia";
import Noctilum from "./routes/Noctilum";
import Oblivia from "./routes/Oblivia";
import Sylvalum from "./routes/Sylvalum";
import Cauldros from "./routes/Cauldros";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/primordia" element={<Primordia />} />
        <Route path="/noctilum" element={<Noctilum />} />
        <Route path="/oblivia" element={<Oblivia />} />
        <Route path="/sylvalum" element={<Sylvalum />} />
        <Route path="/cauldros" element={<Cauldros />} />
      </Routes>
    </div>
  );
}

export default App;
