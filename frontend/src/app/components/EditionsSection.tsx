"use client";
import { useState } from "react";
import ArtistCard from "./ArtistCard";
import ExpandedArtistCard from "./ExpandedArtistCard";
import { artists } from "../data/artists";

export default function EditionsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="min-h-[200vh] w-full relative bg-black overflow-hidden px-6 py-16">
      <h1 className="absolute z-20 left-1/2 -translate-x-1/2 top-12 text-[9rem] text-light_blue drop-shadow-lg">
        EDYCJE
      </h1>

      <div className="absolute left-8 top-[calc(12rem+4vw)] z-20 flex items-start gap-10">
        <div className="text-[5rem] text-red select-none">
          2025 <span className="text-red">(-1)</span>
        </div>
        <div className="text-blue text-xl flex flex-col justify-center leading-tight pt-3">
          <span>Koniec października,</span>
          <span>zmiana czasu na zimowy</span>
        </div>
      </div>

      <img
        src="/logo_strefy.svg"
        alt="logo"
        className="absolute left-8 top-[calc(12rem+12vw)] w-28 h-28 z-20"
      />

      <div className="mt-[28rem] grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto z-10 relative">
        {artists.map((artist, index) =>
          expandedId === artist.id ? (
            <ExpandedArtistCard
              key={artist.id}
              artist={artist}
              isLeft={index % 2 === 0}
              onClose={() => setExpandedId(null)}
            />
          ) : expandedId ? null : (
            <ArtistCard
              key={artist.id}
              artist={artist}
              onClick={() => setExpandedId(artist.id)}
            />
          )
        )}
      </div>
    </section>
  );
}
