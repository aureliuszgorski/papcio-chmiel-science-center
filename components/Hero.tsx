import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center pt-36 pb-28 px-6 sm:px-12 md:px-24 bg-black">
      {/* Background image center.png */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/center.png"
          alt="Science Center Background"
          fill
          priority
          className="object-cover opacity-95"
        />
        {/* Dark overlay gradient for contrast: vertical on mobile, horizontal fade on desktop */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black lg:bg-gradient-to-r lg:from-black lg:via-black/45 lg:to-transparent z-10" />
      </div>

      <div className="mx-auto max-w-7xl w-full relative z-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column Copy (occupying left-side on desktop to leave right-side open for the background) */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-6">
            
            {/* Tagline */}
            <div className="inline-flex items-center space-x-2 border-4 border-black bg-comic-cyan px-4 py-1.5 shadow-[3px_3px_0px_0px_#111111]">
              <span className="font-display font-extrabold uppercase tracking-wider text-xs text-white">
                PAPCIO CHMIEL SCIENCE CENTER
              </span>
            </div>

            {/* Screaming Header */}
            <h1 className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tight text-white leading-none">
              <span className="inline-block bg-comic-yellow border-4 border-black px-4 text-black shadow-[4px_4px_0px_0px_#111111] -rotate-1 transform">
                PAPCIO CHMIEL
              </span> <br />
              SCIENCE CENTER
            </h1>

            {/* Cool Slogans Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2 pb-1">
              <span className="inline-block bg-[#B6FF4D] text-black border-2 border-black px-3 py-1 text-xs font-black font-display uppercase tracking-widest shadow-[3px_3px_0px_0px_#111111] -rotate-1 hover:rotate-0 transition-transform cursor-default">
                24/7 Access
              </span>
              <span className="inline-block bg-[#48D8FF] text-black border-2 border-black px-3 py-1 text-xs font-black font-display uppercase tracking-widest shadow-[3px_3px_0px_0px_#111111] rotate-1 hover:rotate-0 transition-transform cursor-default">
                Available Everywhere
              </span>
              <span className="inline-block bg-[#FFD21E] text-black border-2 border-black px-3 py-1 text-xs font-black font-display uppercase tracking-widest shadow-[3px_3px_0px_0px_#111111] -rotate-1 hover:rotate-0 transition-transform cursor-default">
                Tailored for Every Child
              </span>
            </div>

            {/* Sub-headline Card */}
            <div className="comic-panel p-6 shadow-[6px_6px_0px_0px_#111111] bg-white border-4 border-black text-black">
              <h2 className="font-display text-xl sm:text-2xl font-black leading-snug uppercase mb-3">
                A comic-powered digital science center where children discover science, space, geography, technology and creativity through the world of Papcio Chmiel, Tytus, Romek and A’Tomek.
              </h2>
              <p className="text-xs sm:text-sm font-bold text-zinc-800 leading-relaxed border-t-2 border-black/10 pt-3">
                Start in school or at a pop-up. Continue the mission at home. One day, help us build the future physical center.
              </p>
            </div>

            {/* CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-3xl">
              <Link
                href="#szkoly"
                className="comic-button-red py-3.5 px-6 text-center text-xs sm:text-sm"
              >
                <span>BRING IT TO YOUR SCHOOL</span>
              </Link>
              <Link
                href="#popup"
                className="comic-button-cyan py-3.5 px-6 text-center text-xs sm:text-sm"
              >
                <span>ORDER A POP-UP</span>
              </Link>
              <Link
                href="#dom"
                className="comic-button-yellow py-3.5 px-6 text-center text-xs sm:text-sm"
              >
                <span>CONTINUE AT HOME</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
