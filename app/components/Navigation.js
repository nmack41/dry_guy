"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/", icon: "🏠" },
    { label: "History", href: "/history", icon: "📊" },
    { label: "Alerts", href: "/alerts", icon: "🔔" },
    // { label: "Customize", href: "/customize", icon: "🎨" },
    { label: "Settings", href: "/settings", icon: "⚙️" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-soft">
      <div className="max-w-md mx-auto flex justify-between px-2 py-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-item ${pathname === item.href ? "active" : ""}`}
          >
            <motion.span
              className="text-2xl"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {item.icon}
            </motion.span>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
