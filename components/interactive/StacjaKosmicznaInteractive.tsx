"use client";

import React, { useState } from "react";
import { Rocket, Play, RefreshCw, CheckCircle, Orbit, ShieldCheck } from "lucide-react";

type Option = {
  id: string;
  name: string;
  desc: string;
};

const stagesList: Option[] = [
  { id: "1", name: "1-Stage (Lightweight)", desc: "Good for short stratification leaps. Quick lift-off, no fuel reserves." },
  { id: "2", name: "2-Stage (Optimal)", desc: "Standard configuration. Enables dropping empty boosters mid-flight." },
  { id: "3", name: "3-Stage (Heavy Duty)", desc: "Built according to A'Tomek's plans. Capable of reaching deep space orbit." }
];

const fuelList: Option[] = [
  { id: "soda", name: "Pressurized Soda Water", desc: "Eco-friendly solution. Bubbles of CO2 outputting steady continuous thrust." },
  { id: "banana", name: "Banana Fusion Propulsion", desc: "Zany organic fuel with massive energy. Caution: May cause orbital slipping!" },
  { id: "coal", name: "Traditional Fuel (Coal)", desc: "Lots of smoke, weak space efficiency. Tytus must shovel it manually." }
];

const suitList: Option[] = [
  { id: "helmet", name: "Retro Helmet & Tube", desc: "Helmet connected to a oxygen tank. Guarantees vacuum protection (on paper)." },
  { id: "mucha", name: "Elegant Bow Tie", desc: "Tytus claims that space travel requires style. Zero protection against vacuum." },
  { id: "parasol", name: "Space Umbrella shield", desc: "Protects against micro-meteorites. Handy for braking and landing." }
];

export default function StacjaKosmicznaInteractive() {
  const [stages, setStages] = useState<string>("2");
  const [fuel, setFuel] = useState<string>("banana");
  const [suit, setSuit] = useState<string>("helmet");

  const [simResult, setSimResult] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [cardDownloaded, setCardDownloaded] = useState<boolean>(false);

  const handleLaunch = () => {
    let report = "";
    let isSuccess = false;

    if (stages === "3" && fuel === "banana" && suit === "helmet") {
      report = "A'TOMEK'S ORBITAL ANALYSIS: The 3-stage rocket powered by Banana Fusion has reached second cosmic velocity! Tytus entered a stable orbit and performed a successful spacer walk. AI Guide confirms: Banana Fusion is functional! Outcome: Mission completed with 100% success!";
      isSuccess = true;
    } else if (stages === "2" && fuel === "soda" && suit === "parasol") {
      report = "A'TOMEK'S ORBITAL ANALYSIS: Soda water provided clean effervescent thrust. The rocket crossed the mesosphere, whereupon Tytus opened the space umbrella and safely glided back down into the middle of a scout gathering. Outcome: Flight complete with safe funny landing!";
      isSuccess = true;
    } else if (fuel === "coal") {
      report = "MISSION CONTROL ALERT: Shoveling coal created such a smoke blanket that Tytus lost his bearing right above the neighbor's chimney. Romek had to retrieve the rocket using a fishing rod. Outcome: Educational launch failure!";
      isSuccess = false;
    } else if (stages === "1" && suit === "mucha") {
      report = "PROFESSOR T. ALENT'S STATEMENT: The single-stage booster burned out in 3 seconds. Tytus looked extremely handsome in his bow tie, but a lack of oxygen forced immediate evacuation. Outcome: Stable orbit not reached!";
      isSuccess = false;
    } else {
      report = `MISSION LOG: The configuration [Rocket: ${stages}-stage] fueled by [${fuelList.find(f => f.id === fuel)?.name}] and equipped with [${suitList.find(s => s.id === suit)?.name}] crossed the stratus. Unfortunately, stratospheric jet streams pushed the craft off-course. Tytus reports zero bananas on board. Outcome: Emergency return initiated!`;
      isSuccess = false;
    }

    setSimResult(report);
    setSuccess(isSuccess);
    setCardDownloaded(false);
  };

  const handleReset = () => {
    setStages("2");
    setFuel("banana");
    setSuit("helmet");
    setSimResult(null);
    setCardDownloaded(false);
  };

  return (
    <div className="rounded-2xl border border-glass bg-glass p-6 md:p-8">
      <h3 className="font-display text-lg font-bold text-white mb-2">
        Tytus&apos;s Space Rocket Simulator
      </h3>
      <p className="text-xs text-zinc-400 mb-6">
        Help Tytus configure his orbital spacecraft. Pick the rocket structure, fuel it with absurd energy, and test orbital gravity principles.
      </p>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Stages */}
          <div>
            <span className="font-display text-xs font-bold text-[#B6FF4D] uppercase tracking-widest block mb-3">
              1. Rocket Stages
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {stagesList.map((s) => (
                <button
                  key={s.id}
                  onClick={() => { setStages(s.id); setSimResult(null); }}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    stages === s.id
                      ? "border-[#B6FF4D] bg-[#B6FF4D]/5 text-white"
                      : "border-zinc-800 bg-zinc-950/40 text-zinc-400 hover:border-zinc-700"
                  }`}
                >
                  <div className="text-xs font-bold font-display">{s.name}</div>
                  <div className="text-[9px] text-zinc-500 mt-1 leading-normal">{s.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Fuel */}
          <div>
            <span className="font-display text-xs font-bold text-[#B6FF4D] uppercase tracking-widest block mb-3">
              2. Propulsion Source (Fuel)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {fuelList.map((f) => (
                <button
                  key={f.id}
                  onClick={() => { setFuel(f.id); setSimResult(null); }}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    fuel === f.id
                      ? "border-[#B6FF4D] bg-[#B6FF4D]/5 text-white"
                      : "border-zinc-800 bg-zinc-950/40 text-zinc-400 hover:border-zinc-700"
                  }`}
                >
                  <div className="text-xs font-bold font-display">{f.name}</div>
                  <div className="text-[9px] text-zinc-500 mt-1 leading-normal">{f.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Suit */}
          <div>
            <span className="font-display text-xs font-bold text-[#B6FF4D] uppercase tracking-widest block mb-3">
              3. Space Suit Gear
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {suitList.map((s) => (
                <button
                  key={s.id}
                  onClick={() => { setSuit(s.id); setSimResult(null); }}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    suit === s.id
                      ? "border-[#B6FF4D] bg-[#B6FF4D]/5 text-white"
                      : "border-zinc-800 bg-zinc-950/40 text-zinc-400 hover:border-zinc-700"
                  }`}
                >
                  <div className="text-xs font-bold font-display">{s.name}</div>
                  <div className="text-[9px] text-zinc-500 mt-1 leading-normal">{s.desc}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Visualizer & Results Column */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-zinc-950/50 border border-zinc-850 rounded-2xl p-6">
          <div className="text-center py-6 border border-dashed border-zinc-850 rounded-xl bg-zinc-950/40 relative overflow-hidden">
            <span className="absolute top-2 right-2 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B6FF4D] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B6FF4D]"></span>
            </span>

            <Rocket className="mx-auto h-8 w-8 text-[#B6FF4D] animate-bounce" />
            <h4 className="mt-4 font-display text-xs font-bold text-zinc-300 uppercase tracking-widest">
              Launch Configuration:
            </h4>
            <div className="mt-3 text-xs text-white font-medium space-y-1">
              <div>Booster: <span className="text-[#B6FF4D]">{stagesList.find(s => s.id === stages)?.name}</span></div>
              <div>Fuel: <span className="text-[#B6FF4D]">{fuelList.find(f => f.id === fuel)?.name}</span></div>
              <div>Suit gear: <span className="text-[#B6FF4D]">{suitList.find(s => s.id === suit)?.name}</span></div>
            </div>
          </div>

          {/* Results Output */}
          {simResult ? (
            <div className={`mt-6 p-4 rounded-xl border ${
              success
                ? "border-[#B6FF4D]/35 bg-[#B6FF4D]/5 text-zinc-300"
                : "border-red-950 bg-red-950/15 text-zinc-300"
            }`}>
              <div className="flex items-center space-x-2 mb-2">
                <Orbit className={`h-4 w-4 ${success ? "text-[#B6FF4D]" : "text-zinc-600"}`} />
                <span className="font-display text-[9px] font-bold uppercase tracking-widest text-white">
                  Orbital Physics Report
                </span>
              </div>
              <p className="text-xs leading-relaxed italic">{simResult}</p>
            </div>
          ) : (
            <div className="mt-6 text-center text-xs text-zinc-500">
              Select configuration variables and click &quot;Launch Tytus&apos;s Rocket&quot; to test orbits.
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-zinc-900 flex space-x-3">
            <button
              onClick={handleReset}
              className="flex items-center justify-center p-3 border border-zinc-800 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
              title="Reset configuration"
            >
              <RefreshCw className="h-4 w-4" />
            </button>

            {success && simResult ? (
              cardDownloaded ? (
                <div className="flex-1 flex items-center justify-center space-x-1.5 px-4 py-3 bg-[#B6FF4D]/10 border border-[#B6FF4D]/25 rounded-xl text-xs text-[#B6FF4D] font-bold">
                  <CheckCircle className="h-4 w-4" />
                  <span>Mission Card Downloaded!</span>
                </div>
              ) : (
                <button
                  onClick={() => setCardDownloaded(true)}
                  className="flex-1 flex items-center justify-center space-x-1.5 px-4 py-3 bg-[#B6FF4D] text-black rounded-xl font-display text-xs font-bold hover:bg-[#B6FF4D]/90 transition-colors shadow-lg"
                >
                  <ShieldCheck className="h-4 w-4" />
                  <span>Get Mission Card</span>
                </button>
              )
            ) : (
              <button
                onClick={handleLaunch}
                className="flex-1 flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-[#B6FF4D] text-black font-display text-xs font-bold hover:bg-[#B6FF4D]/90 transition-colors shadow-lg shadow-[#B6FF4D]/10"
              >
                <Play className="h-4 w-4 fill-current" />
                <span>Launch Tytus&apos;s Rocket</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
