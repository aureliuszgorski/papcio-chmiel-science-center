"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Sparkles, Target, Compass, Terminal, ShieldCheck, UserCheck } from "lucide-react";
import { rooms } from "@/data/rooms";
import WelcomeLobbyInteractive from "@/components/interactive/WelcomeLobbyInteractive";
import StacjaKosmicznaInteractive from "@/components/interactive/StacjaKosmicznaInteractive";
import PracowniaInteractive from "@/components/interactive/PracowniaInteractive";
import KomiksLabInteractive from "@/components/interactive/KomiksLabInteractive";
import GarazInteractive from "@/components/interactive/GarazInteractive";
import HumanizationInteractive from "@/components/interactive/HumanizationInteractive";
import PolskaInteractive from "@/components/interactive/PolskaInteractive";
import KulturaInteractive from "@/components/interactive/KulturaInteractive";
import DistrictFooter from "@/components/DistrictFooter";

export default function RoomDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const room = rooms.find((r) => r.slug === slug);

  if (!room) {
    notFound();
  }

  // Render the specific simulator component based on the active slug
  const renderInteractiveSimulator = () => {
    switch (slug) {
      case "kosmiczna-brama":
        return <WelcomeLobbyInteractive />;
      case "stacja-kosmiczna":
        return <StacjaKosmicznaInteractive />;
      case "studio-komiksu":
        return <PracowniaInteractive />;
      case "akademia-dymku":
        return <KomiksLabInteractive />;
      case "instytut-pojazdow":
        return <GarazInteractive />;
      case "misja-tytus":
        return <HumanizationInteractive />;
      case "misja-romka":
        return <PolskaInteractive />;
      case "archiwum-swiata":
        return <KulturaInteractive />;
      default:
        // Mock Planned Console for Klasa Papcia, Hangar Partnerów, Przyszła Baza, Wyspy Nonsensu
        return (
          <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/40 p-12 text-center max-w-xl mx-auto flex flex-col items-center space-y-4">
            <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-2xl text-zinc-500 animate-pulse">
              <Terminal className="h-6 w-6" />
            </div>
            <h4 className="font-display text-base font-bold text-white uppercase tracking-wider">
              Design Console: {room.title}
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              This space (category: <span className="text-[#B6FF4D] font-semibold">{room.type}</span>) is currently in the architectural and curriculum design phase. Its full features will be deployed in the next developmental phases of the base.
            </p>
            <div className="pt-4 flex flex-col space-y-2 text-left w-full border-t border-zinc-900 text-xs">
              <span className="font-display text-[9px] font-bold text-zinc-500 uppercase tracking-widest">
                Planned technical specification:
              </span>
              <ul className="list-disc pl-4 space-y-1 text-zinc-500 text-[11px]">
                {room.userActions.map((act, i) => (
                  <li key={i}>{act}</li>
                ))}
              </ul>
            </div>
            <div className="pt-6">
              <Link
                href="/centers/papcio-chmiel#mapa"
                className="px-4 py-2 text-xs font-display font-bold border border-zinc-800 rounded-xl text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors"
              >
                Back to mission map
              </Link>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0C0A09] text-[#F7F1DC] flex flex-col justify-between">
      {/* Header Sticky Navigation (Back to main center) */}
      <header className="no-print fixed top-0 left-0 right-0 z-40 bg-[#FAF8F5] border-b-4 border-black py-3 px-4 sm:px-8 md:px-12 text-black shadow-[0_4px_0_0_rgba(17,17,17,1)]">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <Link
            href="/centers/papcio-chmiel"
            className="flex items-center space-x-1.5 border-2 border-black bg-white px-3 py-1 font-bold text-xs hover:bg-[#FFD21E] active:translate-y-0.5 transition-all shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>BACK TO SCIENCE CENTER</span>
          </Link>

          <div className="flex items-center space-x-2 border-2 border-black bg-[#E63223] text-white px-3 py-1 font-display text-sm font-black shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">
            <span>PAPCIO NODE: 0xCHMIEL</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-grow pt-28 pb-16 px-6 sm:px-12 md:px-24 max-w-7xl mx-auto w-full">
        {/* Room Header Info */}
        <div className="border-4 border-black bg-[#FFD21E] text-black p-6 md:p-8 mb-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] flex flex-col md:flex-row justify-between md:items-end gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="font-display text-sm font-black uppercase tracking-wider px-3 py-1 border-2 border-black bg-white"
              >
                {room.type} node
              </span>
              <div className="flex items-center space-x-1 text-xs font-black uppercase border-2 border-black bg-[#1267B1] text-white px-3 py-1 shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">
                <Target className="h-4 w-4 stroke-[2.5]" />
                <span>Audience: {room.audience.join(", ")}</span>
              </div>
            </div>

            <h1 className="font-display text-4xl font-black tracking-tight sm:text-6xl uppercase leading-none">
              {room.title}
            </h1>
            <p className="text-sm font-extrabold text-zinc-950">
              {room.subtitle}
            </p>
          </div>

          <div className="text-left md:text-right max-w-xs text-xs font-bold text-zinc-800 bg-[#F7F1DC] border-2 border-black p-3 shadow-[3px_3px_0px_0px_rgba(17,17,17,1)]">
            <p className="leading-relaxed">
              You are browsing a virtual room model. Test the simulator before physical pop-up deployments.
            </p>
          </div>
        </div>

        {/* Dynamic Simulator Section */}
        <div className="mb-12">
          {renderInteractiveSimulator()}
        </div>

        {/* Detailed Metadata and Specifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t-4 border-black pt-10">
          {/* Mission Box */}
          <div className="space-y-3 bg-[#F7F1DC] text-black p-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(17,17,17,1)]">
            <div className="flex items-center space-x-2 text-black border-b-2 border-black pb-2 mb-3">
              <Compass className="h-5 w-5 stroke-[2.5]" />
              <h3 className="font-display text-xl font-black uppercase tracking-wider">
                Activity Mission
              </h3>
            </div>
            <p className="text-xs font-bold leading-relaxed text-zinc-800">
              {room.mission}
            </p>
          </div>

          {/* Outcome Specifications */}
          <div className="space-y-3 bg-[#FFD21E] text-black p-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(17,17,17,1)]">
            <div className="flex items-center space-x-2 text-black border-b-2 border-black pb-2 mb-3">
              <ShieldCheck className="h-5 w-5 stroke-[2.5]" />
              <h3 className="font-display text-xl font-black uppercase tracking-wider">
                Creation / Outcome
              </h3>
            </div>
            <div className="text-xs font-bold text-black mb-4">
              In this zone, the student creates: <strong className="underline decoration-2">{room.creationOutcome}</strong>
            </div>

            <div className="flex items-center space-x-2 pt-2 border-t-2 border-black/30 pb-2">
              <UserCheck className="h-5 w-5 stroke-[2.5]" />
              <h3 className="font-display text-lg font-black uppercase tracking-wider">
                Character Role
              </h3>
            </div>
            <div className="text-xs font-semibold italic text-zinc-800">
              {room.heroRole}
            </div>
          </div>

          {/* AI Features list */}
          <div className="space-y-3 bg-[#1267B1] text-white p-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(17,17,17,1)]">
            <div className="flex items-center space-x-2 text-white border-b-2 border-white pb-2 mb-3">
              <Sparkles className="h-5 w-5 stroke-[2.5]" />
              <h3 className="font-display text-xl font-black uppercase tracking-wider">
                AI Assistant Role
              </h3>
            </div>
            <ul className="space-y-2 text-xs font-bold text-zinc-100">
              {room.aiFeatures.map((feat, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 mt-1.5 h-2 w-2 rounded-full bg-white shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <DistrictFooter />
    </div>
  );
}
