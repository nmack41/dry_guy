"use client";

import { motion } from "framer-motion";

/**
 * VirtualPet Component
 * Displays the virtual pet, now using an image.
 * @param {string} mood - Current mood ('happy', 'sad', 'sick'), affects background color.
 * @param {string} imageUrl - URL of the image to display for the pet.
 */
export default function VirtualPet({ mood = "happy", imageUrl }) {
  // Colors for the background circle based on mood
  const petColors = {
    happy: "bg-primary-light",
    sad: "bg-accent-light",
    sick: "bg-secondary-light",
  };

  return (
    <motion.div
      // Apply background color based on mood and ensure image stays within bounds
      className={`pet-container ${petColors[mood]} overflow-hidden`}
      // Added simple hover/tap scaling effect
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Check if an imageUrl is provided */}
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={`Pet feeling ${mood}`}
          // Basic styling to fit the image: full width/height, contain aspect ratio, some padding
          // You may need to adjust padding/object-fit based on your image dimensions
          className="w-full h-full object-contain p-4"
          // Add error handling for broken image links (optional but good practice)
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "Error";
          }}
        />
      ) : (
        // Fallback content if no imageUrl is provided
        <div className="flex items-center justify-center h-full">
          <span className="text-4xl text-gray-400">?</span>
        </div>
      )}
    </motion.div>
  );
}
