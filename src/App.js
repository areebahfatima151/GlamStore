import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/Home.js";
import Perfumes from "./pages/Fragrance/Perfumes.js";
import Hairserum from "./pages/Haircare/Hairserums.js";
import Shampoo from "./pages/Haircare/Shampoo.js";
import Eyemakeup from "./pages/Makeup/Eyemakeup.js";
import Facebase from "./pages/Makeup/Facebase.js";
import Lipstick from "./pages/Makeup/Lipstick.js";
import Powders from "./pages/Makeup/Powders.js";


import dana from "./asserts/Dana.jpeg";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // Pages data (for search)
  const pages = [
    { name: "Home", path: "/" },
    { name: "Perfumes", path: "/perfumes" },
    { name: "HairSerum", path: "/hairserum" },
    { name: "Shampoo", path: "/shampoo" },
    { name: "Eye Makeup", path: "/eyemakeup" },
    { name: "Face base", path: "/facebase" },
    { name: "Lip Makeup", path: "/lipstick" },
    { name: "Radiance Collection", path: "/powders" },
    
    
  ];

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    const result = pages.find((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    if (result) {
      navigate(result.path); // go to matching page
      setQuery(""); // reset input
      setMenuOpen(false);
    } else {
      alert("No matching page found!");
    }
  };

  return (
    <div>
      <nav
        style={{
          padding: "20px",
          fontSize: "large",
          background: "#918c8cff",
          display: "flex",
          margin: "12px",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {/* Left side: logo image */}
        <img
          src={dana}
          alt="Dana"
          style={{ height: "40px", width: "40px", objectFit: "cover" }}
        />

        {/* Center: Search bar */}
        <form onSubmit={handleSearch} style={{ flex: 1, marginLeft: "20px" }}>
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "6px 10px",
              borderRadius: "4px",
              border: "none",
              outline: "none",
            }}
          />
        </form>

        {/* Right side: menu icon */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            cursor: "pointer",
            width: "25px",
            height: "25px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginLeft: "20px",
            padding: "3px",
          }}
          aria-label="Toggle menu"
        >
          <span style={{ display: "block", height: "3px", backgroundColor: "white", borderRadius: "2px" }} />
          <span style={{ display: "block", height: "3px", backgroundColor: "white", borderRadius: "2px" }} />
          <span style={{ display: "block", height: "3px", backgroundColor: "white", borderRadius: "2px" }} />
        </div>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div
            style={{
              position: "absolute",
              top: "50px",
              right: "10px",
              backgroundColor: "#918c8cff",
              borderRadius: "4px",
              padding: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              zIndex: 1000,
              display: "flex",
              flexDirection: "column",
              minWidth: "150px",
            }}
          >
            {pages.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                onClick={() => setMenuOpen(false)}
                style={{ margin: "5px 0", color: "white", textDecoration: "none" }}
              >
                {page.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfumes" element={<Perfumes />} />
        <Route path="/hairserum" element={<Hairserum />} />
        <Route path="/shampoo" element={<Shampoo />} />
        <Route path="/eyemakeup" element={<Eyemakeup />} />
        <Route path="/facebase" element={<Facebase />} />
        <Route path="/lipstick" element={<Lipstick />} />
        <Route path="/powders" element={<Powders />} />
        
      </Routes>
    </div>
  );
}

// Wrap with Router in main index.js
export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}