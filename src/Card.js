// CardPage.jsx
import React from "react";
import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// Import product images
import Compact from './Compact.jpg';
import Blush from './blush.webp';
import Highlighter from './Highlighter.jpg';

const Powders = [
  {
    id: 1,
    name: "Compact Kiro",
    price: "Rs. 720",
    image: Compact,
  },
  {
    id: 2,
    name: "Pink Blush Kiro",
    price: "Rs. 850",
    image: Blush,
  },
  {
    id: 3,
    name: "High-Lighter",
    price: "Rs. 850",
    image: Highlighter,
  },
];

export default function CardPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto min-h-screen mt-[65px]">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Powder Collection</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {Powders.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card style={{ width: "16rem", margin: "25px" }} className="shadow-lg">
              <motion.div
                whileHover={{ rotate: 1, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ height: "250px", objectFit: "cover" }}
                />
              </motion.div>
              <Card.Body className="text-center">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}