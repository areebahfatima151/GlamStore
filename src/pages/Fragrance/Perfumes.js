import React from "react";
import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import img1 from "./p5.webp";
import img2 from "./p6.webp";
import img3 from "./p7.webp";
import img4 from "./p8.png";

const perfumes = [
  {
    id: 1,
    name: "Dior Sauvage",
    price: "Rs.1500",
    image: img1,
  },
  {
    id: 2,
    name: "Chanel No.5",
    price: "Rs.2000",
    image: img2,
  },
  {
    id: 3,
    name: "Gucci Bloom",
    price: "Rs.2200",
    image: img3,
  },
  {
  id: 4,
    name: "AdilQuadri-Shanaya",
    price: "Rs.699",
    image: img4,
  },
];

export default function PerfumeGallery() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: "linear-gradient(to right, #f8cdda, #1d2b64)", // ✅ Background here
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
        Perfumes
      </h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        {perfumes.map((perfume) => (
          <motion.div
            key={perfume.id}
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
                  src={perfume.image}
                  alt={perfume.name}
                  style={{ height: "250px", objectFit: "cover" }}
                />
              </motion.div>
              <Card.Body className="text-center">
                <Card.Title>{perfume.name}</Card.Title>
                <Card.Text>{perfume.price}</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}