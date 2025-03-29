"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";
import AlertItem from "../components/AlertItem";

export default function Alerts() {
  // Sample alert data
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      title: "Pet is hungry!",
      message:
        "Your pet hasn't been fed in 24 hours! Please feed your pet soon to maintain their health and happiness.",
      time: "2 days ago",
      severity: "critical",
      read: true,
    },
  ]);

  const toggleRead = (id) => {
    setAlerts(
      alerts.map((alert) =>
        alert.id === id ? { ...alert, read: !alert.read } : alert
      )
    );
  };

  return (
    <main className="min-h-screen pb-16">
      <div className="p-5">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-primary-dark">
            Alerts & Notifications
          </h1>
          <p className="text-sm text-text-secondary">
            Stay updated on your pet's needs
          </p>
        </div>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-text-primary">
            Recent Alerts
          </h2>
          <button className="text-xs text-primary font-medium">
            Mark All as Read
          </button>
        </div>

        {alerts.length > 0 ? (
          <div className="space-y-3">
            {alerts.map((alert) => (
              <AlertItem
                key={alert.id}
                title={alert.title}
                message={alert.message}
                time={alert.time}
                severity={alert.severity}
                onClick={() => toggleRead(alert.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="text-4xl mb-2">🎉</div>
            <h3 className="text-lg font-semibold text-primary">
              All Caught Up!
            </h3>
            <p className="text-sm text-text-secondary mt-1">
              You have no new alerts or notifications
            </p>
          </div>
        )}
      </div>

      <Navigation />
    </main>
  );
}
