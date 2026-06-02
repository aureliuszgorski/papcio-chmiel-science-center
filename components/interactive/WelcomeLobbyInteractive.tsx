"use client";

import React, { useState } from "react";
import { User, BookOpen, Heart, Award, ArrowRight, Bot, Compass, CheckCircle } from "lucide-react";

type Path = {
  id: string;
  name: string;
  icon: React.ReactNode;
  tagline: string;
  steps: string[];
  recommendation: string;
  aiWelcome: string;
};

const paths: Path[] = [
  {
    id: "nauczyciel",
    name: "Teacher (Educator)",
    icon: <BookOpen className="h-5 w-5" />,
    tagline: "Ecosystem lessons and STEM guidelines",
    steps: ["Launch Gate", "Papcio's Classroom", "Speech Bubble Academy", "Professor's Vehicle Institute", "Romek's Geographical Mission"],
    recommendation: "Focus on downloading curriculum worksheets from Papcio's Classroom and Romek's Geographical Mission.",
    aiWelcome: "Greetings, Professor! I have mapped an educational path aligned with school curriculums. Explore how to connect Tytus's adventures with STEM learning."
  },
  {
    id: "rodzic",
    name: "Parent (Family)",
    icon: <Heart className="h-5 w-5" />,
    tagline: "Creative learning at home",
    steps: ["Launch Gate", "Papcio's Comic Studio", "Professor's Vehicle Institute", "Speech Bubble Academy", "Mission: Humanize Tytus"],
    recommendation: "Build a custom vehicle in the Professor's Institute, then write a funny story in the Speech Bubble Academy.",
    aiWelcome: "Hello! This path focuses on family collaboration and learning through errors. Test the banana rocket booster and inspect the outcome!"
  },
  {
    id: "uczen",
    name: "Student (Explorer)",
    icon: <Compass className="h-5 w-5" />,
    tagline: "Experiments and comic mission",
    steps: ["Launch Gate", "Tytus's Space Station", "Professor's Vehicle Institute", "Mission: Humanize Tytus"],
    recommendation: "Launch the rocket at the Space Station and try to humanize Tytus using behavioral logic selections.",
    aiWelcome: "Hi, Young Explorer! A rocket launching test and vehicle workshop are waiting for you. Collect the complete set of Mission Cards!"
  },
  {
    id: "sponsor",
    name: "Partner / Municipality / Sponsor",
    icon: <Award className="h-5 w-5" />,
    tagline: "Mecenat and pop-up kits setup",
    steps: ["Launch Gate", "Partners & Sponsors Hangar", "Papcio's Digital Base", "Mission: Humanize Tytus"],
    recommendation: "Check the blueprints of mobile Pop-up kits in the Partners Hangar and learn how to fund an activation in your city.",
    aiWelcome: "Hello. I invite you to examine the reach metrics of our pop-up setups and classroom pilots. Our AI will calculate target CSR outcomes."
  },
  {
    id: "fan",
    name: "Comic Fan (Classic)",
    icon: <User className="h-5 w-5" />,
    tagline: "A nostalgic journey with Papcio",
    steps: ["Launch Gate", "Papcio's Comic Studio", "Youth World Archive", "Romek's Geographical Mission"],
    recommendation: "Step into the reconstructed workshop in the Comic Studio and browse the vintage print archives.",
    aiWelcome: "Welcome! I have prepared a nostalgic trip back to the 50s and 60s. Search classic print pages for old neologisms."
  }
];

export default function WelcomeLobbyInteractive() {
  const [selectedPath, setSelectedPath] = useState<string>("uczen");
  const [explorerCardGenerated, setExplorerCardGenerated] = useState<boolean>(false);
  const current = paths.find((p) => p.id === selectedPath)!;

  return (
    <div className="rounded-2xl border border-glass bg-glass p-6 md:p-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Profile Selector */}
        <div className="lg:col-span-5 border-b border-zinc-800 pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
          <h3 className="font-display text-lg font-bold text-white mb-4">
            Step 1: Choose your Explorer Profile
          </h3>
          <p className="text-xs text-zinc-400 mb-6">
            Select your role to let the Space Launch Gate generate custom STEM missions and align the AI Guide.
          </p>

          <div className="space-y-3">
            {paths.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setSelectedPath(p.id);
                  setExplorerCardGenerated(false);
                }}
                className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-200 text-left ${
                  selectedPath === p.id
                    ? "border-[#B6FF4D] bg-[#B6FF4D]/5 text-white"
                    : "border-zinc-800 bg-zinc-950/40 text-zinc-400 hover:border-zinc-700 hover:text-zinc-300"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`p-2 rounded-lg ${
                      selectedPath === p.id ? "bg-[#B6FF4D]/10 text-[#B6FF4D]" : "bg-zinc-900 text-zinc-500"
                    }`}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <div className="font-display text-sm font-bold">{p.name}</div>
                    <div className="text-[11px] text-zinc-500 mt-0.5">{p.tagline}</div>
                  </div>
                </div>
                {selectedPath === p.id && <div className="h-2 w-2 rounded-full bg-[#B6FF4D]" />}
              </button>
            ))}
          </div>
        </div>

        {/* AI Guide & Itinerary */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            {/* AI Guide Chat Bubble */}
            <div className="flex items-start space-x-3 bg-zinc-950/60 rounded-2xl border border-zinc-800 p-4 mb-6">
              <div className="bg-[#B6FF4D]/10 text-[#B6FF4D] p-2 rounded-xl border border-[#B6FF4D]/20 mt-1 shrink-0">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <span className="font-display text-[10px] font-bold text-[#B6FF4D] uppercase tracking-widest">
                  AI GUIDE BOT (Launch Gate)
                </span>
                <p className="mt-1 text-xs text-zinc-300 leading-relaxed italic">
                  &ldquo;{current.aiWelcome}&rdquo;
                </p>
              </div>
            </div>

            {/* Custom Roadmap Path */}
            <h3 className="font-display text-sm font-bold text-white mb-4">
              Your customized mission roadmap:
            </h3>

            <div className="relative pl-6 space-y-4 border-l border-zinc-800">
              {current.steps.map((step, idx) => (
                <div key={idx} className="relative flex items-center">
                  {/* Indicator Dot */}
                  <span
                    className={`absolute -left-[30px] flex h-4 w-4 items-center justify-center rounded-full border text-[9px] font-bold ${
                      idx === 0
                        ? "bg-[#B6FF4D] border-[#B6FF4D] text-black"
                        : "bg-[#05070A] border-zinc-700 text-zinc-500"
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <div>
                    <span className="font-display text-xs font-bold text-white">
                      {step}
                    </span>
                    {idx === 0 && (
                      <span className="ml-2 text-[9px] px-1.5 py-0.5 rounded-md bg-[#B6FF4D]/10 text-[#B6FF4D] border border-[#B6FF4D]/20">
                        You are here
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Recommendation Box */}
            <div className="mt-6 p-4 rounded-xl bg-zinc-950/30 border border-zinc-800/80">
              <h4 className="font-display text-xs font-semibold text-zinc-300 uppercase tracking-widest">
                A&apos;Tomek&apos;s Hint:
              </h4>
              <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                {current.recommendation}
              </p>
            </div>
          </div>

          {/* Action CTA */}
          <div className="mt-8 border-t border-zinc-800/50 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="text-left">
              <span className="text-[11px] text-zinc-500 uppercase tracking-wider">
                Profile config
              </span>
              <div className="text-xs text-zinc-300 font-medium">
                {current.name} profile ready to launch
              </div>
            </div>

            {explorerCardGenerated ? (
              <div className="flex items-center space-x-2 text-[#B6FF4D] text-xs font-bold bg-[#B6FF4D]/10 border border-[#B6FF4D]/20 px-4 py-2.5 rounded-xl">
                <CheckCircle className="h-4 w-4" />
                <span>Explorer Mission Card Generated!</span>
              </div>
            ) : (
              <button
                onClick={() => setExplorerCardGenerated(true)}
                className="flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-[#B6FF4D] text-black font-display text-xs font-bold hover:bg-[#B6FF4D]/90 transition-colors shadow-lg"
              >
                <span>Generate Explorer Card</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
