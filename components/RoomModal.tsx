"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, CheckCircle, Compass, ArrowRight, Sparkles, BookOpen, UserCheck, ShieldCheck } from "lucide-react";
import { Room } from "@/data/rooms";

type RoomModalProps = {
  room: Room;
  onClose: () => void;
};

export default function RoomModal({ room, onClose }: RoomModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Dark overlay background */}
      <div
        className="absolute inset-0 bg-black/90 transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content Box (Comic Book Panel layout) */}
      <div className="relative w-full max-w-2xl overflow-hidden border-4 border-black bg-comic-paper text-black shadow-[10px_10px_0px_0px_#000000] flex flex-col md:flex-row max-h-[90vh] md:max-h-[620px] rounded-none z-10">
        
        {/* Close Button (Red Comic block) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 border-4 border-black bg-comic-red text-white hover:bg-black transition-colors shadow-[2px_2px_0px_0px_#000000] rounded-none cursor-pointer"
          aria-label="Close"
        >
          <X className="h-4.5 w-4.5 stroke-[3]" />
        </button>

        {/* Left column - Visual / Showcase panel */}
        <div className="w-full md:w-5/12 relative bg-comic-yellow flex flex-col justify-end p-6 border-b-4 md:border-b-0 md:border-r-4 border-black min-h-[180px] md:min-h-full">
          {/* Halftone shading detail */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(#000000_15%,transparent_16%)] bg-[size:10px_10px]" />
          
          <div className="relative z-10 space-y-3">
            <span className="inline-block text-[10px] font-display font-black uppercase tracking-widest px-3 py-1 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000000] text-black">
              MISSION: {room.type.toUpperCase()}
            </span>
            <h3 className="font-display text-3xl font-black text-black uppercase leading-tight tracking-tight">
              {room.title}
            </h3>
            <p className="text-xs text-zinc-800 font-bold leading-normal">
              {room.subtitle}
            </p>
          </div>
        </div>

        {/* Right column - Mission Specifications & Actions */}
        <div className="w-full md:w-7/12 p-6 overflow-y-auto flex flex-col justify-between bg-white">
          <div className="space-y-5">
            
            {/* The Explorer Mission */}
            <div className="bg-comic-paper border-4 border-black p-4 shadow-[4px_4px_0px_0px_#000000]">
              <h4 className="font-display text-sm font-extrabold tracking-wider text-comic-red uppercase flex items-center space-x-1">
                <Compass className="h-4.5 w-4.5 stroke-[3]" />
                <span>Explorer Mission:</span>
              </h4>
              <p className="mt-1.5 text-xs font-bold leading-relaxed text-black">
                {room.mission}
              </p>
            </div>

            {/* What child learns (Stickers style) */}
            <div>
              <div className="flex items-center space-x-1.5 mb-2">
                <BookOpen className="h-4 w-4 text-black shrink-0" />
                <h4 className="font-display text-xs font-extrabold tracking-wider text-zinc-650 uppercase">
                  What children learn:
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {room.learningOutcomes.map((out) => (
                  <span
                    key={out}
                    className="text-[10px] px-2.5 py-1 bg-comic-cyan border-2 border-black font-extrabold text-black uppercase tracking-wide shadow-[1px_1px_0px_0px_#000000]"
                  >
                    {out}
                  </span>
                ))}
              </div>
            </div>

            {/* Creation outcome & Hero Role */}
            <div className="grid grid-cols-2 gap-4 text-xs font-bold">
              <div>
                <h4 className="font-display text-[10px] font-extrabold tracking-wider text-zinc-550 uppercase mb-1.5">
                  What they create in-game:
                </h4>
                <div className="text-[11px] text-black flex items-center space-x-1.5 border-2 border-black bg-comic-yellow/10 p-2 shadow-[2px_2px_0px_0px_#000000]">
                  <ShieldCheck className="h-4.5 w-4.5 text-comic-green shrink-0 stroke-[2.5]" />
                  <span>{room.creationOutcome}</span>
                </div>
              </div>

              <div>
                <h4 className="font-display text-[10px] font-extrabold tracking-wider text-zinc-550 uppercase mb-1.5">
                  Companion & Mentor:
                </h4>
                <div className="text-[11px] text-black flex items-center space-x-1.5 border-2 border-black bg-comic-cyan/10 p-2 shadow-[2px_2px_0px_0px_#000000]">
                  <UserCheck className="h-4.5 w-4.5 text-comic-blue shrink-0 stroke-[2.5]" />
                  <span>{room.heroRole.split(" ")[0]}</span>
                </div>
              </div>
            </div>

            {/* AI-Native Features */}
            <div>
              <div className="flex items-center space-x-1.5 mb-2">
                <Sparkles className="h-4 w-4 text-black animate-pulse" />
                <h4 className="font-display text-xs font-extrabold tracking-wider text-zinc-650 uppercase">
                  AI Assistant&apos;s Role:
                </h4>
              </div>
              <ul className="space-y-1.5 text-xs font-bold text-zinc-700">
                {room.aiFeatures.slice(0, 2).map((feat, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-comic-green mr-2 shrink-0 stroke-[3]" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 border-t-4 border-black pt-4 flex items-center justify-between">
            <button
              onClick={onClose}
              className="comic-button-zinc py-2 px-4 text-xs font-display font-extrabold cursor-pointer"
            >
              Back to map
            </button>

            <Link
              href={`/rooms/${room.slug}`}
              className="comic-button-yellow py-2.5 px-5 text-xs flex items-center space-x-1.5"
            >
              <span>{room.ctaLabel}</span>
              <ArrowRight className="h-4 w-4 stroke-[3]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
