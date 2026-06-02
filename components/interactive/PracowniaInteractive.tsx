"use client";

import React, { useState } from "react";
import { PenTool, Library, Palette, FileText, Info, HelpCircle } from "lucide-react";

type WorkItem = {
  id: string;
  name: string;
  icon: React.ReactNode;
  toolTip: string;
  title: string;
  lesson: string;
  aiNote: string;
};

const items: WorkItem[] = [
  {
    id: "pen",
    name: "Nib Pen & Ink",
    icon: <PenTool className="h-5 w-5" />,
    toolTip: "Drawing pen with metal nib",
    title: "Art of Comic Drafting Lines",
    lesson: "Classic drafting lines are the foundation. Varying stroke weight using pressure adds weight and velocity to characters. In comics, black outlines establish form, locking colors inside shapes.",
    aiNote: "Hand drafting has microscopic errors. AI models analyze strokes (stroke DNA) to help illustrators maintain graphic continuity across hundreds of frames."
  },
  {
    id: "grids",
    name: "Panel Grids",
    icon: <Palette className="h-5 w-5" />,
    toolTip: "Sheet containing panel layouts",
    title: "Timing and Pace of Storytelling",
    lesson: "A comic panel represents a block of time. Larger frames slow down reading pace. The whitespace between frames (the gutter) is where the reader's imagination stitches action frames together.",
    aiNote: "Layout statistics indicate that grid geometry determines reading speed. AI can automatically adjust gutter widths based on script activity ratios."
  },
  {
    id: "bubble",
    name: "Speech Bubbles",
    icon: <FileText className="h-5 w-5" />,
    toolTip: "Sheets containing dialog bubbles",
    title: "Vocalization and Lettering Style",
    lesson: "A bubble is more than container text. Its border indicates emotion: jagged edges shout, cloud structures whisper thoughts, and oval circles speak dialogue. Text scale controls volume.",
    aiNote: "Natural language processing models auto-size bubbles to accommodate translated dialogs across 12 languages, preventing overlapping on illustrations."
  },
  {
    id: "reference",
    name: "Inspiration Folder",
    icon: <Library className="h-5 w-5" />,
    toolTip: "Collection of references and clippings",
    title: "Humor and Mechanics of the Absurd",
    lesson: "Papcio became famous for wordplay and funny neologisms. Humor in comics emerges from juxtaposing solemn topics with ridiculous actions, prompting monkeys to wish for humanization.",
    aiNote: "Humor is a tough test for AI. Models evaluate semantic associations to help screenwriters find surprising, funny synonyms to maximize impact."
  }
];

export default function PracowniaInteractive() {
  const [activeItem, setActiveItem] = useState<string>("pen");
  const current = items.find((i) => i.id === activeItem)!;

  return (
    <div className="rounded-2xl border border-glass bg-glass p-6 md:p-8">
      {/* Desk Mockup */}
      <h3 className="font-display text-lg font-bold text-white mb-2">
        Drawing Desk in Comic Studio
      </h3>
      <p className="text-xs text-zinc-400 mb-6">
        Click on the drafting tools on Papcio&apos;s virtual desk to inspect the secrets behind classic creations.
      </p>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* The Table Layout */}
        <div className="lg:col-span-6 flex flex-col justify-center items-center bg-zinc-950/60 rounded-2xl border border-zinc-800/80 p-8 min-h-[300px]">
          <div className="relative w-full max-w-[340px] aspect-square border-2 border-dashed border-zinc-800 rounded-full flex items-center justify-center">
            {/* Center ink bottle decorative spot */}
            <div className="w-16 h-16 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center flex-col shadow-inner">
              <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">INK</span>
              <span className="h-1.5 w-1.5 rounded-full bg-black border border-zinc-500 mt-1" />
            </div>

            {/* Hotspots around the desk */}
            {items.map((item, idx) => {
              const angle = (idx * 2 * Math.PI) / items.length - Math.PI / 2;
              const x = Math.round(Math.cos(angle) * 110);
              const y = Math.round(Math.sin(angle) * 110);

              const isActive = item.id === activeItem;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item.id)}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                  className={`absolute p-3 rounded-full border transition-all duration-300 ${
                    isActive
                      ? "bg-[#FFD84D] text-black border-[#FFD84D] scale-110 shadow-[0_0_15px_rgba(255,216,77,0.4)]"
                      : "bg-[#08111F] text-[#FFD84D] border-zinc-800 hover:border-[#FFD84D] hover:bg-zinc-900"
                  }`}
                  title={item.toolTip}
                >
                  {item.icon}
                </button>
              );
            })}
          </div>

          <div className="mt-8 text-center text-xs text-zinc-500 flex items-center space-x-1.5">
            <Info className="h-4 w-4 text-[#FFD84D]" />
            <span>Click one of the 4 drawing tools laid out on the workbench</span>
          </div>
        </div>

        {/* Content Details Display */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 rounded-full bg-[#FFD84D]/10 border border-[#FFD84D]/20 px-3 py-1 text-xs text-[#FFD84D]">
              <HelpCircle className="h-3.5 w-3.5" />
              <span className="font-display font-medium uppercase tracking-wider">CREATOR BLUEPRINTS</span>
            </div>

            <h4 className="font-display text-xl font-bold text-white">
              {current.title}
            </h4>

            <p className="text-sm leading-relaxed text-zinc-300">
              {current.lesson}
            </p>
          </div>

          {/* AI Curator Section */}
          <div className="mt-8 border-t border-zinc-850 pt-6">
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
              <span className="font-display text-[10px] font-bold text-[#FFD84D] uppercase tracking-widest">
                AI CURATOR REMARKS
              </span>
              <p className="mt-2 text-xs text-zinc-400 leading-relaxed italic">
                &ldquo;{current.aiNote}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
