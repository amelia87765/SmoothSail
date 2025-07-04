"use client";

import localFont from "next/font/local";

const optima = localFont({
  src: "../../../public/fonts/OPTIMA.ttf",
  weight: "400",
  display: "swap",
});

export default function BasicPage() {
  return (
    <div
      className={`relative h-screen w-screen overflow-hidden ${optima.className}`}
    >
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#1a280a] via-[#46351c] to-[#ff4f23]" />

      <img
        src="/strefy.svg"
        alt="Maska"
        className="fixed inset-0 z-10 w-full h-full object-cover pointer-events-none"
      />

      <img
        src="/logo_strefy.svg"
        alt="Logo"
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
      />
    </div>
  );
}
