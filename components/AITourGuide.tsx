import React from "react";
import WelcomeLobbyInteractive from "./interactive/WelcomeLobbyInteractive";

export default function AITourGuide() {
  return (
    <div className="py-12" id="przewodnik">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 border-4 border-black bg-comic-green px-3 py-1 shadow-[2px_2px_0px_0px_#000000]">
            <span className="h-2 w-2 rounded-full bg-black animate-pulse" />
            <span className="font-display font-extrabold uppercase text-xs text-black tracking-widest">PILOT AI CENTER</span>
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            Virtual Educational Tour Guide
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-400 font-medium">
            Select your profile to let the AI draft a personalized activities itinerary tailored to your learning path.
          </p>
        </div>

        <WelcomeLobbyInteractive />
      </div>
    </div>
  );
}
