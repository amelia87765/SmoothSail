"use client";
import React from "react";
import { artists } from "../data/artists";
import ArtistCardLineup from "./ArtistCardLineup";

export default function LineupSection() {
  return (
    <section className="w-full min-h-screen bg-black py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[clamp(3rem,10vw,8rem)] text-light_blue text-center mb-16 leading-none">
          LINE-UP
        </h2>

        <div className="flex flex-col gap-12 md:gap-16">
          {artists.map((artist) => (
            <div key={artist.id} className="w-full">
              <ArtistCardLineup artist={artist} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
