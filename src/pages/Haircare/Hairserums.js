import React from "react";
import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import img1 from "./se1.png";
import img2 from "./se5.png";
import img3 from "./h1.png";
import img4 from "./se4.png";

const serums = [
  {
    id: 1,
    name: "L'Oréal Paris (Extraordinary Oil, Smooth Intense)",
    price: "Rs.400",
    image: img1,
  },
  {
    id: 2,
    name: "Livon (Silky Potion, Damage Protect Serum)",
    price: "Rs.500",
    image: img2,
  },
  {
    id: 3,
    name: "Streax (Vitalized Hair Serum, Glossy Shine)",
    price: "Rs.300",
    image: img3,
  },
    {
    id: 4,
    name: "Kerastase (Elixir Ultime, Resistance)",
    price: "Rs.600",
    image: img4,
  },
];

export default function SerumGallery() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: "linear-gradient(to right, #f8cdda, #1d2b64)", // ✅ same as perfumes
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "20px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        Hair Serums
      </h1>

      {/* Product Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {serums.map((serum) => (
          <motion.div
            key={serum.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card style={{ width: "18rem", margin: "20px" }} className="shadow-lg">
              <motion.div whileHover={{ rotate: 2, scale: 1.03 }} transition={{ duration: 0.3 }}>
                <Card.Img
                  variant="top"
                  src={serum.image}
                  alt={serum.name}
                  style={{ height: "250px", objectFit: "cover" }}
                />
              </motion.div>
              <Card.Body className="text-center">
                <Card.Title>{serum.name}</Card.Title>
                <Card.Text>{serum.price}</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}