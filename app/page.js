"use client";

import { useState } from "react";
import VirtualPet from "./components/VirtualPet";
import SensorCard from "./components/SensorCard";
import PetStatusCard from "./components/PetStatusCard";
import Navigation from "./components/Navigation";

export default function Home() {
  const [petMood, setPetMood] = useState("happy");
  const [petName, setPetName] = useState("Bubbles");
  const [streakDays, setStreakDays] = useState(5);

  // Simulated sensor data (in a real app, this would come from the backend)
  const sensorData = [
    {
      id: "temperature",
      title: "Temperature",
      value: "65",
      unit: "°F",
      icon: "🌡️",
      status: "normal",
    },
    {
      id: "ph",
      title: "pH Level",
      value: "6.8",
      unit: "pH",
      icon: "🧪",
      status: "normal",
    },
    {
      id: "cleanliness",
      title: "Cleanliness",
      value: "92",
      unit: "%",
      icon: "✨",
      status: "normal",
    },
  ];

  const changePetMood = () => {
    // Cycle through moods on click for demo purposes
    const moods = ["happy", "sad", "sick"];
    const currentIndex = moods.indexOf(petMood);
    const nextIndex = (currentIndex + 1) % moods.length;
    setPetMood(moods[nextIndex]);
  };

  return (
    <main className="min-h-screen pb-16">
      <div className="p-5">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-primary-dark">Water Pet</h1>
          <div className="text-sm bg-accent-light text-accent-dark py-1 px-3 rounded-full font-semibold">
            {streakDays}-day streak 🔥
          </div>
        </div>

        <div className="mb-8">
          <VirtualPet mood={petMood} onClick={changePetMood} />
          <p className="text-center mt-3 text-sm text-text-secondary">
            Tap to change mood
          </p>
        </div>

        <PetStatusCard name={petName} streakDays={streakDays} mood={petMood} />

        <div className="grid grid-cols-1 gap-3 mb-6">
          {sensorData.map((sensor) => (
            <SensorCard
              key={sensor.id}
              title={sensor.title}
              value={sensor.value}
              unit={sensor.unit}
              icon={sensor.icon}
              status={sensor.status}
            />
          ))}
        </div>
      </div>

      <Navigation />
    </main>
  );
}
