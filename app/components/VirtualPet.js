"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function VirtualPet({ mood = "happy", onClick }) {
  const [animation, setAnimation] = useState({});

  useEffect(() => {
    // Different animations based on mood
    switch (mood) {
      case "happy":
        setAnimation({
          y: [0, -10, 0],
          transition: {
            y: {
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            },
          },
        });
        break;
      case "sad":
        setAnimation({
          rotate: [-2, 2, -2],
          transition: {
            rotate: {
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            },
          },
        });
        break;
      case "sick":
        setAnimation({
          scale: [1, 0.97, 1],
          transition: {
            scale: {
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            },
          },
        });
        break;
      default:
        setAnimation({});
    }
  }, [mood]);

  const faceExpressions = {
    happy: "◠‿◠",
    sad: "◡︵◡",
    sick: "◑.◑",
  };

  const petColors = {
    happy: "bg-primary-light",
    sad: "bg-accent-light",
    sick: "bg-secondary-light",
  };

  return (
    <motion.div
      className={`pet-container ${petColors[mood]}`}
      animate={animation}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex flex-col items-center">
        <div className="text-4xl mb-2">
          {mood === "happy" ? "🐠" : mood === "sad" ? "🐡" : "🐡"}
        </div>
        <div className="text-2xl">{faceExpressions[mood]}</div>
      </div>
    </motion.div>
  );
}
