import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/home/home";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Track sidebar state

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <Home sidebarOpen={sidebarOpen} />
      </div>
    </Router>
  );
}

export default App;