import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Room } from "@/data/rooms";

type RoomCardProps = {
  room: Room;
};

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <div
      className="flex flex-col justify-between border-4 border-black bg-comic-paper text-black shadow-[6px_6px_0px_0px_#111111] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_#111111] transition-all duration-200 relative group overflow-hidden"
    >
      <div>
        {/* Content Section */}
        <div className="p-5 space-y-4">
          <h3 className="font-display text-2xl font-black text-black uppercase tracking-tight leading-none group-hover:text-comic-red transition-colors duration-200">
            {room.title}
          </h3>
          <p className="text-xs leading-relaxed text-zinc-800 font-bold">
            {room.description}
          </p>

          <div className="pt-3 border-t-2 border-dashed border-black/20">
            <span className="block text-[10px] text-zinc-650 font-extrabold uppercase tracking-wider mb-1">
              What they learn:
            </span>
            <p className="text-[11px] text-zinc-900 font-bold leading-normal">
              {room.learningOutcomes.join(", ")}.
            </p>
          </div>
        </div>
      </div>

      <div className="p-5 pt-0 flex justify-end">
        <Link
          href={`/rooms/${room.slug}`}
          className="comic-button-cyan py-1.5 px-3.5 text-xs flex items-center space-x-1.5"
        >
          <span>Enter the mission</span>
          <ArrowRight className="h-3.5 w-3.5 stroke-[3] transform transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
