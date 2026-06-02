"use client";

import React, { useState } from "react";
import { BookOpen, Calendar, HelpCircle } from "lucide-react";

type Milestone = {
  year: string;
  title: string;
  desc: string;
  culturalImpact: string;
  aiComment: string;
};

const milestones: Milestone[] = [
  {
    year: "1933",
    title: "Koziołek Matołek & Roots",
    desc: "Kornel Makuszyński and Marian Walentynowicz create the first illustrated stories of Koziołek Matołek, searching for Pacanów.",
    culturalImpact: "Laying the foundation for the Polish children's comic school: combining rhymed text under illustrations with a joyful road-trip narrative.",
    aiComment: "AI digitized historical panels for semantic analysis of rhymed humor from the 1930s."
  },
  {
    year: "1957",
    title: "Tytus's Debut in Youth World",
    desc: "Papcio Chmiel publishes the first comic panels featuring Tytus, Romek, and A'Tomek in the youth magazine 'Świat Młodych'.",
    culturalImpact: "The birth of the iconic trio. Tytus—a chimpanzee with human aspirations—becomes a symbol of seeking wisdom through play.",
    aiComment: "Graphics algorithms reconstructed damaged print archives from 1957, restoring the original color saturation of the first panels."
  },
  {
    year: "1966",
    title: "The First Album (Book I)",
    desc: "Official album release of 'Tytus becomes a scout'. The comic reaches mass distribution with print runs in the millions.",
    culturalImpact: "Initiation of the legendary landscape-format booklet series that shaped the slang and language of Polish youth.",
    aiComment: "Computational text analysis detects over 400 unique neologisms coined by Papcio, such as 'Banalot' or 'humanization'."
  },
  {
    year: "1990s",
    title: "Evolution & The New Generation",
    desc: "Poland's transition brings opening to Western markets. New graphic novels, independent comics, and debuts of young authors emerge.",
    culturalImpact: "The transition of comics from purely children's literature to mature graphic novels tackling complex social issues.",
    aiComment: "AI recommendation systems categorize comics from this period by sociological topics to support cultural studies."
  },
  {
    year: "2026",
    title: "Digital Twin in District.org",
    desc: "The Papcio Chmiel Science Center integrates cultural heritage with modern technologies in a virtual digital twin environment.",
    culturalImpact: "Comics become an interactive laboratory. Physics, ecology, and technology are taught through a humorous storytelling framework.",
    aiComment: "Current stage. The AI Guide serves as a mentor, and generative systems allow students to co-create comics directly in the browser."
  }
];

export default function KulturaInteractive() {
  const [activeIdx, setActiveIdx] = useState<number>(1);
  const current = milestones[activeIdx];

  return (
    <div className="rounded-2xl border border-glass bg-glass p-6 md:p-8">
      <h3 className="font-display text-lg font-bold text-white mb-2">
        Youth World Archive (Comic Timeline)
      </h3>
      <p className="text-xs text-zinc-400 mb-6">
        Trace the key turning points of Polish graphic art. Click on individual years to unlock cultural lessons and AI analyses.
      </p>

      {/* Timeline steps */}
      <div className="relative mb-10 pb-4 border-b border-zinc-900 overflow-x-auto flex space-x-6 scrollbar-thin">
        {milestones.map((m, idx) => {
          const isActive = idx === activeIdx;

          return (
            <button
              key={m.year}
              onClick={() => setActiveIdx(idx)}
              className="flex-shrink-0 flex flex-col items-center focus:outline-none pb-2 group"
            >
              <div className="flex items-center space-x-1.5">
                <Calendar className={`h-3.5 w-3.5 ${isActive ? "text-[#48D8FF]" : "text-zinc-600"}`} />
                <span
                  className={`font-display text-sm font-extrabold transition-colors duration-200 ${
                    isActive ? "text-[#48D8FF] text-glow-cyan" : "text-zinc-500 group-hover:text-zinc-400"
                  }`}
                >
                  {m.year}
                </span>
              </div>
              <span className={`text-[10px] mt-1 text-zinc-500 max-w-[120px] text-center truncate ${isActive ? "text-white" : ""}`}>
                {m.title}
              </span>
              {isActive && <div className="absolute bottom-0 h-0.5 w-16 bg-[#48D8FF] rounded-full" />}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Milestones detail view */}
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center space-x-2 rounded-full bg-[#48D8FF]/10 border border-[#48D8FF]/20 px-3 py-1 text-xs text-[#48D8FF]">
            <BookOpen className="h-3.5 w-3.5" />
            <span className="font-display font-medium uppercase tracking-wider">Historical Era</span>
          </div>

          <h4 className="font-display text-xl font-bold text-white">
            {current.title}
          </h4>

          <p className="text-sm leading-relaxed text-zinc-300">
            {current.desc}
          </p>

          <div className="p-4 rounded-xl bg-zinc-950/40 border border-zinc-900 mt-4">
            <h5 className="font-display text-xs font-semibold text-zinc-400 uppercase tracking-wider">
              Cultural Impact:
            </h5>
            <p className="mt-1 text-xs leading-relaxed text-zinc-500">
              {current.culturalImpact}
            </p>
          </div>
        </div>

        {/* AI Historical curator comment */}
        <div className="lg:col-span-5 flex flex-col justify-end">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
            <div className="flex items-center space-x-2 text-[#48D8FF] mb-3">
              <HelpCircle className="h-4 w-4" />
              <span className="font-display text-[10px] font-bold uppercase tracking-widest text-white">
                AI Archival Analysis
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed italic">
              &ldquo;{current.aiComment}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
