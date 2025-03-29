"use client";

import { motion } from "framer-motion";

export default function SettingToggle({ title, description, value, onChange }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100">
      <div>
        <h3 className="text-md font-semibold text-text-primary">{title}</h3>
        {description && (
          <p className="text-xs text-text-light mt-1">{description}</p>
        )}
      </div>

      <button
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          value ? "bg-primary" : "bg-gray-200"
        }`}
        onClick={() => onChange(!value)}
      >
        <span className="sr-only">Toggle {title}</span>
        <motion.span
          className="inline-block h-4 w-4 rounded-full bg-white"
          initial={false}
          animate={{
            translateX: value ? "1.25rem" : "0.25rem",
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </button>
    </div>
  );
}
