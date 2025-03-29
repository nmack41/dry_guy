"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function AlertItem({
  title,
  message,
  time,
  severity = "info",
  onClick,
}) {
  const [expanded, setExpanded] = useState(false);

  const severityStyles = {
    info: "border-primary",
    warning: "border-accent",
    critical: "border-red-500",
  };

  const severityIcons = {
    info: "💧",
    warning: "⚠️",
    critical: "🚨",
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
    if (onClick) onClick();
  };

  return (
    <motion.div
      className={`alert-item ${severityStyles[severity]}`}
      whileHover={{ scale: 1.02, x: 5 }}
      whileTap={{ scale: 0.98 }}
      onClick={toggleExpand}
      layout
    >
      <div className="flex justify-between items-start">
        <div className="flex items-start">
          <span className="text-2xl mr-3 mt-1">{severityIcons[severity]}</span>
          <div>
            <h3 className="text-md font-bold">{title}</h3>
            <p className="text-xs text-gray-500">{time}</p>
          </div>
        </div>
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-400"
        >
          ▼
        </motion.span>
      </div>

      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-3 text-sm text-gray-600 pl-9"
        >
          <p>{message}</p>
          <div className="mt-3 flex justify-end">
            <button className="button-primary text-xs py-1">Fix Now</button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
