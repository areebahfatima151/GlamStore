import React from "react";
import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import l1 from "./l1.png";
import l2 from "./l4.png";
import l3 from "./l5.png";
import l4 from "./l2.png";
const Lipstick = [
  {
    id: 1,
    name: "SheGlam Lipstick",
    price: "Rs. 650",
    image: l1,
  },
  {
    id: 2,
    name: "SheGlam LipLiner",
    price: "Rs. 300",
    image: l2,
  },
  {
    id: 3,
    name: "SheGlam Balm",
    price: "Rs. 350",
    image: l3,
  },
  {
    id: 4,
    name: "SheGlam LipGloss",
    price: "Rs. 550",
    image: l4,
  },
];

export default function LipstickGallery() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: "linear-gradient(to right, #f8cdda, #1d2b64)", // ✅ Same as perfume.js
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
        Lip Makeup
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {Lipstick.map((lipstick) => (
          <motion.div
            key={lipstick.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card style={{ width: "18rem", margin: "20px" }} className="shadow-lg">
              <motion.div
                whileHover={{ rotate: 2, scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Card.Img
                  variant="top"
                  src={lipstick.image}
                  alt={lipstick.name}
                  style={{ height: "250px", objectFit: "cover" }}
                />
              </motion.div>
              <Card.Body className="text-center">
                <Card.Title>{lipstick.name}</Card.Title>
                <Card.Text>{lipstick.price}</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}