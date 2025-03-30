"use client";

// Removed useState as it's not currently used
import Navigation from "../components/Navigation";
import SensorChart from "../components/SensorChart";

export default function History() {
  // Removed temperatureData, phData, cleanlinessData, moodHistory
  // Add sample data for Moisture (e.g., Humidity %)
  const moistureData = [
    { time: "Mon", value: 73 },
    { time: "Tue", value: 60 },
    { time: "Wed", value: 52 },
    { time: "Thu", value: 47 },
    { time: "Fri", value: 30 },
    { time: "Sat", value: 23 },
    { time: "Sun", value: 18 },
  ];

  const SunlightData = [
    { time: "Mon", value: 8 },
    { time: "Tue", value: 9 },
    { time: "Wed", value: 7 },
    { time: "Thu", value: 10 },
    { time: "Fri", value: 11 },
    { time: "Sat", value: 6 },
    { time: "Sun", value: 9 },
  ];

  // getMoodEmoji function is removed as mood history is commented out

  return (
    <main className="min-h-screen pb-16">
      <div className="p-5">
        <div className="mb-6">
          {/* Updated title and description for clarity */}
          <h1 className="text-2xl font-bold text-primary-dark">History</h1>
        </div>

        {/* Removed Mood Timeline section */}
        {/* <div className="mb-6"> ... </div> */}

        {/* Replaced Temperature chart with Moisture chart */}
        <SensorChart
          data={moistureData}
          dataKey="value"
          name="Moisture"
          color="#4A90E2" // Example color, feel free to change
          unit="%"
        />

        <SensorChart
          data={SunlightData}
          dataKey="value"
          name="Sunlight"
          color="#EFBB4C" // Example color, feel free to change
          unit="V"
        />
        {/* Ensure other charts remain commented out or removed */}
        {/* <SensorChart data={phData} ... /> */}
        {/* <SensorChart data={cleanlinessData} ... /> */}
      </div>

      <Navigation />
    </main>
  );
}
