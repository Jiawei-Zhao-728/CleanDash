import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home"; // Adjust the path if needed

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route for the Home screen */}
        <Route path="/" element={<Home />} />
        {/* Add more routes for other pages as needed */}
      </Routes>
    </Router>
  );
}

export default App;