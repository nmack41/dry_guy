"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";
import SettingToggle from "../components/SettingToggle";

export default function Settings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [sensorSyncEnabled, setSensorSyncEnabled] = useState(true);
  const [autoFeedEnabled, setAutoFeedEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [dataCollectionEnabled, setDataCollectionEnabled] = useState(true);

  return (
    <main className="min-h-screen pb-16">
      <div className="p-5">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-primary-dark">Settings</h1>
          <p className="text-sm text-text-secondary">
            Configure your app preferences
          </p>
        </div>

        <div className="bg-card rounded-2xl p-4 shadow-soft mb-6">
          <h2 className="text-lg font-semibold text-text-primary mb-4">
            Notifications
          </h2>

          <SettingToggle
            title="Enable Notifications"
            description="Receive alerts about your pet's environment"
            value={notificationsEnabled}
            onChange={setNotificationsEnabled}
          />

          <SettingToggle
            title="Sound Effects"
            description="Play sounds for notifications and interactions"
            value={soundEnabled}
            onChange={setSoundEnabled}
          />
        </div>

        <div className="bg-card rounded-2xl p-4 shadow-soft mb-6">
          <h2 className="text-lg font-semibold text-text-primary mb-4">
            Sensor & Device
          </h2>

          <SettingToggle
            title="Sensor Sync"
            description="Keep your app in sync with physical water sensors"
            value={sensorSyncEnabled}
            onChange={setSensorSyncEnabled}
          />

          <SettingToggle
            title="Auto-Feed Mode"
            description="Automatically feed your pet on schedule"
            value={autoFeedEnabled}
            onChange={setAutoFeedEnabled}
          />
        </div>

        <div className="bg-card rounded-2xl p-4 shadow-soft mb-6">
          <h2 className="text-lg font-semibold text-text-primary mb-4">
            App Preferences
          </h2>

          <SettingToggle
            title="Dark Mode"
            description="Switch between light and dark theme"
            value={darkModeEnabled}
            onChange={setDarkModeEnabled}
          />

          <SettingToggle
            title="Data Collection"
            description="Help us improve by sharing anonymous usage data"
            value={dataCollectionEnabled}
            onChange={setDataCollectionEnabled}
          />
        </div>

        <div className="mt-8 flex flex-col space-y-3">
          <button className="button-secondary">Reset Pet Progress</button>
          <button className="text-red-500 text-sm font-medium">
            Delete Account
          </button>
        </div>
      </div>

      <Navigation />
    </main>
  );
}
