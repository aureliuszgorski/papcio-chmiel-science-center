"use client";

import React, { useState } from "react";
import { Sparkles, Printer, RefreshCw, CheckCircle, HelpCircle } from "lucide-react";

type Theme = {
  id: string;
  name: string;
  desc: string;
  characters: string[];
  panels: {
    description: string;
    defaultSpeech1: string;
    defaultSpeech2: string;
  }[];
};

const themes: Theme[] = [
  {
    id: "eko",
    name: "Ecology (Forest Protection)",
    desc: "Tytus learns why trees act as oxygen factories.",
    characters: ["Tytus", "Romek"],
    panels: [
      {
        description: "Romek explains the biological role of trees.",
        defaultSpeech1: "Tytus, don't break branches! One tree produces oxygen for several people!",
        defaultSpeech2: "For humans? What about chimpanzees, is our oxygen imported?"
      },
      {
        description: "Tytus decides to plant a forest.",
        defaultSpeech1: "Then I will plant a whole jungle! I'll be an oxygen factory mogul!",
        defaultSpeech2: "Splendid, Tytus. Grab a shovel, humanization through labor!"
      },
      {
        description: "Romek and Tytus inspect the young saplings.",
        defaultSpeech1: "So? Are my trees pumping out fresh air yet?",
        defaultSpeech2: "Give them twenty years, right now they produce oxygen for ants!"
      }
    ]
  },
  {
    id: "grawitacja",
    name: "Physics (Gravity & Orbit)",
    desc: "A'Tomek explains to Tytus why things float in orbit.",
    characters: ["Tytus", "A'Tomek"],
    panels: [
      {
        description: "A'Tomek uses a globe to explain gravitational pull.",
        defaultSpeech1: "Gravity is the attractive force of masses, Tytus. Earth holds us tight.",
        defaultSpeech2: "I am only held by my urge to eat a banana!"
      },
      {
        description: "Tytus imagines zero gravity inside a spacecraft.",
        defaultSpeech1: "When we fly to space, will bananas float in front of my nose?",
        defaultSpeech2: "Yes, in zero gravity conditions you'll experience complete weightlessness."
      },
      {
        description: "Tytus attempts to jump high.",
        defaultSpeech1: "Hop! Gravity is weak, I immediately land back on my feet!",
        defaultSpeech2: "Because Earth's massive body pulls you back down!"
      }
    ]
  },
  {
    id: "cybersafety",
    name: "Cybersecurity (Web safety)",
    desc: "Romek explains basic netiquette and phishing filters.",
    characters: ["Tytus", "Romek"],
    panels: [
      {
        description: "Tytus clicks on fishy advertisements on his terminal.",
        defaultSpeech1: "Romek! I won a million bananas! I just need to enter A'Tomek's password!",
        defaultSpeech2: "Stop! That is phishing! They want to steal our secret vaults!"
      },
      {
        description: "Romek explains password hashing and strength rules.",
        defaultSpeech1: "Passwords must be strong: digits, symbols, no dictionary words.",
        defaultSpeech2: "My password is: TytusKrolBananow123!_ - unbreakable!"
      },
      {
        description: "Tytus closes the screen and goes to eat.",
        defaultSpeech1: "Secured! Now hackers can bite my furry tail.",
        defaultSpeech2: "Well done, Tytus. You just took a step toward digital wisdom."
      }
    ]
  }
];

export default function KomiksLabInteractive() {
  const [selectedTheme, setSelectedTheme] = useState<string>("eko");
  const currentTheme = themes.find((t) => t.id === selectedTheme)!;

  const [speechValues, setSpeechValues] = useState<Record<string, string>>({});
  const [saved, setSaved] = useState<boolean>(false);

  const getSpeechText = (panelIndex: number, characterIndex: number, defaultValue: string) => {
    const key = `${selectedTheme}_${panelIndex}_${characterIndex}`;
    return speechValues[key] !== undefined ? speechValues[key] : defaultValue;
  };

  const handleSpeechChange = (panelIndex: number, characterIndex: number, val: string) => {
    const key = `${selectedTheme}_${panelIndex}_${characterIndex}`;
    setSpeechValues((prev) => ({
      ...prev,
      [key]: val,
    }));
    setSaved(false);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    setSpeechValues({});
    setSaved(false);
  };

  return (
    <div className="rounded-2xl border border-glass bg-glass p-6 md:p-8 print:bg-white print:text-black print:p-0 print:border-0">
      <div className="no-print mb-6">
        <h3 className="font-display text-lg font-bold text-white mb-2">
          Speech Bubble Academy Comic Builder
        </h3>
        <p className="text-xs text-zinc-400">
          Select a lesson theme, modify the dialog scripts in speech bubbles, and print your custom graphic worksheet for class.
        </p>

        {/* Theme select tabs */}
        <div className="mt-6 flex flex-wrap gap-3">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setSelectedTheme(t.id);
                setSaved(false);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-display font-bold border transition-all duration-200 ${
                selectedTheme === t.id
                  ? "bg-[#B6FF4D] border-[#B6FF4D] text-black shadow-[0_0_15px_rgba(182,255,77,0.2)]"
                  : "bg-zinc-950/40 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-300"
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>
      </div>

      {/* The Printable Comic Canvas */}
      <div className="border border-zinc-800 bg-zinc-950/20 p-6 rounded-2xl print:border-0 print:bg-transparent print:p-0">
        {/* Comic Title */}
        <div className="text-center mb-6">
          <span className="no-print font-display text-[10px] font-bold text-[#B6FF4D] uppercase tracking-widest">
            SCHOOL EDUCATIONAL STRIP
          </span>
          <h4 className="font-display text-xl font-bold text-white print:text-black">
            Tytus&apos;s Missions: {currentTheme.name}
          </h4>
          <p className="text-xs text-zinc-500 mt-1 italic print:text-zinc-700">
            {currentTheme.desc}
          </p>
        </div>

        {/* 3 Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentTheme.panels.map((p, idx) => {
            const val1 = getSpeechText(idx, 1, p.defaultSpeech1);
            const val2 = getSpeechText(idx, 2, p.defaultSpeech2);

            return (
              <div
                key={idx}
                className="border-2 border-white bg-zinc-900/60 p-4 rounded-xl flex flex-col justify-between aspect-[3/4] relative print:border-black print:bg-white"
              >
                {/* Panel number indicator */}
                <div className="absolute top-2 left-2 h-6 w-6 rounded-md bg-white border border-black flex items-center justify-center font-display text-xs font-black text-black">
                  {idx + 1}
                </div>

                {/* Dialogue Area (Speech bubbles) */}
                <div className="space-y-4 pt-6">
                  {/* Bubble 1 (Character 1) */}
                  <div className="flex flex-col items-start">
                    <span className="font-display text-[9px] font-bold text-zinc-500 uppercase print:text-zinc-700 mb-0.5">
                      {currentTheme.characters[0]}:
                    </span>
                    <div className="speech-bubble border border-zinc-700 bg-zinc-950/60 p-2.5 text-xs text-zinc-300 w-full min-h-[50px] relative print:border-black print:bg-white print:text-black">
                      <textarea
                        value={val1}
                        onChange={(e) => handleSpeechChange(idx, 1, e.target.value)}
                        className="no-print w-full h-full bg-transparent border-0 outline-none resize-none text-xs leading-normal p-0 focus:ring-0 text-white"
                        rows={2}
                      />
                      <span className="hidden print:block">{val1}</span>
                    </div>
                  </div>

                  {/* Bubble 2 (Character 2) */}
                  <div className="flex flex-col items-end">
                    <span className="font-display text-[9px] font-bold text-zinc-500 uppercase print:text-zinc-700 mb-0.5">
                      {currentTheme.characters[1]}:
                    </span>
                    <div className="speech-bubble border border-zinc-700 bg-zinc-950/60 p-2.5 text-xs text-zinc-300 w-full min-h-[50px] relative print:border-black print:bg-white print:text-black">
                      <textarea
                        value={val2}
                        onChange={(e) => handleSpeechChange(idx, 2, e.target.value)}
                        className="no-print w-full h-full bg-transparent border-0 outline-none resize-none text-xs leading-normal p-0 focus:ring-0 text-white text-right"
                        rows={2}
                      />
                      <span className="hidden print:block text-right">{val2}</span>
                    </div>
                  </div>
                </div>

                {/* Mock Sketch / Illustration placeholder area */}
                <div className="mt-auto border border-dashed border-zinc-800/80 rounded-lg bg-zinc-950/40 py-6 text-center text-zinc-600 flex flex-col items-center justify-center print:border-zinc-300 print:bg-zinc-50">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 print:text-zinc-700">
                    [AI Illustration - Panel {idx + 1}]
                  </div>
                  <div className="text-[9px] text-zinc-650 max-w-[150px] mt-1 print:text-zinc-500">
                    {p.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Editor Controls */}
      <div className="no-print mt-6 border-t border-zinc-800/60 pt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-2 text-xs text-zinc-500">
          <HelpCircle className="h-4 w-4 text-[#B6FF4D]" />
          <span>Edit scripts directly inside speech bubbles.</span>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={handleReset}
            className="flex items-center justify-center space-x-1.5 px-4 py-2 border border-zinc-800 rounded-xl text-xs font-display text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Reset</span>
          </button>

          <button
            onClick={() => setSaved(true)}
            className="flex items-center justify-center space-x-1.5 px-4 py-2 border border-zinc-800 rounded-xl text-xs font-display text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#B6FF4D]" />
            <span>Optimize with AI Assistant</span>
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center justify-center space-x-1.5 px-5 py-2.5 rounded-xl bg-[#B6FF4D] text-black font-display text-xs font-bold hover:bg-[#B6FF4D]/90 transition-colors shadow-lg"
          >
            <Printer className="h-4 w-4" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      {saved && (
        <div className="no-print mt-4 flex items-center space-x-2 text-[#B6FF4D] text-xs font-semibold bg-[#B6FF4D]/5 border border-[#B6FF4D]/15 p-3 rounded-xl">
          <CheckCircle className="h-4 w-4 shrink-0" />
          <span>Script compiled! Bubble layout aligned to prevent overlaps. You can print or download the layout sheet.</span>
        </div>
      )}
    </div>
  );
}
