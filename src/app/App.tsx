import React from "react";
// import { useEffect, useState } from "react";

// Styling & Components
// import "./App.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

// Main Pages
// import Home from "./routes/HomePage";
// import NLA from "./routes/NLAPage";
// import FAQs from "./routes/FAQsPage";
// import Guides from "./routes/guides/GuidesPage";
// import Destinations from "./routes/destinations/DestinationsPage";

// // Destination Pages
// import Primordia from "./routes/destinations/PrimordiaPage";
// import Noctilum from "./routes/destinations/NoctilumPage";
// import Oblivia from "./routes/destinations/ObliviaPage";
// import Sylvalum from "./routes/destinations/SylvalumPage";
// import Cauldros from "./routes/destinations/CauldrosPage";

// Guides Pages

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NLA" element={<NLA />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/destinations/primordia" element={<Primordia />} />
        <Route path="/destinations/noctilum" element={<Noctilum />} />
        <Route path="/destinations/oblivia" element={<Oblivia />} />
        <Route path="/destinations/sylvalum" element={<Sylvalum />} />
        <Route path="/destinations/cauldros" element={<Cauldros />} />
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
