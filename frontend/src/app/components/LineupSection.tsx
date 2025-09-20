"use client";
import React from "react";
import { artists } from "../data/artists";
import ArtistCardLineup from "./ArtistCardLineup";

export default function LineupSection() {
  return (
    <section className="w-full min-h-screen bg-black py-40 flex flex-col items-center relative z-5">
      <h2 className="text-[clamp(3rem,10vw,8rem)] text-light_blue text-center mb-16 leading-none z-50">
        LINE-UPsi
      </h2>

      <div className="w-full flex flex-col items-center gap-12 md:gap-16 px-[5vw]">
        {artists.map((artist) => (
          <div key={artist.id} className="w-full">
            <ArtistCardLineup artist={artist} />
          </div>
        ))}
      </div>
    </section>
  );
}
