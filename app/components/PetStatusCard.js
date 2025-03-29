"use client";

import { motion } from "framer-motion";

export default function PetStatusCard({ name, streakDays, mood, onClick }) {
  const moodMessages = {
    happy: "I'm feeling great today!",
    sad: "I'm feeling a bit down...",
    sick: "I don't feel so good...",
  };

  const streakEmoji = "🔥";

  return (
    <motion.div
      className="bg-card rounded-2xl p-4 shadow-soft mb-4"
      whileHover={{ y: -3 }}
      onClick={onClick}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold text-primary-dark">{name}'s Status</h3>
        <div className="bg-accent-light text-accent-dark text-sm font-medium py-1 px-3 rounded-full">
          {streakDays} {streakEmoji}
        </div>
      </div>

      <div className="flex items-center">
        <div className="text-xl mr-2">
          {mood === "happy" ? "😊" : mood === "sad" ? "😞" : "😷"}
        </div>
        <p className="text-text-secondary text-sm">{moodMessages[mood]}</p>
      </div>

      <div className="mt-3 bg-gray-100 rounded-full h-2">
        <motion.div
          className="h-2 rounded-full bg-primary"
          initial={{ width: "0%" }}
          animate={{
            width: mood === "happy" ? "80%" : mood === "sad" ? "40%" : "20%",
          }}
          transition={{ duration: 1 }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <span>Mood</span>
        <span>Daily Happiness Streak: {streakDays} days</span>
      </div>
    </motion.div>
  );
}
