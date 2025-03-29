"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";
import SensorChart from "../components/SensorChart";

export default function History() {
  // Sample data for the charts
  const temperatureData = [
    { time: "Mon", value: 68 },
    { time: "Tue", value: 66 },
    { time: "Wed", value: 65 },
    { time: "Thu", value: 65 },
    { time: "Fri", value: 64 },
    { time: "Sat", value: 66 },
    { time: "Sun", value: 65 },
  ];

  const phData = [
    { time: "Mon", value: 7.0 },
    { time: "Tue", value: 6.9 },
    { time: "Wed", value: 6.8 },
    { time: "Thu", value: 6.8 },
    { time: "Fri", value: 6.7 },
    { time: "Sat", value: 6.9 },
    { time: "Sun", value: 6.8 },
  ];

  const cleanlinessData = [
    { time: "Mon", value: 95 },
    { time: "Tue", value: 90 },
    { time: "Wed", value: 87 },
    { time: "Thu", value: 85 },
    { time: "Fri", value: 80 },
    { time: "Sat", value: 95 },
    { time: "Sun", value: 92 },
  ];

  // Sample mood history
  const moodHistory = [
    { day: "Mon", mood: "happy" },
    { day: "Tue", mood: "happy" },
    { day: "Wed", mood: "sad" },
    { day: "Thu", mood: "sick" },
    { day: "Fri", mood: "happy" },
    { day: "Sat", mood: "happy" },
    { day: "Sun", mood: "happy" },
  ];

  const getMoodEmoji = (mood) => {
    switch (mood) {
      case "happy":
        return "😊";
      case "sad":
        return "😞";
      case "sick":
        return "😷";
      default:
        return "😊";
    }
  };

  return (
    <main className="min-h-screen pb-16">
      <div className="p-5">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-primary-dark">History</h1>
          <p className="text-sm text-text-secondary">
            Track your pet's environment over time
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-text-primary mb-3">
            Mood Timeline
          </h2>
          <div className="flex justify-between bg-card rounded-2xl p-4 shadow-soft">
            {moodHistory.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-xl mb-1">{getMoodEmoji(item.mood)}</div>
                <div className="text-xs text-gray-500">{item.day}</div>
              </div>
            ))}
          </div>
        </div>

        <SensorChart
          data={temperatureData}
          dataKey="value"
          name="Temperature"
          color="#2E8899"
          unit="°F"
        />

        <SensorChart
          data={phData}
          dataKey="value"
          name="pH Level"
          color="#4AA987"
          unit=""
        />

        <SensorChart
          data={cleanlinessData}
          dataKey="value"
          name="Cleanliness"
          color="#EFBB4C"
          unit="%"
        />
      </div>

      <Navigation />
    </main>
  );
}
