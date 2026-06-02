"use client";

import React, { useState } from "react";
import { Wrench, Play, RotateCcw, AlertTriangle, Lightbulb } from "lucide-react";

type Option = {
  id: string;
  name: string;
  desc: string;
};

const bases: Option[] = [
  { id: "wanna", name: "Metal Bathtub", desc: "Solid bath tub. Excellent buoyancy characteristics, provided the plug is closed." },
  { id: "beczka", name: "Wooden Barrel", desc: "Sauerkraut barrel. Rolls downhill perfectly, but lacks aerodynamic symmetry." },
  { id: "globus", name: "School Globe", desc: "Hollow geographic globe. Assures trip around the world on a small scale." }
];

const propulsions: Option[] = [
  { id: "smiglo", name: "Hand-cranked Propeller", desc: "Powered by Tytus's muscles. Operates without grid power, provided bananas are supplied." },
  { id: "rakieta", name: "Rocket Booster", desc: "Absurdly powerful engine fueled by pressurized soda water." },
  { id: "zagiel", name: "Bedsheet Sail", desc: "Classic eco-propulsion. Requires intense blowing or heavy stratus winds." }
];

const attachments: Option[] = [
  { id: "parasol", name: "Space Umbrella", desc: "Protects from rain, or acts as a makeshift deceleration parachute during falls." },
  { id: "skrzydla", name: "Butterfly Wings", desc: "Cute cardboard wings, adding poetic elegance and minimal lift to the craft." },
  { id: "antena", name: "AI Antenna receiver", desc: "Used for connecting to District Central to pull navigational coordinates." }
];

export default function GarazInteractive() {
  const [selectedBase, setSelectedBase] = useState<string>("wanna");
  const [selectedProp, setSelectedProp] = useState<string>("zagiel");
  const [selectedAttach, setSelectedAttach] = useState<string>("parasol");

  const [testResult, setTestResult] = useState<string | null>(null);
  const [testSuccess, setTestSuccess] = useState<boolean>(false);

  const handleTestFlight = () => {
    let report = "";
    let success = false;

    if (selectedBase === "wanna" && selectedProp === "rakieta" && selectedAttach === "parasol") {
      report = "PHYSICAL ANALYSIS AI: Rocket bathtub shot out like a bullet! The umbrella saved Tytus from high altitude wind currents, but you landed in the neighbor's compost. Outcome: Success with minor bruises!";
      success = true;
    } else if (selectedBase === "wanna" && selectedProp === "zagiel" && selectedAttach === "skrzydla") {
      report = "PHYSICAL ANALYSIS AI: The bedsheet caught wind, and the cardboard wings began to flutter. The tub rose to fence height, landing safely on a hay pile. Archimedes would cry from joy. Outcome: Successful lift-off, low velocity!";
      success = true;
    } else if (selectedBase === "beczka" && selectedProp === "rakieta" && selectedAttach === "antena") {
      report = "SECURITY ALERT: Rocket booster blew the barrel staves to pieces! AI receiver outputted error: 'No geometric alignment'. Tytus fled to a tree branches. Outcome: Educational test failure!";
      success = false;
    } else if (selectedBase === "globus" && selectedProp === "smiglo") {
      report = "PHYSICAL ANALYSIS AI: Spinning the propeller rotated the globe around its axis. Tytus got dizzy, mistook directions, claiming South Pole lies near Radom. Outcome: Rotation experiment success!";
      success = true;
    } else {
      report = `PHYSICAL ANALYSIS AI: Assembly of [${bases.find(b => b.id === selectedBase)?.name}] + [${propulsions.find(p => p.id === selectedProp)?.name}] + [${attachments.find(a => a.id === selectedAttach)?.name}] created an absurd design. Craft lifted 1cm, went 'pyr, pyr' and sat down. AI suggests rocket booster!`;
      success = false;
    }

    setTestResult(report);
    setTestSuccess(success);
  };

  const handleReset = () => {
    setSelectedBase("wanna");
    setSelectedProp("zagiel");
    setSelectedAttach("parasol");
    setTestResult(null);
  };

  return (
    <div className="rounded-2xl border border-glass bg-glass p-6 md:p-8">
      <h3 className="font-display text-lg font-bold text-white mb-2">
        Professor T. Alent&apos;s Vehicle Institute
      </h3>
      <p className="text-xs text-zinc-400 mb-6">
        Construct your custom vehicle from spare parts. Check if the configuration passes the aerodynamic simulation.
      </p>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Builder Panels */}
        <div className="lg:col-span-7 space-y-6">
          {/* Base */}
          <div>
            <span className="font-display text-xs font-bold text-[#FF4D4D] uppercase tracking-widest block mb-3">
              1. Chassis base
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {bases.map((b) => (
                <button
                  key={b.id}
                  onClick={() => { setSelectedBase(b.id); setTestResult(null); }}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedBase === b.id
                      ? "border-[#FF4D4D] bg-[#FF4D4D]/5 text-white"
                      : "border-zinc-800 bg-zinc-950/40 text-zinc-400 hover:border-zinc-700"
                  }`}
                >
                  <div className="text-xs font-bold font-display">{b.name}</div>
                  <div className="text-[9px] text-zinc-500 mt-1 leading-normal">{b.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Propulsion */}
          <div>
            <span className="font-display text-xs font-bold text-[#FF4D4D] uppercase tracking-widest block mb-3">
              2. Engine propulsion
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {propulsions.map((p) => (
                <button
                  key={p.id}
                  onClick={() => { setSelectedProp(p.id); setTestResult(null); }}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedProp === p.id
                      ? "border-[#FF4D4D] bg-[#FF4D4D]/5 text-white"
                      : "border-zinc-800 bg-zinc-950/40 text-zinc-400 hover:border-zinc-700"
                  }`}
                >
                  <div className="text-xs font-bold font-display">{p.name}</div>
                  <div className="text-[9px] text-zinc-500 mt-1 leading-normal">{p.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Attachment */}
          <div>
            <span className="font-display text-xs font-bold text-[#FF4D4D] uppercase tracking-widest block mb-3">
              3. Utility Gear
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {attachments.map((a) => (
                <button
                  key={a.id}
                  onClick={() => { setSelectedAttach(a.id); setTestResult(null); }}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedAttach === a.id
                      ? "border-[#FF4D4D] bg-[#FF4D4D]/5 text-white"
                      : "border-zinc-800 bg-zinc-950/40 text-zinc-400 hover:border-zinc-700"
                  }`}
                >
                  <div className="text-xs font-bold font-display">{a.name}</div>
                  <div className="text-[9px] text-zinc-500 mt-1 leading-normal">{a.desc}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Visualizer and AI Report */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-zinc-950/50 border border-zinc-850 rounded-2xl p-6">
          <div className="text-center py-6 border border-dashed border-zinc-800 rounded-xl bg-zinc-950/40 relative overflow-hidden">
            <span className="absolute top-2 right-2 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF4D4D] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF4D4D]"></span>
            </span>

            <Wrench className="mx-auto h-8 w-8 text-[#FF4D4D] animate-bounce" />
            <h4 className="mt-4 font-display text-xs font-bold text-zinc-300 uppercase tracking-widest">
              Assembly Visualizer:
            </h4>
            <div className="mt-3 text-xs text-white font-medium space-y-1">
              <div>Chassis: <span className="text-[#FF4D4D]">{bases.find(b => b.id === selectedBase)?.name}</span></div>
              <div>Engine: <span className="text-[#FF4D4D]">{propulsions.find(p => p.id === selectedProp)?.name}</span></div>
              <div>Utility: <span className="text-[#FF4D4D]">{attachments.find(a => a.id === selectedAttach)?.name}</span></div>
            </div>
          </div>

          {/* Test results output */}
          {testResult ? (
            <div className={`mt-6 p-4 rounded-xl border ${
              testSuccess
                ? "border-[#B6FF4D]/35 bg-[#B6FF4D]/5 text-zinc-300"
                : "border-red-950 bg-red-950/15 text-zinc-300"
            }`}>
              <div className="flex items-center space-x-2 mb-2">
                {testSuccess ? (
                  <Lightbulb className="h-4 w-4 text-[#B6FF4D]" />
                ) : (
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                )}
                <span className="font-display text-[9px] font-bold uppercase tracking-widest text-white">
                  Simulation Report
                </span>
              </div>
              <p className="text-xs leading-relaxed italic">{testResult}</p>
            </div>
          ) : (
            <div className="mt-6 text-center text-xs text-zinc-500">
              Pick your parts and click &quot;Initiate Flight Test&quot; to inspect engineering spryness.
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-zinc-900 flex space-x-3">
            <button
              onClick={handleReset}
              className="flex items-center justify-center p-3 border border-zinc-800 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
              title="Reset configuration"
            >
              <RotateCcw className="h-4 w-4" />
            </button>

            <button
              onClick={handleTestFlight}
              className="flex-1 flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-[#FF4D4D] text-white font-display text-xs font-bold hover:bg-[#FF4D4D]/90 transition-colors shadow-lg"
            >
              <Play className="h-4 w-4 fill-current" />
              <span>Initiate Flight Test</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
