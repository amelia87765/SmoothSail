"use client";
import { useEffect, useState } from "react";

export default function EditionsSection() {
  return (
    <section className="h-[200vh] w-full z-5 relative bg-black overflow-hidden">
      <h1 className="absolute z-20 left-1/2 -translate-x-1/2 top-12 text-[9rem] text-light_blue drop-shadow-lg">
        EDYCJE
      </h1>
      <div className="absolute left-8 top-[calc(12rem+4vw)] z-20">
        <div className="text-[5rem] md:text-[5rem] text-red select-none">
          2025 <span className="text-red">(-1)</span>
        </div>
      </div>
    </section>
  );
}
