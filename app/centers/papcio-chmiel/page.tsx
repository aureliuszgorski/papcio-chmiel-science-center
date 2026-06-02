import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import Hero from "@/components/Hero";
import RoomCard from "@/components/RoomCard";
import DistrictFooter from "@/components/DistrictFooter";
import { rooms } from "@/data/rooms";

const popupPackages = [
  {
    name: "Pop-up Mini",
    target: "For individual classrooms",
    duration: "2-hour workshop session",
    stations: "3 interactive stations",
    desc: "A ready-to-use small mobile setup with 3 displays, Tytus's Space Station simulator, and dialogue compiler.",
    price: "Custom quotation"
  },
  {
    name: "Pop-up School Day",
    target: "Full-day program for the entire school",
    duration: "Full day of rotation missions",
    stations: "6 interactive stations",
    desc: "Expanded mobile setup featuring Professor T. Alent's vehicle construction workshop.",
    price: "Subsidized scheme"
  },
  {
    name: "Pop-up City Edition",
    target: "Municipal events, public libraries, and galleries",
    duration: "Weekend family program",
    stations: "8 stations + main screen",
    desc: "Full mobile setup with an onsite coordinator, large projection screen, mission map, and comic book tournament.",
    price: "Local government supported"
  },
  {
    name: "Pop-up Partner Edition",
    target: "For corporate brands, foundations, and patrons",
    duration: "Dedicated CSR campaign",
    stations: "Tailored event installation",
    desc: "Complete pop-up installation including PR support and expert educational patronage.",
    price: "Partner sponsored"
  }
];

export default function CenterLandingPage() {
  return (
    <div className="relative min-h-screen bg-[#0C0A09] text-[#F7F1DC]">
      {/* Header Sticky Navigation (Zany Comic Strip Header) */}
      <header className="no-print fixed top-0 left-0 right-0 z-40 bg-[#FAF8F5] border-b-4 border-black py-2.5 px-4 sm:px-8 md:px-12 text-black shadow-[0_4px_0_0_rgba(17,17,17,1)]">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <Link href="#" className="flex items-center hover:-translate-y-0.5 transition-all">
            <div className="relative h-20 w-36 -mt-3 -mb-7 shrink-0 z-10">
              <img
                src="/images/logo.png?v=2"
                alt="Papcio Chmiel Science Center Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="font-display text-xs sm:text-sm font-black tracking-wider text-black leading-tight uppercase hidden md:inline-block">
              Papcio Chmiel<br />Science Center
            </span>
            <span className="font-display text-xs font-black tracking-wider text-black leading-tight uppercase md:hidden">
              Papcio Center
            </span>
          </Link>

          {/* Nav links (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-4 text-xs font-bold uppercase">
            <Link href="#how-it-works" className="border-2 border-black bg-white px-2.5 py-1 hover:bg-[#FFD21E] transition-all">
              How It Works
            </Link>
            <Link href="#process" className="border-2 border-black bg-white px-2.5 py-1 hover:bg-[#FFD21E] transition-all">
              Process
            </Link>
            <Link href="#sale" className="border-2 border-black bg-white px-2.5 py-1 hover:bg-[#FFD21E] transition-all">
              Learning Worlds
            </Link>
            <Link href="#metahuman" className="border-2 border-black bg-white px-2.5 py-1 hover:bg-[#FFD21E] transition-all">
              Legacy
            </Link>
          </nav>

          {/* CTAs */}
          <div className="flex items-center space-x-2 sm:space-x-3 text-xs font-display font-bold">
            <Link
              href="#szkoly"
              className="hidden sm:inline-block px-4 py-2 border-2 border-black bg-[#FFD21E] text-black hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] active:translate-y-0 transition-all shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]"
            >
              BRING TO SCHOOL
            </Link>
            <Link
              href="#popup"
              className="hidden sm:inline-block px-4 py-2 border-2 border-black bg-[#E63223] text-white hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] active:translate-y-0 transition-all shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]"
            >
              BRING TO CITY
            </Link>
            <Link
              href="#dom"
              className="px-4 py-2 border-2 border-black bg-[#1267B1] text-white hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] active:translate-y-0 transition-all shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]"
            >
              CONTINUE AT HOME
            </Link>
          </div>
        </div>
      </header>

      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: How It Works */}
      <section className="py-20 border-t-8 border-b-8 border-black bg-[#F7F1DC] text-black" id="how-it-works">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="inline-block border-4 border-black bg-[#E63223] text-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] mb-4">
              <span className="font-display text-lg font-black tracking-widest uppercase">
                HOW IT WORKS
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-black">
              How the Science Center Works
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-zinc-800 font-bold text-sm sm:text-base">
              A child can discover the center in class, experience it during a pop-up, and continue the adventure at home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 bg-[#E63223] text-white border-2 border-black flex items-center justify-center font-display text-xl font-black mb-4">
                  1
                </div>
                <h3 className="font-display text-2xl font-black uppercase mb-3 text-black">
                  Discover at School
                </h3>
                <p className="text-xs font-semibold text-zinc-750 leading-relaxed">
                  Teachers run ready-made comic science missions during lessons.
                </p>
              </div>
              <Link href="#szkoly" className="mt-6 text-xs font-black uppercase underline decoration-2 hover:text-[#1267B1] transition-colors">
                Explore school missions →
              </Link>
            </div>

            {/* Step 2 */}
            <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 bg-[#1267B1] text-white border-2 border-black flex items-center justify-center font-display text-xl font-black mb-4">
                  2
                </div>
                <h3 className="font-display text-2xl font-black uppercase mb-3 text-black">
                  Experience the Pop-up
                </h3>
                <p className="text-xs font-semibold text-zinc-750 leading-relaxed">
                  The digital world appears in schools, libraries, museums and city events through mobile stations.
                </p>
              </div>
              <Link href="#popup" className="mt-6 text-xs font-black uppercase underline decoration-2 hover:text-[#1267B1] transition-colors">
                See pop-up setup →
              </Link>
            </div>

            {/* Step 3 */}
            <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 bg-[#FFD21E] text-black border-2 border-black flex items-center justify-center font-display text-xl font-black mb-4">
                  3
                </div>
                <h3 className="font-display text-2xl font-black uppercase mb-3 text-black">
                  Continue at Home
                </h3>
                <p className="text-xs font-semibold text-zinc-750 leading-relaxed">
                  Children log in from home, finish missions, create comics and collect explorer badges.
                </p>
              </div>
              <Link href="#dom" className="mt-6 text-xs font-black uppercase underline decoration-2 hover:text-[#1267B1] transition-colors">
                Explore at home →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: What Children Discover */}
      <section className="py-24 bg-[#0C0A09] text-[#F7F1DC]" id="sale">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="inline-block border-4 border-black bg-[#1267B1] text-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] mb-4">
              <span className="font-display text-lg font-black tracking-widest uppercase">
                WHAT CHILDREN DISCOVER
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
              What Children Discover
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-350 font-bold text-sm sm:text-base">
              A place where children enter the world of science, comics, space and imagination.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <RoomCard key={room.slug} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: For Schools */}
      <section className="py-24 border-t-8 border-black bg-[#F7F1DC] text-black" id="szkoly">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block border-4 border-black bg-[#E63223] text-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
              <span className="font-display text-base font-black tracking-wider uppercase">
                LESSON SCENARIOS
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-black leading-none">
              Every school can run a mission in class.
            </h2>
            <p className="text-zinc-800 text-sm font-semibold leading-relaxed mx-auto max-w-2xl">
              Ready-to-use lesson plans designed to integrate STEM, space physics, comic drawing, and history into the classroom. Download files and run directly with your students.
            </p>
          </div>

          {/* Scenarios Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Scenario 1 */}
            <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="border-2 border-black bg-[#E63223] text-white px-2 py-0.5 text-[10px] font-black uppercase">
                    PHYSICS / STEM
                  </span>
                  <span className="text-[10px] font-black text-zinc-500">GRADES 4-8</span>
                </div>
                <h3 className="font-display text-2xl font-black uppercase tracking-tight text-black leading-tight">
                  Space Flight Physics
                </h3>
                <p className="text-xs text-zinc-700 font-semibold leading-relaxed">
                  Explore planetary gravity, satellite orbits, and rocket engine dynamics using interactive simulation parameters inspired by Artur Chmielewski&apos;s NASA missions.
                </p>
                <div className="border-t-2 border-dashed border-black/10 pt-3">
                  <span className="text-[10px] font-black text-zinc-500 uppercase block mb-1">Includes:</span>
                  <ul className="text-[11px] font-bold text-zinc-600 space-y-1">
                    <li>• Space simulator setup guide</li>
                    <li>• Planetary orbit calculation sheet</li>
                    <li>• Teacher grading handbook</li>
                  </ul>
                </div>
              </div>
              <button className="mt-6 w-full py-2.5 border-2 border-black bg-[#FFD21E] hover:bg-black hover:text-white transition-all text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">
                Download Lesson Package
              </button>
            </div>

            {/* Scenario 2 */}
            <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="border-2 border-black bg-[#1267B1] text-white px-2 py-0.5 text-[10px] font-black uppercase">
                    CREATIVE / ART
                  </span>
                  <span className="text-[10px] font-black text-zinc-500">GRADES 1-6</span>
                </div>
                <h3 className="font-display text-2xl font-black uppercase tracking-tight text-black leading-tight">
                  Art of Comic Storytelling
                </h3>
                <p className="text-xs text-zinc-700 font-semibold leading-relaxed">
                  Master grid layout geometry, speech bubble typography, and narrative speed. Kids write, sketch, and edit comics with AI-assisted drafting continuity.
                </p>
                <div className="border-t-2 border-dashed border-black/10 pt-3">
                  <span className="text-[10px] font-black text-zinc-500 uppercase block mb-1">Includes:</span>
                  <ul className="text-[11px] font-bold text-zinc-600 space-y-1">
                    <li>• Dialogue bubble template guides</li>
                    <li>• Panel layout construction grids</li>
                    <li>• Character design reference cards</li>
                  </ul>
                </div>
              </div>
              <button className="mt-6 w-full py-2.5 border-2 border-black bg-[#FFD21E] hover:bg-black hover:text-white transition-all text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">
                Download Lesson Package
              </button>
            </div>

            {/* Scenario 3 */}
            <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="border-2 border-black bg-[#B6FF4D] text-black px-2 py-0.5 text-[10px] font-black uppercase">
                    GEOGRAPHY / GEOLOGY
                  </span>
                  <span className="text-[10px] font-black text-zinc-500">GRADES 3-8</span>
                </div>
                <h3 className="font-display text-2xl font-black uppercase tracking-tight text-black leading-tight">
                  Geography of Space Topography
                </h3>
                <p className="text-xs text-zinc-700 font-semibold leading-relaxed">
                  Compare atmospheric compositions, coordinate grids, and topological features across the Solar System using interactive mapping tools.
                </p>
                <div className="border-t-2 border-dashed border-black/10 pt-3">
                  <span className="text-[10px] font-black text-zinc-500 uppercase block mb-1">Includes:</span>
                  <ul className="text-[11px] font-bold text-zinc-600 space-y-1">
                    <li>• Solar System coordinate map</li>
                    <li>• Atmospheric comparison charts</li>
                    <li>• Quest worksheet with mission stamps</li>
                  </ul>
                </div>
              </div>
              <button className="mt-6 w-full py-2.5 border-2 border-black bg-[#FFD21E] hover:bg-black hover:text-white transition-all text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(17,17,17,1)]">
                Download Lesson Package
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Pop-up Edition */}
      <section className="py-24 border-t-8 border-black bg-[#0C0A09] text-[#F7F1DC]" id="popup">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          {/* Header */}
          <div className="max-w-3xl mx-auto mb-16 text-center space-y-4">
            <div className="inline-block border-4 border-black bg-[#1267B1] text-white px-4 py-2 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
              <span className="font-display text-base font-black tracking-wider uppercase">
                MOBILE POP-UPS
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
              Every city can host a pop-up.
            </h2>
            <p className="text-zinc-350 text-sm font-semibold leading-relaxed mx-auto max-w-2xl">
              A mobile setups configuration deployable in libraries, cultural center halls, and municipal squares. Bring laptops, large monitors, local event maps, and a coordinator directly to your community.
            </p>
          </div>

          {/* Inclusions Panel */}
          <div className="mt-12 mb-16 border-4 border-black bg-white text-black p-6 shadow-[6px_6px_0px_0px_rgba(17,17,17,1)]">
            <h3 className="font-display text-2xl font-black uppercase border-b-2 border-black pb-2 mb-4">
              WHAT A POP-UP INCLUDES
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-bold text-zinc-800">
              <li className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-comic-cyan shrink-0 stroke-[3]" />
                <span>3 to 8 interactive stations</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-comic-cyan shrink-0 stroke-[3]" />
                <span>laptops or tablets</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-comic-cyan shrink-0 stroke-[3]" />
                <span>large screens</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-comic-cyan shrink-0 stroke-[3]" />
                <span>comic creation station</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-comic-cyan shrink-0 stroke-[3]" />
                <span>rocket and space mission station</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-comic-cyan shrink-0 stroke-[3]" />
                <span>invention lab table</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-comic-cyan shrink-0 stroke-[3]" />
                <span>printed worksheets</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-comic-cyan shrink-0 stroke-[3]" />
                <span>facilitator guide</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-comic-cyan shrink-0 stroke-[3]" />
                <span>school or city event format</span>
              </li>
            </ul>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {popupPackages.map((pkg, idx) => {
              const bgColors = ["bg-white", "bg-[#48D8FF]", "bg-[#FFD21E]", "bg-[#C4F43C]"];
              const textColors = ["text-black", "text-black", "text-black", "text-black"];
              const borderColors = "border-4 border-black";
              const bgColor = bgColors[idx % bgColors.length];
              const textColor = textColors[idx % textColors.length];
              const subtextColor = "text-zinc-800";
              const btnBg = "bg-[#F7F1DC] text-black";

              return (
                <div
                  key={idx}
                  className={`flex flex-col justify-between p-5 ${borderColors} ${bgColor} ${textColor} shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] transition-transform duration-100 hover:-translate-y-1`}
                >
                  <div>
                    <div className="flex items-center justify-between border-b-2 border-black pb-2 mb-4">
                      <span className="font-display text-sm font-black uppercase tracking-widest">
                        PACKAGE {idx + 1}
                      </span>
                      <span className="text-[10px] font-black border-2 border-black bg-white text-black px-1.5 py-0.5">
                        POP-UP
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-black uppercase tracking-wide">
                      {pkg.name}
                    </h3>
                    <div className="text-[11px] font-black uppercase mt-1 opacity-80">
                      {pkg.target}
                    </div>

                    <p className={`mt-4 text-xs font-semibold leading-relaxed ${subtextColor}`}>
                      {pkg.desc}
                    </p>

                    <div className="mt-6 border-t-2 border-black pt-4 space-y-2 text-xs font-bold">
                      <div>DURATION: <span className="opacity-90">{pkg.duration}</span></div>
                      <div>STATIONS: <span className="opacity-90">{pkg.stations}</span></div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t-2 border-black flex justify-between items-center gap-2">
                    <span className="text-xs font-black uppercase tracking-wide bg-white text-black border-2 border-black px-2 py-1">{pkg.price}</span>
                    <Link
                      href="#szkoly"
                      className={`text-xs font-display font-black uppercase border-2 border-black px-3 py-1.5 hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] active:translate-y-0 transition-all ${btnBg}`}
                    >
                      ORDER POP-UP
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 6: At Home */}
      <section className="py-24 border-t-8 border-black bg-[#F7F1DC] text-black" id="dom">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-6 text-center">
            <div className="inline-block border-4 border-black bg-[#FFD21E] px-4 py-2 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
              <span className="font-display text-base font-black tracking-wider text-black">
                CONTINUE FROM HOME
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-black leading-none">
              Every child can enter the center from home.
            </h2>
            <p className="text-zinc-800 text-sm font-semibold leading-relaxed mx-auto max-w-2xl">
              Turn any computer or tablet into a comic-powered science center. Your children can create profile cards, build rockets, draft dialogs, and print their comic strips on physical paper.
            </p>

            <div className="space-y-4 text-left max-w-xl mx-auto pt-4 border-t-2 border-dashed border-black/25">
              <div className="flex items-start">
                <Check className="h-6 w-6 text-[#E63223] mr-3 shrink-0 stroke-[3]" />
                <p className="text-sm font-bold text-black">
                  <span className="underline decoration-2">Space Launcher Panel</span>: Configure, test, and pilot rockets.
                </p>
              </div>
              <div className="flex items-start">
                <Check className="h-6 w-6 text-[#E63223] mr-3 shrink-0 stroke-[3]" />
                <p className="text-sm font-bold text-black">
                  <span className="underline decoration-2">AI Comic Studio</span>: Script dialogues and arrange bubbles with assistance.
                </p>
              </div>
              <div className="flex items-start">
                <Check className="h-6 w-6 text-[#E63223] mr-3 shrink-0 stroke-[3]" />
                <p className="text-sm font-bold text-black">
                  <span className="underline decoration-2">Explorer Card</span>: Complete quests to collect digital stamps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t-8 border-black bg-[#0C0A09] text-[#F7F1DC]" id="metahuman">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          {/* Main Section Header */}
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <div className="inline-block border-4 border-black bg-[#FFD21E] text-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] mb-6">
              <span className="font-display text-xs sm:text-sm font-black tracking-wider uppercase">
                METAHUMAN &amp; DIGITAL TWIN
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              Preserving Papcio Chmiel’s legacy while transforming his world into a living digital learning ecosystem.
            </h2>
          </div>

          {/* Epic MetaHuman Viewport Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
            {/* Left Column: Large Unreal Engine Editor Viewport Mockup */}
            <div className="lg:col-span-7 flex flex-col justify-center border-4 border-black bg-black shadow-[12px_12px_0px_0px_rgba(17,17,17,1)] overflow-hidden">
              <img
                src="/images/papciochmiel-metahuman.png"
                alt="Papcio Chmiel MetaHuman Digital Twin Viewport"
                className="w-full h-auto block"
              />
            </div>

            {/* Right Column: Narrative Copy in English */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(17,17,17,1)] text-black">
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <span className="h-3 w-3 rounded-full bg-[#1267B1] border border-black animate-pulse" />
                  <span className="font-mono text-xs font-black uppercase tracking-widest text-zinc-500">
                    LEGACY PRESERVATION PROJECT
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase leading-tight text-black">
                  Papcio Chmiel as a Digital Guide
                </h3>

                <div className="text-xs sm:text-sm font-semibold text-zinc-800 leading-relaxed space-y-4">
                  <p>
                    We are developing a digital twin concept of Papcio Chmiel using modern real-time 3D technologies such as Unreal Engine 5 and MetaHuman creator.
                  </p>
                  <p>
                    This digital guide will welcome children into the virtual learning worlds, introduce space missions, explain complex scientific phenomena, comment on creative tasks, and help students discover the natural connection between comics, science, humor, and imagination.
                  </p>
                  <p>
                    The goal is not to replace the original creator, but to keep his spirit, storytelling energy, and educational legacy alive in a respectful, interactive, and future-facing format.
                  </p>
                </div>
              </div>



              {/* Blueprint Footer */}
              <div className="flex items-center justify-between text-[9px] font-mono text-zinc-400 pt-4 border-t border-black/10">
                <span>SIMULATION: READY</span>
                <span>METAHUMAN_GUIDE_OS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Development Process & CampusAI Community */}
      <section className="py-24 border-t-8 border-black bg-[#F7F1DC] text-black" id="process">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block border-4 border-black bg-[#B6FF4D] text-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] mb-4">
              <span className="font-display text-lg font-black tracking-widest uppercase">
                PROCESS
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-black leading-none">
              Co-creation &amp; Process
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-zinc-800 font-bold text-sm sm:text-base">
              How we build the Science Center together with the tech and creative community to reduce costs and scale impact.
            </p>
          </div>

          {/* Description Container */}
          <div className="max-w-4xl mx-auto border-4 border-black bg-white p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] space-y-6">
            <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-black">
              Co-creation with the CampusAI Community
            </h3>
            <p className="text-zinc-800 text-sm font-semibold leading-relaxed">
              Our project can be dynamically developed in active cooperation with the <strong>CampusAI community</strong>. This collaboration means that the community can help design and build various interactive elements of the virtual base and learning worlds.
            </p>
            <p className="text-zinc-800 text-sm font-semibold leading-relaxed">
              By crowdsourcing and co-creating key technical, educational, and design modules, we significantly reduce project implementation costs while building a deeply integrated ecosystem of creators, educators, and technology experts.
            </p>
            <div className="pt-4 border-t-2 border-black/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-xs font-bold text-zinc-600 max-w-md">
                Are you a member of CampusAI or interested in co-creating the Papcio Chmiel Science Center? Join our development channel.
              </p>
              <Link href="#szkoly" className="comic-button-yellow py-3 px-6 text-center text-xs font-bold uppercase shrink-0">
                <span>Join Co-creation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <DistrictFooter />
    </div>
  );
}
