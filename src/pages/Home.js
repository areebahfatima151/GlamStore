import React from "react";
import { Link } from "react-router-dom";

import bgImage from "../asserts/bg1.jpg"; 



export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        position: "relative",
        color: "white",
      }}
    >
      {/* Overlay to make text more readable */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      />

      {/* Intro content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "20px" }}>
          Welcome to GlamStore
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", marginBottom: "30px" }}>
          Discover premium perfumes, luxurious haircare, and the latest makeup essentials.  
          Your beauty journey starts here.<br></br>Perfumes have 20% Dicount.
        </p>
        <Link
          to="/perfumes"
          style={{
            backgroundColor: "#e75480",
            color: "white",
            padding: "12px 24px",
            borderRadius: "30px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1rem",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#d63b68")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#e75480")}
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}