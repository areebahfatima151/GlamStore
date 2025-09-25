import React from "react";
import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import img1 from "./m1.png";
import img2 from "./m2.png";
import img3 from "./m3.png";
import img4 from "./m4.png";

const products = [
  {
    id: 1,
    name: "Bobbi Brown Foundation",
    price: "Rs.1000",
    image: img1,
  },
  {
    id: 2,
    name: "Bobbi Brown Concealer",
    price: "Rs.700",
    image: img2,
  },
  {
    id: 3,
    name: "Bobbi Brown BB Cream",
    price: "Rs.500",
    image: img3,
  },
  {
    id: 4,
    name: "Bobbi Brown Primer",
    price: "Rs.500",
    image: img4,
  },
];

export default function FaceBaseGallery() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: "linear-gradient(to right, #f8cdda, #1d2b64)", // ✅ same as perfume.js
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
        FaceBase
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
        {products.map((item) => (
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