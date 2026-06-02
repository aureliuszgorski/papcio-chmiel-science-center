"use client";

import React, { useState, useEffect } from "react";

export default function PasswordProtect({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const auth = sessionStorage.getItem("site_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === "papciochmiel") {
      sessionStorage.setItem("site_auth", "true");
      setIsAuthenticated(true);
    } else {
      setError(true);
      setPassword("");
    }
  };

  if (!mounted) return null;

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0C0A09] p-6 text-white overflow-hidden">
      {/* Halftone / Comic dots grid pattern overlay */}
      <div className="absolute inset-0 -z-30 pointer-events-none opacity-[0.03] bg-[radial-gradient(#FFFFFF_15%,transparent_16%)] bg-[size:16px_16px]" />
      
      <div className="max-w-md w-full p-8 border-4 border-black bg-zinc-950 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] relative z-10">
        <div className="text-center space-y-2 mb-8">
          <div className="inline-block border-2 border-black bg-[#E63223] text-white px-3 py-1 shadow-[3px_3px_0px_0px_rgba(17,17,17,1)] mb-4">
            <span className="font-display text-sm font-black tracking-widest uppercase">
              RESTRICTED ACCESS
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight leading-none text-white">
            PAPCIO CHMIEL<br />
            <span className="text-[#FFD21E]">SCIENCE CENTER</span>
          </h1>
          <p className="text-zinc-400 font-bold text-xs pt-2">
            Enter the password to access the digital twin.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              className={`appearance-none rounded-none relative block w-full px-4 py-4 border-4 ${error ? 'border-[#E63223]' : 'border-black'} bg-black text-white font-mono text-lg focus:outline-none focus:ring-4 focus:ring-[#1267B1] placeholder-zinc-700 shadow-inner`}
              placeholder="Password..."
              autoFocus
            />
            {error && (
              <p className="absolute -bottom-6 left-0 right-0 text-[#E63223] text-[10px] font-black uppercase tracking-wider text-center bg-black/80 py-0.5">
                ACCESS DENIED: Incorrect password
              </p>
            )}
          </div>
          
          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex justify-center py-4 px-4 border-4 border-black text-sm font-black uppercase tracking-widest bg-[#FFD21E] text-black hover:bg-white focus:outline-none transition-colors shadow-[4px_4px_0px_0px_#111111]"
            >
              UNLOCK
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
