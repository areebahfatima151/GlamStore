import React from "react";
import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import img1 from "./ee1.png";
import img2 from "./ee2.png";
import img3 from "./ee3.png";
import img4 from "./ee4.png";
const eyeMakeup = [
  {
    id: 1,
    name: "Huda Beauty Eye-Liner",
    price: "Rs.400",
    image: img1,
  },
  {
    id: 2,
    name: "Huda Beauty Mascara",
    price: "Rs.700",
    image: img2,
  },
  {
    id: 3,
    name: "Maybelline NewYork Kajal",
    price: "Rs.200",
    image: img3,
  },
  {
    id: 4,
    name: "Maybelline NewYork- Mini Palette",
    price: "Rs.350",
    image: img4,
  },

];

export default function EyeMakeupGallery() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: "linear-gradient(to right, #ff9a9e, #fad0c4)", // ✅ Gradient bg
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
        Eye Makeup
      </h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        {eyeMakeup.map((item) => (
          <motion.div
            key={item.id}
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
                  src={item.image}
                  alt={item.name}
                  style={{ height: "250px", objectFit: "cover" }}
                />
              </motion.div>
              <Card.Body className="text-center">
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.price}</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}