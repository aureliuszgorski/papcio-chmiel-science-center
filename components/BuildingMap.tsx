"use client";

import React, { useState } from "react";
import { rooms, Room } from "@/data/rooms";
import { Info, HelpCircle, MapPin } from "lucide-react";
import RoomModal from "./RoomModal";

// Coordinates for 12 hotspots overlaying the building map
const hotspots = [
  { slug: "kosmiczna-brama", x: 22, y: 70, label: "Space Launch Gate" },
  { slug: "stacja-kosmiczna", x: 38, y: 28, label: "Tytus's Space Station" },
  { slug: "studio-komiksu", x: 35, y: 55, label: "Papcio's Comic Studio" },
  { slug: "akademia-dymku", x: 50, y: 38, label: "Speech Bubble Academy" },
  { slug: "instytut-pojazdow", x: 68, y: 32, label: "Professor's Vehicle Institute" },
  { slug: "misja-tytus", x: 80, y: 48, label: "Mission: Humanize Tytus" },
  { slug: "misja-romka", x: 62, y: 65, label: "Romek's Geographical Mission" },
  { slug: "wyspy-nonsensu", x: 58, y: 50, label: "Islands of Nonsense" },
  { slug: "archiwum-swiata", x: 45, y: 80, label: "Youth World Archive" },
  { slug: "klasa-papcia", x: 15, y: 42, label: "Papcio's Classroom" },
  { slug: "hangar-partnerow", x: 82, y: 75, label: "Partners Hangar" },
  { slug: "przyszla-baza", x: 50, y: 15, label: "Digital Base" }
];

export default function BuildingMap() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const handleOpenRoom = (slug: string) => {
    const room = rooms.find((r) => r.slug === slug);
    if (room) {
      setSelectedRoom(room);
    }
  };

  return (
    <div className="relative py-12" id="mapa">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 border-4 border-black bg-comic-red px-3 py-1 shadow-[2px_2px_0px_0px_#000000]">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
            <span className="font-display font-extrabold uppercase text-xs text-white tracking-widest">
              SPACE MISSION MAP
            </span>
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            Explore the Base&apos;s Scientific Nodes
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-zinc-400 text-sm font-medium">
            Click on a pulsing point on the space mission map to reveal details about the educational task, check character roles, and launch the virtual simulator.
          </p>
        </div>

        {/* Map Canvas Box (Comic framed page layout) */}
        <div className="relative mx-auto max-w-4xl border-4 border-black bg-comic-paper text-black p-6 shadow-[8px_8px_0px_0px_#000000] overflow-hidden flex items-center justify-center min-h-[480px]">
          
          {/* Pulpy Halftone Overlay Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e0_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#000000_10%,transparent_11%)] bg-[size:12px_12px] opacity-[0.015] pointer-events-none" />

          {/* SVG Schematic Isometric Building representation */}
          <svg
            viewBox="0 0 500 300"
            className="w-full h-full max-w-[650px] opacity-90 stroke-black stroke-[2]"
            fill="none"
          >
            {/* Base platform */}
            <polygon points="250,280 450,180 250,80 50,180" fill="rgba(255, 216, 77, 0.05)" />
            
            {/* First level floor boundaries */}
            <polygon points="250,230 410,150 250,70 90,150" fill="rgba(72, 216, 255, 0.05)" />

            {/* Schematic Lines */}
            <line x1="250" y1="280" x2="250" y2="70" stroke="black" strokeDasharray="4 4" />
            <line x1="50" y1="180" x2="90" y2="150" stroke="black" />
            <line x1="450" y1="180" x2="410" y2="150" stroke="black" />

            <path
              d="M 170,190 L 250,150 L 330,190 M 250,150 L 250,230"
              stroke="black"
              strokeWidth="1.5"
            />

            {/* Tower structures */}
            <polygon points="250,70 290,50 250,30 210,50" fill="#FAF8F5" />
            <line x1="250" y1="30" x2="250" y2="5" stroke="black" strokeWidth="3" />
          </svg>

          {/* Absolute Hotspots Layer */}
          {hotspots.map((spot) => {
            const isHovered = spot.slug === hoveredSlug;
            const roomData = rooms.find((r) => r.slug === spot.slug);
            if (!roomData) return null;

            // Define bullet colors based on node classifications
            const bulletColor =
              roomData.type === "science"
                ? "bg-comic-red"
                : roomData.type === "ai" || roomData.type === "museum"
                ? "bg-comic-cyan"
                : "bg-comic-yellow";

            return (
              <div
                key={spot.slug}
                style={{
                  left: `${spot.x}%`,
                  top: `${spot.y}%`,
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
              >
                {/* Hotspot Target Button */}
                <button
                  onClick={() => handleOpenRoom(spot.slug)}
                  onMouseEnter={() => setHoveredSlug(spot.slug)}
                  onMouseLeave={() => setHoveredSlug(null)}
                  className="relative flex items-center justify-center p-2 focus:outline-none group cursor-pointer"
                >
                  {/* Pulsing ring outer */}
                  <span className={`absolute inline-flex h-8 w-8 rounded-full border-2 border-black opacity-30 animate-ping ${bulletColor}`} />

                  {/* Comic Outer Circle */}
                  <span className={`absolute inline-flex h-6 w-6 rounded-full border-4 border-black transition-transform duration-200 ${
                    isHovered ? "scale-125" : "scale-100"
                  } ${bulletColor}`} />

                  {/* Center core dot */}
                  <span className="relative h-2 w-2 rounded-full bg-black" />
                </button>

                {/* Comic Speech Bubble hover tooltip */}
                <div
                  className={`absolute bottom-10 left-1/2 -translate-x-1/2 w-52 border-4 border-black bg-white p-3 shadow-[4px_4px_0px_0px_#000000] transition-all duration-200 pointer-events-none rounded-none text-left ${
                    isHovered ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-2 invisible"
                  }`}
                >
                  <div className="flex items-center space-x-1.5 mb-1 text-black font-extrabold">
                    <MapPin className="h-3.5 w-3.5" />
                    <span className="font-display text-sm tracking-wider uppercase">
                      {roomData.title}
                    </span>
                  </div>
                  <p className="text-[11px] leading-tight text-zinc-700 line-clamp-2 font-medium">
                    {roomData.subtitle}
                  </p>
                  <div className="mt-2 text-[10px] text-comic-red font-bold flex items-center space-x-1">
                    <Info className="h-3 w-3" />
                    <span>Click to enter simulation</span>
                  </div>

                  {/* Speech Bubble Arrow */}
                  <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-0 h-0 border-t-[8px] border-t-black border-x-[8px] border-x-transparent" />
                  <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-0 h-0 border-t-[6px] border-t-white border-x-[6px] border-x-transparent" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend strip (Styled as a vintage note board) */}
        <div className="mt-8 mx-auto max-w-2xl border-4 border-black bg-comic-yellow text-black p-4 shadow-[4px_4px_0px_0px_#000000] -rotate-0.5 transform flex items-center space-x-3 text-xs font-bold">
          <HelpCircle className="h-5 w-5 shrink-0" />
          <span>
            Map Legend: Red points are hard STEM science challenges, Cyan points are AI &amp; history nodes, and Yellow points represent creative &amp; partner hangars.
          </span>
        </div>
      </div>

      {/* Room detail modal */}
      {selectedRoom && (
        <RoomModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
      )}
    </div>
  );
}
