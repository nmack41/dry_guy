"use client";

import { motion } from "framer-motion";

export default function SensorCard({
  title,
  value,
  icon,
  unit,
  status = "normal",
  onClick,
}) {
  const statusStyles = {
    normal: "bg-primary-light text-primary-dark",
    warning: "bg-accent-light text-accent-dark",
    critical: "bg-red-100 text-red-600",
  };

  return (
    <motion.div
      className={`sensor-card ${statusStyles[status]}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl mr-2">{icon}</span>
          <div>
            <h3 className="text-sm font-semibold">{title}</h3>
            <p className="text-lg font-bold">
              {value} <span className="text-xs">{unit}</span>
            </p>
          </div>
        </div>
        <motion.div
          className="w-2 h-2 rounded-full bg-current"
          animate={{
            scale: status === "critical" ? [1, 1.5, 1] : 1,
          }}
          transition={{
            repeat: status === "critical" ? Infinity : 0,
            duration: 1,
          }}
        />
      </div>
    </motion.div>
  );
}
