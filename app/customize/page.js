// "use client";

// import { useState } from "react";
// import Navigation from "../components/Navigation";
// import CustomizationOption from "../components/CustomizationOption";
// import VirtualPet from "../components/VirtualPet";

// export default function Customize() {
//   const [petType, setPetType] = useState("fish");
//   const [petColor, setPetColor] = useState("blue");
//   const [petAccessory, setPetAccessory] = useState("none");
//   const [tankBackground, setTankBackground] = useState("coral");

//   const petTypes = [
//     { value: "fish", label: "Fish", icon: "🐠" },
//     { value: "turtle", label: "Turtle", icon: "🐢" },
//     { value: "dolphin", label: "Dolphin", icon: "🐬" },
//     { value: "octopus", label: "Octopus", icon: "🐙" },
//   ];

//   const petColors = [
//     { value: "blue", label: "Blue", icon: "🔵" },
//     { value: "green", label: "Green", icon: "🟢" },
//     { value: "yellow", label: "Yellow", icon: "🟡" },
//     { value: "orange", label: "Orange", icon: "🟠" },
//   ];

//   const petAccessories = [
//     { value: "none", label: "None", icon: "❌" },
//     { value: "hat", label: "Hat", icon: "🎩" },
//     { value: "glasses", label: "Glasses", icon: "👓" },
//     { value: "bow", label: "Bow", icon: "🎀" },
//   ];

//   const tankBackgrounds = [
//     { value: "coral", label: "Coral", icon: "🪸" },
//     { value: "castle", label: "Castle", icon: "🏰" },
//     { value: "plants", label: "Plants", icon: "🌿" },
//     { value: "rocks", label: "Rocks", icon: "🪨" },
//   ];

//   return (
//     <main className="min-h-screen pb-16">
//       <div className="p-5">
//         <div className="mb-6">
//           <h1 className="text-2xl font-bold text-primary-dark">Customize</h1>
//           <p className="text-sm text-text-secondary">
//             Personalize your pet and environment
//           </p>
//         </div>

//         <div className="mb-6">
//           <VirtualPet mood="happy" />
//           <p className="text-center mt-3 text-sm text-text-secondary">
//             Preview your customizations
//           </p>
//         </div>

//         <CustomizationOption
//           title="Pet Type"
//           options={petTypes}
//           currentValue={petType}
//           onChange={setPetType}
//         />

//         <CustomizationOption
//           title="Pet Color"
//           options={petColors}
//           currentValue={petColor}
//           onChange={setPetColor}
//         />

//         <CustomizationOption
//           title="Pet Accessory"
//           options={petAccessories}
//           currentValue={petAccessory}
//           onChange={setPetAccessory}
//         />

//         <CustomizationOption
//           title="Tank Background"
//           options={tankBackgrounds}
//           currentValue={tankBackground}
//           onChange={setTankBackground}
//         />

//         <div className="flex justify-center mt-6">
//           <button className="button-primary w-full py-3">
//             Save Customizations
//           </button>
//         </div>
//       </div>

//       <Navigation />
//     </main>
//   );
// }
