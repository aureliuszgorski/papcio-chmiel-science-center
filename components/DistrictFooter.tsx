import React from "react";

export default function DistrictFooter() {
  return (
    <footer className="relative mt-20 border-t-8 border-black bg-[#FAF8F5] text-black py-10 px-6 sm:px-12">
      <div className="mx-auto max-w-4xl text-center space-y-4">
        <p className="text-xs sm:text-sm font-bold leading-relaxed text-[#111111]">
          The Papcio Chmiel Digital Science Center is a conceptual educational project created to preserve and share the legacy of Henryk Jerzy Chmielewski. All character depictions (Tytus, Romek, A&apos;Tomek) and comic illustrations are used strictly for presentation and conceptual visualization purposes.
        </p>
        <div className="text-[10px] sm:text-xs font-mono font-bold text-zinc-500">
          © {new Date().getFullYear()} Papcio Chmiel Digital Science Center. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
