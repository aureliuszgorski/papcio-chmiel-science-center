"use client";

import React, { useState } from "react";
import { Compass, Bot, CheckSquare, Download } from "lucide-react";

type CityQuest = {
  city: string;
  title: string;
  questDesc: string;
  aiTask: string;
  coordinates: { x: number; y: number };
};

const quests: CityQuest[] = [
  {
    city: "Warsaw",
    title: "Mission: Youth World Press Trace",
    questDesc: "Locate the historical publisher coordinates and solve codes based on Tytus book release years.",
    aiTask: "AI generated a historic walking tour route with questions about post-war print techniques.",
    coordinates: { x: 62, y: 48 }
  },
  {
    city: "Krakow",
    title: "Mission: Wawel Dragon vs Rocket Tub",
    questDesc: "Test sulfur chemistry inside the Wawel dragon's lair using virtual laboratory gear.",
    aiTask: "AI configured physics tasks: calculate the gas velocity needed to orbit the dragon's nest.",
    coordinates: { x: 55, y: 82 }
  },
  {
    city: "Gdynia",
    title: "Mission: Ballooning over the Baltic Sea",
    questDesc: "Perform marine navigation simulation adjusting to winds blowing above the Baltic coast.",
    aiTask: "AI compiled geographic tasks about Baltic sea currents for grades V-VIII.",
    coordinates: { x: 45, y: 15 }
  },
  {
    city: "Poznan",
    title: "Mission: Goats and cyber-clocks",
    questDesc: "Examine mechanical gears inside the town hall clock and create a gears control loop.",
    aiTask: "AI drafted robotics workshops: translate pendulum frequencies into pointer angles.",
    coordinates: { x: 28, y: 48 }
  }
];

export default function PolskaInteractive() {
  const [selectedCity, setSelectedCity] = useState<string>("Warsaw");
  const [downloaded, setDownloaded] = useState<boolean>(false);

  const current = quests.find((q) => q.city === selectedCity)!;

  return (
    <div className="rounded-2xl border border-glass bg-glass p-6 md:p-8">
      <h3 className="font-display text-lg font-bold text-white mb-2">
        Romek&apos;s Geographical Mission (Poland Map)
      </h3>
      <p className="text-xs text-zinc-400 mb-6">
        Select a regional cultural node on the map of Poland to activate geographical missions and download school worksheets.
      </p>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Poland Vector Map (SVG) */}
        <div className="lg:col-span-6 flex items-center justify-center bg-zinc-950/60 rounded-2xl border border-zinc-800/80 p-6 relative aspect-square">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full max-w-[280px] text-zinc-800 stroke-zinc-700/80 stroke-1"
            fill="none"
          >
            <path
              d="M 50 5 L 85 20 L 95 60 L 75 92 L 25 92 L 5 60 L 15 20 Z"
              fill="rgba(8, 17, 31, 0.4)"
              className="transition-all duration-300 hover:fill-zinc-900/40"
            />
            <path
              d="M 75 92 Q 60 70 55 60 T 62 48 T 50 35 T 45 15"
              stroke="rgba(72, 216, 255, 0.3)"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>

          {/* Hotspots */}
          {quests.map((q) => {
            const isSelected = q.city === selectedCity;

            return (
              <button
                key={q.city}
                onClick={() => {
                  setSelectedCity(q.city);
                  setDownloaded(false);
                }}
                style={{
                  left: `${q.coordinates.x}%`,
                  top: `${q.coordinates.y}%`,
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 group"
              >
                <span className="absolute inline-flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD84D] opacity-15 group-hover:scale-125 transition-transform" />
                <span
                  className={`relative flex h-3.5 w-3.5 items-center justify-center rounded-full border shadow transition-all duration-300 ${
                    isSelected
                      ? "bg-[#FFD84D] border-[#FFD84D] scale-125 shadow-[0_0_12px_rgba(255,216,77,0.6)]"
                      : "bg-[#05070A] border-zinc-500 hover:border-[#FFD84D]"
                  }`}
                />
                <span className="absolute top-4 left-1/2 -translate-x-1/2 rounded bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 text-[9px] font-bold font-display text-zinc-300 opacity-80 group-hover:opacity-100 transition-opacity">
                  {q.city}
                </span>
              </button>
            );
          })}
        </div>

        {/* Quest Info Panel */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 rounded-full bg-[#FFD84D]/10 border border-[#FFD84D]/20 px-3 py-1 text-xs text-[#FFD84D]">
              <Compass className="h-3.5 w-3.5 animate-spin" />
              <span className="font-display font-medium uppercase tracking-wider">Regional Node: {current.city}</span>
            </div>

            <h4 className="font-display text-lg font-bold text-white">
              {current.title}
            </h4>

            <p className="text-xs leading-relaxed text-zinc-300 bg-zinc-950/40 p-4 rounded-xl border border-zinc-850">
              {current.questDesc}
            </p>
          </div>

          {/* AI Guide Quest Note */}
          <div className="mt-6 border-t border-zinc-900 pt-6">
            <div className="flex items-start space-x-3 bg-[#48D8FF]/5 rounded-xl border border-[#48D8FF]/15 p-4 mb-6">
              <Bot className="h-5 w-5 text-[#48D8FF] mt-0.5 shrink-0" />
              <div>
                <span className="font-display text-[9px] font-bold text-[#48D8FF] uppercase tracking-widest">
                  AI QUEST ASSISTANT
                </span>
                <p className="mt-1 text-xs text-zinc-400 leading-relaxed italic">
                  &ldquo;{current.aiTask}&rdquo;
                </p>
              </div>
            </div>

            {/* CTA action */}
            <div className="flex justify-end">
              {downloaded ? (
                <div className="flex items-center space-x-2 text-[#B6FF4D] text-xs font-bold bg-[#B6FF4D]/10 border border-[#B6FF4D]/20 px-4 py-2.5 rounded-xl">
                  <CheckSquare className="h-4 w-4" />
                  <span>Worksheet downloaded!</span>
                </div>
              ) : (
                <button
                  onClick={() => setDownloaded(true)}
                  className="flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-[#FFD84D] text-black font-display text-xs font-bold hover:bg-[#FFD84D]/90 transition-colors shadow-lg shadow-[#FFD84D]/10"
                >
                  <Download className="h-4 w-4" />
                  <span>Get Worksheet (PDF)</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
