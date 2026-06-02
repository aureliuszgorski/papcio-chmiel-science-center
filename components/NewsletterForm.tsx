"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [profileType, setProfileType] = useState("fan");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="py-16 border-t-4 border-black bg-[#0C0A09]" id="spolecznosc">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
          Stay Updated on Project Milestones
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-400 font-medium">
          Subscribe to our newsletter to receive monthly technical updates about the digital twin development and new comic lesson scenarios.
        </p>

        <div className="mt-8 max-w-lg mx-auto">
          {submitted ? (
            <div className="flex items-center justify-center space-x-2 text-black text-sm font-bold bg-comic-yellow border-4 border-black p-4 shadow-[4px_4px_0px_0px_#000000]">
              <CheckCircle2 className="h-5 w-5 stroke-[2.5]" />
              <span>Thank you! Your email has been added to our subscriber database.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="flex-1 border-4 border-black bg-white px-4 py-3 text-xs text-black placeholder-zinc-500 font-bold outline-none shadow-[2px_2px_0px_0px_#000000] focus:shadow-[3px_3px_0px_0px_#000000] transition-all rounded-none"
                />

                <select
                  value={profileType}
                  onChange={(e) => setProfileType(e.target.value)}
                  className="border-4 border-black bg-white px-4 py-3 text-xs text-black font-bold outline-none shadow-[2px_2px_0px_0px_#000000] focus:shadow-[3px_3px_0px_0px_#000000] transition-all rounded-none appearance-none cursor-pointer sm:w-44 text-left"
                >
                  <option value="fan">Comic Fan</option>
                  <option value="rodzic">Parent</option>
                  <option value="nauczyciel">Teacher</option>
                  <option value="partner">Partner / Media</option>
                </select>

                <button
                  type="submit"
                  className="comic-button-yellow py-3 px-6 shrink-0 flex items-center justify-center space-x-2"
                >
                  <span>Subscribe</span>
                  <Send className="h-4 w-4 stroke-[3]" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
