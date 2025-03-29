"use client";

import { useState } from "react";
import VirtualPet from "./components/VirtualPet";
// import SensorCard from "./components/SensorCard";
import PetStatusCard from "./components/PetStatusCard";
import Navigation from "./components/Navigation";

export default function Home() {
  const [petMood, setPetMood] = useState("happy");
  const [petName, setPetName] = useState("Russell");
  const [petAge, setPetAge] = useState(2);
  const [petCommonName, setPetCommonName] = useState("Snake Plant");
  const [petScientificName, setPetScientificName] = useState(
    "Sansevieria trifasciata"
  );
  const [streakDays, setStreakDays] = useState(2);
  const [imageUrl, setImageUrl] = useState("/images/Russell.png");

  // Simulated sensor data (in a real app, this would come from the backend)
  // const sensorData = [
  //   {
  //     id: "temperature",
  //     title: "Temperature",
  //     value: "65",
  //     unit: "°F",
  //     icon: "🌡️",
  //     status: "normal",
  //   },
  //   {
  //     id: "ph",
  //     title: "pH Level",
  //     value: "6.8",
  //     unit: "pH",
  //     icon: "🧪",
  //     status: "normal",
  //   },
  //   {
  //     id: "cleanliness",
  //     title: "Cleanliness",
  //     value: "92",
  //     unit: "%",
  //     icon: "✨",
  //     status: "normal",
  //   },
  // ];

  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     setImageUrl(URL.createObjectURL(file));
  //   }
  // };

  return (
    <main className="min-h-screen pb-16">
      <div className="p-5">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-primary-dark">{petName}</h1>
            <p className="text-base text-text-secondary mt-1">
              Age: {petAge} years
            </p>
            <p className="text-base text-text-primary mt-1">{petCommonName}</p>
            <p className="text-sm text-text-secondary italic mt-0.5">
              {petScientificName}
            </p>
          </div>
          <div className="text-sm bg-accent-light text-accent-dark py-1 px-3 rounded-full font-semibold">
            {streakDays}-day streak 🔥
          </div>
        </div>

        <div className="mb-8">
          <VirtualPet mood={petMood} imageUrl={imageUrl} />
          {/* <div className="mt-4 text-center">
            <label
              htmlFor="pet-upload"
              className="cursor-pointer text-primary hover:underline text-sm"
            >
              Change Pet Image (Local Preview)
            </label>
            <input
              id="pet-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div> */}
        </div>

        <PetStatusCard name={petName} streakDays={streakDays} mood={petMood} />

        {/* <div className="grid grid-cols-1 gap-3 mb-6">
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
        </div> */}
      </div>

      <Navigation />
    </main>
  );
}
