"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import { motion } from "framer-motion";

export default function SensorChart({ data, dataKey, name, color, unit }) {
  const [activeFilter, setActiveFilter] = useState("week");

  const filters = [
    { id: "day", label: "Day" },
    { id: "week", label: "Week" },
    { id: "month", label: "Month" },
  ];

  // In a real app, we would filter data based on the selected time period
  // For this prototype, we'll just use the same data for all filters

  return (
    <div className="bg-card rounded-2xl p-4 shadow-soft mb-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-text-primary">{name} History</h3>
        <div className="flex bg-gray-100 rounded-lg p-1">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                activeFilter === filter.id
                  ? "bg-white text-primary shadow-soft"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="h-52">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="time" tick={{ fontSize: 10 }} tickMargin={10} />
            <YAxis tick={{ fontSize: 10 }} tickMargin={10} unit={unit} />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                borderRadius: "10px",
                border: "none",
                boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.05)",
              }}
              labelStyle={{ fontWeight: "bold", marginBottom: "5px" }}
            />
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              strokeWidth={2}
              dot={{ stroke: color, strokeWidth: 2, r: 4, fill: "white" }}
              activeDot={{ r: 6, stroke: color, strokeWidth: 2, fill: "white" }}
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
