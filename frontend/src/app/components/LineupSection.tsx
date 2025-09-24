"use client";
import React from "react";
//import { artists } from "../data/artists";
//import ArtistCardLineup from "./ArtistCardLineup";

export default function LineupSection() {
  return (
    <section className="w-full min-h-screen bg-black pt-10 md:pt-20 flex flex-col items-center relative z-5">
      <h2 className="text-[clamp(3rem,10vw,8rem)] text-light_blue text-center mb-16 leading-none z-50">
        LINE-UP
      </h2>

      <div className="w-full flex flex-col items-center gap-12 md:gap-16 px-[5vw]">
        <h2 className="text-[clamp(1rem,1.75vw,2.5rem)] text-light_blue text-center mt-16 mb-4 leading-none z-50">
          W tym miejscu będziemy sukcesywnie ogłaszać artystów kreujących
          nadchodzącą edycję Stref Czasowych.
        </h2>
        <h2 className="text-[clamp(1rem,2vw,2.5rem)] text-light_blue text-center mb-16 leading-none z-50">
          Wracaj po więcej.
        </h2>
      </div>
    </section>
  );
}
