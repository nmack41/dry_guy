"use client"; // This page needs client-side interactivity (useState, event handlers)

import { useState } from "react";
import Navigation from "../components/Navigation"; // Assuming Navigation is needed

export default function RegisterPlantPage() {
  // State for each input field
  const [plantName, setPlantName] = useState("");
  const [plantAge, setPlantAge] = useState(""); // Keep as string for input, parse later if needed
  const [commonName, setCommonName] = useState("");
  // Optional: State for feedback/loading
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default browser form submission
    setMessage("Adding plant..."); // Provide feedback

    // --- Placeholder for Actual Registration Logic ---
    // In a real app, you would typically:
    // 1. Validate the input (e.g., ensure age is a number)
    // 2. Send the data (plantName, plantAge, commonName) to your backend API
    // 3. Handle the API response (success or error)
    // 4. Potentially redirect the user or clear the form

    console.log("Submitting new plant data:", {
      name: plantName,
      age: parseInt(plantAge) || 0, // Example: Parse age to number
      commonName: commonName,
    });

    // Simulate API call delay and success
    setTimeout(() => {
      setMessage(`Plant "${plantName}" registered successfully!`);
      // Optionally clear the form
      setPlantName("");
      setPlantAge("");
      setCommonName("");
    }, 1500);
    // --- End Placeholder ---
  };

  return (
    <main className="min-h-screen pb-16">
      <div className="p-5">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-primary-dark">
            Register New Plant
          </h1>
          <p className="text-sm text-text-secondary">
            Enter the details for your new plant companion.
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Plant Name Input */}
          <div>
            <label
              htmlFor="plantName"
              className="block text-sm font-medium text-text-primary mb-1"
            >
              Plant's Nickname
            </label>
            <input
              type="text"
              id="plantName"
              value={plantName}
              onChange={(e) => setPlantName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              placeholder="e.g., Russell"
            />
          </div>

          {/* Plant Age Input */}
          <div>
            <label
              htmlFor="plantAge"
              className="block text-sm font-medium text-text-primary mb-1"
            >
              Age (Years)
            </label>
            <input
              type="number" // Use number type for age
              id="plantAge"
              value={plantAge}
              onChange={(e) => setPlantAge(e.target.value)}
              required
              min="0" // Optional: prevent negative age
              className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              placeholder="e.g., 2"
            />
          </div>

          {/* Common Name Input */}
          <div>
            <label
              htmlFor="commonName"
              className="block text-sm font-medium text-text-primary mb-1"
            >
              Common Plant Name
            </label>
            <input
              type="text"
              id="commonName"
              value={commonName}
              onChange={(e) => setCommonName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              placeholder="e.g., Snake Plant"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full button-primary" // Use existing button style
            >
              Register Plant
            </button>
          </div>

          {/* Feedback Message Area */}
          {message && (
            <p className="text-sm text-center text-green-600 mt-4">{message}</p>
          )}
        </form>
      </div>

      {/* Include navigation if desired */}
      <Navigation />
    </main>
  );
}
