"use client";

import { motion } from "framer-motion";

export default function CustomizationOption({
  title,
  options,
  currentValue,
  onChange,
}) {
  return (
    <div className="bg-card rounded-2xl p-4 shadow-soft mb-4">
      <h3 className="text-lg font-bold text-text-primary mb-3">{title}</h3>

      <div className="grid grid-cols-4 gap-3">
        {options.map((option) => (
          <motion.div
            key={option.value}
            className={`p-2 rounded-xl cursor-pointer flex flex-col items-center ${
              currentValue === option.value
                ? "bg-primary-light border-2 border-primary"
                : "bg-gray-50 border-2 border-transparent"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onChange(option.value)}
          >
            <div className="text-3xl mb-1">{option.icon}</div>
            <div className="text-xs font-medium">{option.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
