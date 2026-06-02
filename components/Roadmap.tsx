import React from "react";

type Phase = {
  phase: string;
  title: string;
  objective: string;
  status: "completed" | "active" | "planned";
  bgColor: string;
};

const phases: Phase[] = [
  {
    phase: "Phase 1",
    title: "Digital Center at Home",
    status: "completed",
    objective: "Online missions, comic creator, explorer profile and learning quests.",
    bgColor: "bg-[#1267B1]" // Explorer Blue
  },
  {
    phase: "Phase 2",
    title: "School Program",
    status: "active",
    objective: "Ready-to-use lesson plans, classroom missions and teacher materials.",
    bgColor: "bg-[#FFD21E]" // Solar Yellow
  },
  {
    phase: "Phase 3",
    title: "Mobile Pop-up Edition",
    status: "planned",
    objective: "Portable stations for schools, libraries, festivals and city events.",
    bgColor: "bg-[#E63223]" // Rocket Red
  },
  {
    phase: "Phase 4",
    title: "Future Physical Center",
    status: "planned",
    objective: "A permanent science and comic center dedicated to Papcio Chmiel’s legacy.",
    bgColor: "bg-[#FAF8F5]" // Paper White
  }
];

export default function Roadmap() {
  return (
    <div className="relative py-12 bg-[#0C0A09]">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center mb-12">
          <div className="inline-block border-4 border-black bg-[#FFD21E] px-4 py-2 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] mb-4">
            <span className="font-display text-lg font-black tracking-widest text-black">
              PROJECT ROADMAP
            </span>
          </div>
          <p className="mx-auto max-w-2xl text-zinc-350 font-bold text-sm">
            We grow the community step-by-step: starting with school missions, pop-ups, home learning, and scaling to a permanent base.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {phases.map((item, idx) => {
            const isActive = item.status === "active";
            const isCompleted = item.status === "completed";
            const textClass = (item.bgColor === "bg-[#E63223]" || item.bgColor === "bg-[#1267B1]") ? "text-white" : "text-black";
            const subtextClass = (item.bgColor === "bg-[#E63223]" || item.bgColor === "bg-[#1267B1]") ? "text-zinc-150" : "text-zinc-800";

            return (
              <div
                key={idx}
                className={`relative flex flex-col justify-between border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] transition-all duration-150 hover:-translate-y-1 ${item.bgColor} ${textClass}`}
              >
                <div>
                  {/* Stage Header */}
                  <div className="flex items-center justify-between border-b-2 border-black pb-3">
                    <span className="font-display text-base font-black uppercase tracking-wider">
                      {item.phase}
                    </span>
                    <span className="border-2 border-black bg-white text-black px-2 py-0.5 text-[10px] font-black uppercase">
                      {isActive ? "ACTIVE" : isCompleted ? "COMPLETED" : "PLANNED"}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-black tracking-wide uppercase leading-tight">
                    {item.title}
                  </h3>
                  <p className={`mt-3 text-xs font-semibold leading-relaxed ${subtextClass}`}>
                    {item.objective}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
