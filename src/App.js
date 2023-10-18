import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SectionA from "./components/SectionA";
import SectionB from "./components/SectionB";
import SectionC from "./components/SectionC";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SectionA />} />
        <Route path="/sectionb" element={<SectionB />} />
        <Route path="/sectionc" element={<SectionC />} />
      </Routes>
    </Router>
  );
}

export default App;
