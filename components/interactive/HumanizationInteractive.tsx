"use client";

import React, { useState } from "react";
import { Sparkles, Smile, ShieldAlert, Award } from "lucide-react";

type Scenario = {
  title: string;
  situation: string;
  options: {
    label: string;
    type: "tytus" | "ai" | "human";
    text: string;
    explanation: string;
  }[];
};

const scenarios: Scenario[] = [
  {
    title: "Mission 1: High-Tech Library Visit",
    situation: "Tytus enters a fully automated multimedia library. He notices scanning robots and VR stations. How should he rent a comic book?",
    options: [
      {
        label: "Choice A",
        type: "tytus",
        text: "Shake hands with the scanning robot and offer to eat the printed paper manual.",
        explanation: "TYTUS (Absurd): Classic chimp behavior trying to adapt technology to digestive flora. Leads to library short-circuits and index sheet eating."
      },
      {
        label: "Choice B",
        type: "ai",
        text: "Analyze the library network topology, query the catalog database API, and pull the PDF directly to a reader device.",
        explanation: "AI (Technology): A 100% optimized path. Bypasses physical interactions completely, losing the sensory pleasure of paper and printing ink smells."
      },
      {
        label: "Choice C",
        type: "human",
        text: "Use the touch terminal to search the system, locate the physical book on a shelf, and ask the librarian for reading recommendations.",
        explanation: "HUMAN (Balance): Melds digital search efficiencies with social relationship building and tactile paper reading."
      }
    ]
  },
  {
    title: "Mission 2: Savoir-Vivre at the Buffet",
    situation: "At the digital twin celebration banquet, Tytus stands before a buffet table loaded with delicious snacks. What should he do?",
    options: [
      {
        label: "Choice A",
        type: "ai",
        text: "Calculate intake thresholds (2200 kcal), load exactly 150g salmon, 100g rice, and consume in the designated time slot.",
        explanation: "AI (Technology): Perfect mathematical calories allocation, but ignores the cultural and social values of dining and celebration."
      },
      {
        label: "Choice B",
        type: "tytus",
        text: "Jump onto the middle of the table, stuff pockets with cheese cubes, and throw olives at guests to test trajectories.",
        explanation: "TYTUS (Absurd): Energetic chimpanzee spontaneity. Breaches diplomatic protocols and triggers prompt removal from the district premises."
      },
      {
        label: "Choice C",
        type: "human",
        text: "Put small portions on a plate, thank the catering staff, and initiate a conversation with the business partner nearby.",
        explanation: "HUMAN (Balance): Optimal approach satisfying physical needs while respecting community standards and collaborators."
      }
    ]
  }
];

export default function HumanizationInteractive() {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedType, setSelectedType] = useState<"tytus" | "ai" | "human" | null>(null);

  const current = scenarios[currentIdx];
  const activeOption = current.options.find((o) => o.type === selectedType);

  const handleNext = () => {
    setSelectedType(null);
    setCurrentIdx((prev) => (prev + 1) % scenarios.length);
  };

  return (
    <div className="rounded-2xl border border-glass bg-glass p-6 md:p-8">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-display text-lg font-bold text-white">
          Mission: Humanize Tytus (Behavioral Testing)
        </h3>
        <span className="text-xs text-zinc-500 font-medium">
          Scenario {currentIdx + 1} of {scenarios.length}
        </span>
      </div>
      <p className="text-xs text-zinc-400 mb-6">
        Accompany Tytus in his social integration tests. Select options to observe the AI analysis on chimp behaviors, computer logic, and human values.
      </p>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Scenario and Options */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-5 rounded-2xl bg-zinc-950/60 border border-zinc-800">
            <h4 className="font-display text-sm font-bold text-[#B6FF4D] uppercase tracking-wider mb-2">
              {current.title}
            </h4>
            <p className="text-xs leading-relaxed text-zinc-300">
              {current.situation}
            </p>
          </div>

          <div className="space-y-3">
            {current.options.map((opt) => (
              <button
                key={opt.type}
                onClick={() => setSelectedType(opt.type)}
                className={`w-full p-4 rounded-xl border text-left transition-all ${
                  selectedType === opt.type
                    ? "border-[#B6FF4D] bg-[#B6FF4D]/5 text-white"
                    : "border-zinc-800 bg-zinc-950/30 text-zinc-400 hover:border-zinc-700 hover:text-zinc-300"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                    selectedType === opt.type ? "bg-[#B6FF4D] text-black" : "bg-zinc-900 text-zinc-500"
                  }`}>
                    {opt.label}
                  </span>
                  <span className="font-display text-xs font-bold text-zinc-300">
                    {opt.type === "tytus" ? "Absurd Route" : opt.type === "ai" ? "Computer Route" : "Balance Route"}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                  {opt.text}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Analyzer Console */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-zinc-950/50 border border-zinc-850 rounded-2xl p-6 min-h-[300px]">
          <div>
            <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-4">
              <span className="font-display text-xs font-bold text-white uppercase tracking-widest">
                HUMAN+AI BEHAVIOR CONSOLE
              </span>
              <Sparkles className="h-4 w-4 text-[#B6FF4D] animate-spin" />
            </div>

            {activeOption ? (
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  {activeOption.type === "tytus" ? (
                    <Smile className="h-5 w-5 text-[#FFD84D]" />
                  ) : activeOption.type === "ai" ? (
                    <Sparkles className="h-5 w-5 text-[#48D8FF]" />
                  ) : (
                    <Award className="h-5 w-5 text-[#B6FF4D]" />
                  )}
                  <span className="font-display text-xs font-bold text-white">
                    Metrics: {activeOption.type.toUpperCase()}
                  </span>
                </div>

                <p className="text-xs leading-relaxed text-zinc-300 bg-zinc-950 p-4 rounded-xl border border-zinc-850 italic">
                  {activeOption.explanation}
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center text-zinc-600">
                <ShieldAlert className="h-8 w-8 text-zinc-700 mb-3" />
                <span className="text-xs max-w-[200px]">
                  Select one of the decisions on the left panel to activate the behavior analyzer.
                </span>
              </div>
            )}
          </div>

          <div className="mt-8 pt-4 border-t border-zinc-900 flex justify-end">
            <button
              onClick={handleNext}
              className="px-5 py-2.5 rounded-xl border border-zinc-800 text-xs font-display font-bold text-zinc-400 hover:bg-zinc-900 hover:text-white transition-all"
            >
              Next Scenario
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
