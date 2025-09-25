import React from "react";
import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import l6 from "./l6.png";
import l7 from "./l7.png";
import l8 from "./l8.png";
import l9 from "./l9.png";
const Powders = [
  {
    id: 1,
    name: "M.A.C Compact Powder",
    price: "Rs. 600",
    image: l6,
  },
  {
    id: 2,
    name: "M.A.C Blush",
    price: "Rs. 750",
    image: l7,
  },
  {
    id: 3,
    name: "Highlighter",
    price: "Rs. 550",
    image: l8,
  },
  {
    id: 4,
    name: "Bronzer",
    price: "Rs. 500",
    image: l9,
  },
];

export default function PowdersGallery() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: "linear-gradient(to right, #f8cdda, #1d2b64)", // ✅ Same as Perfumes
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "20px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        Radiance Collection
      </h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        {Powders.map((powder) => (
          <motion.div
            key={powder.id}
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
                  src={powder.image}
                  alt={powder.name}
                  style={{ height: "250px", objectFit: "cover" }}
                />
              </motion.div>
              <Card.Body className="text-center">
                <Card.Title>{powder.name}</Card.Title>
                <Card.Text>{powder.price}</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}