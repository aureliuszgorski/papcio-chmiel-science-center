"use client";

import React, { useState } from "react";
import { Check, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

type Package = {
  name: string;
  desc: string;
  points: string[];
  color: string;
};

const packages: Package[] = [
  {
    name: "Educational Partner",
    desc: "Didactic support and the joint development of educational comic book scenarios.",
    color: "#FFD84D",
    points: [
      "Co-creating lesson sheets integrated with the school curriculum",
      "Sponsorship of the Comic Lab zone",
      "Access to discussion panels and expert workshops"
    ]
  },
  {
    name: "Technology Partner",
    desc: "Providing virtual infrastructure, supporting AI models, and 3D engines.",
    color: "#48D8FF",
    points: [
      "Integrating custom AI models into virtual assistants",
      "Sponsorship of the Vehicle Garage and physics simulators",
      "Brand showcase in the technology partners directory"
    ]
  },
  {
    name: "Digitalization Patron",
    desc: "Funding the digitization of historical archives and expansion of immersive environments.",
    color: "#FF4D4D",
    points: [
      "Logo or name embedded into the Welcome Lobby digital hologram",
      "General sponsorship of the Comic Culture Hall",
      "Opportunity to join the project's Advisory Council"
    ]
  }
];

export default function PartnerCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    type: "Edukacyjny",
    message: ""
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.org) return;
    setSubmitted(true);
  };

  return (
    <div className="py-16 border-t-4 border-black" id="partnerzy">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 border-4 border-black bg-comic-cyan px-3 py-1 shadow-[2px_2px_0px_0px_#000000]">
            <span className="h-2 w-2 rounded-full bg-black animate-pulse" />
            <span className="font-display font-extrabold uppercase text-xs text-black tracking-wider">COLLABORATION & SPONSORSHIP</span>
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
            Become a Project Partner
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400 text-sm font-medium">
            We are seeking cities, publishers, tech firms, and cultural investors to co-create the digital twin and scale the Science Center.
          </p>
        </div>

        {/* Packages Row (Comic page spread style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="border-4 border-black bg-comic-paper text-black p-6 flex flex-col justify-between shadow-[6px_6px_0px_0px_#000000] rotate-0.5 hover:rotate-0 transition-transform duration-200"
            >
              <div>
                <span
                  className="font-display text-xs font-black uppercase tracking-widest px-2.5 py-1 rounded-none border-2 border-black"
                  style={{
                    backgroundColor: pkg.color,
                    boxShadow: "2px 2px 0px 0px #000000"
                  }}
                >
                  Package {idx + 1}
                </span>
                <h3 className="mt-4 font-display text-2xl font-black uppercase tracking-tight leading-none text-black">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-xs text-zinc-800 font-bold leading-relaxed">
                  {pkg.desc}
                </p>

                <ul className="mt-6 space-y-3 text-xs font-bold text-zinc-700">
                  {pkg.points.map((p, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-4 w-4 text-comic-green mr-2 shrink-0 stroke-[3]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Form Container (Zany panel design) */}
        <div className="max-w-2xl mx-auto border-4 border-black bg-comic-paper text-black p-8 relative shadow-[8px_8px_0px_0px_#000000] rounded-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-black bg-comic-yellow p-3 shadow-[3px_3px_0px_0px_#000000]">
            <ShieldCheck className="h-6 w-6 text-black stroke-[2.5]" />
          </div>

          <h3 className="text-center font-display text-2xl font-black text-black uppercase tracking-wider mb-6 pt-2">
            Partnership Submission Form
          </h3>

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center border-4 border-black bg-comic-yellow shadow-[3px_3px_0px_0px_#000000]">
                <CheckCircle2 className="h-6 w-6 text-black stroke-[3]" />
              </div>
              <h4 className="font-display text-2xl font-black uppercase text-black tracking-wider">
                Thank you for your submission!
              </h4>
              <p className="text-xs text-zinc-700 max-w-md mx-auto leading-relaxed font-bold">
                We will contact you within 48 hours to discuss co-creating the Papcio Chmiel Science Center and present the project deck.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-extrabold text-black uppercase tracking-widest mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full border-4 border-black bg-white px-4 py-2.5 text-xs text-black placeholder-zinc-500 font-bold outline-none shadow-[2px_2px_0px_0px_#000000] focus:shadow-[3px_3px_0px_0px_#000000] focus:bg-comic-yellow/5 transition-all rounded-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold text-black uppercase tracking-widest mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. partner@company.com"
                    className="w-full border-4 border-black bg-white px-4 py-2.5 text-xs text-black placeholder-zinc-500 font-bold outline-none shadow-[2px_2px_0px_0px_#000000] focus:shadow-[3px_3px_0px_0px_#000000] focus:bg-comic-yellow/5 transition-all rounded-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-extrabold text-black uppercase tracking-widest mb-1.5">
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.org}
                    onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                    placeholder="e.g. Foundation / City / Company"
                    className="w-full border-4 border-black bg-white px-4 py-2.5 text-xs text-black placeholder-zinc-500 font-bold outline-none shadow-[2px_2px_0px_0px_#000000] focus:shadow-[3px_3px_0px_0px_#000000] focus:bg-comic-yellow/5 transition-all rounded-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold text-black uppercase tracking-widest mb-1.5">
                    Partnership Type
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full border-4 border-black bg-white px-4 py-2 text-xs text-black font-bold outline-none shadow-[2px_2px_0px_0px_#000000] focus:shadow-[3px_3px_0px_0px_#000000] focus:bg-comic-yellow/5 transition-all rounded-none appearance-none cursor-pointer"
                  >
                    <option value="Edukacyjny">Educational Partner</option>
                    <option value="Technologiczny">Technology Partner</option>
                    <option value="Kultury">Culture Partner</option>
                    <option value="Miasto">City Partner</option>
                    <option value="Mecenat">Digitalization Patron</option>
                    <option value="Inny">Other Cooperation Profile</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-extrabold text-black uppercase tracking-widest mb-1.5">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Briefly write how you would like to join our project..."
                  className="w-full border-4 border-black bg-white px-4 py-2.5 text-xs text-black placeholder-zinc-500 font-bold outline-none shadow-[2px_2px_0px_0px_#000000] focus:shadow-[3px_3px_0px_0px_#000000] focus:bg-comic-yellow/5 transition-all rounded-none resize-none"
                  rows={3}
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="comic-button-yellow py-3.5 w-full flex items-center justify-center space-x-2"
                >
                  <span>Send Partnership Inquiry</span>
                  <ArrowRight className="h-4 w-4 stroke-[3]" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
