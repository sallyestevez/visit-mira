import React from "react";

// import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Styling & Components
import "./App.css";

// Main Pages
import Home from "./pages/Home";
import Primordia from "./pages/Primordia";
import Noctilum from "./pages/Noctilum";
import Oblivia from "./pages/Oblivia";
import Sylvalum from "./pages/Sylvalum";
import Cauldros from "./pages/Cauldros";

function App() {
  const router = createBrowserRouter([
    {
      // home page
      path: "/",
      element: <Home />,
    },
    {
      // Primordia page
      path: "/primordia",
      element: <Primordia />,
    },
    {
      // Noctilum page
      path: "/noctilum",
      element: <Noctilum />,
    },
    {
      // Oblivia page
      path: "/oblivia",
      element: <Oblivia />,
    },
    {
      // Sylvalum page
      path: "/sylvalum",
      element: <Sylvalum />,
    },
    {
      // Cauldros page
      path: "/cauldros",
      element: <Cauldros />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
