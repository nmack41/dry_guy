import "./styles/globals.css";

export const metadata = {
  title: "Water Sensor Tamagotchi App",
  description: "Interactive UI prototype for Water Sensor Tamagotchi App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-md mx-auto min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  );
}
