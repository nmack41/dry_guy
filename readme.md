# Water Sensor Tamagotchi App - UI Prototype

This is a clickable UI prototype for the "Water Sensor Tamagotchi App" built with Next.js and TailwindCSS. The prototype simulates a playful, kid-friendly application where users can monitor their water sensor data through a virtual pet interface.

## Features

- **Interactive Pet**: A central animated virtual pet whose mood changes based on water data
- **Sensor Monitoring**: Display of temperature, pH, and cleanliness with simple icons
- **History Tracking**: Interactive charts showing past sensor readings and pet moods
- **Alerts System**: Notifications about water conditions presented in a pet-friendly way
- **Customization**: Options to personalize the pet and its environment
- **Settings**: Configure app preferences and sensor options

## Screens

1. **Home Screen**: Central pet display with sensor readings and status
2. **History Screen**: Charts and timelines of past data
3. **Alerts Screen**: Interactive notifications with pet-generated messages
4. **Customization Screen**: Options to personalize the pet and environment
5. **Settings Screen**: Toggles for notifications, sensor sync, and other preferences

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd water-sensor-tamagotchi
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Run the development server:

   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Design System

The prototype uses a consistent design system with:

- **Colors**: Pastel blues, seafoam greens, and pale yellows
- **Typography**: Quicksand for headings, Inter for body text
- **UI Elements**: Rounded corners, soft shadows, and playful animations
- **Interactive States**: Hover and click animations on all interactive elements

## Interactive Features

- **Pet Interaction**: Click the pet to cycle through different moods
- **Sensor Cards**: Click to view more details about each reading
- **Alert Expansion**: Click alerts to see more information and actions
- **Customization**: Preview changes to the pet's appearance in real-time
- **Settings Toggles**: Turn features on/off to see immediate UI updates

## Modifying the Prototype

The prototype is built with a component-based structure, making it easy to adjust:

- **Visual Elements**: Edit TailwindCSS classes in the components
- **Content**: Modify the sample data in each page file
- **Interactions**: Adjust the animations and state changes in the component files

## Project Structure

- `/app`: Main application code
  - `/components`: Reusable UI components
  - `/pages`: Page components for each screen
  - `/styles`: Global styles and TailwindCSS configuration
- `/public`: Static assets like images and icons
