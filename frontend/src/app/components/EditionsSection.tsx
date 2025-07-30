"use client";
import { useState } from "react";
import ArtistCard from "./ArtistCard";
import ExpandedArtistCard from "./ExpandedArtistCard";
import { artists } from "../data/artists";

export default function EditionsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const groupedArtists = [];
  for (let i = 0; i < artists.length; i += 2) {
    groupedArtists.push([artists[i], artists[i + 1]]);
  }

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

      <div className="mt-[28rem] flex flex-col gap-8 max-w-7xl mx-auto z-10 relative">
        {groupedArtists.map(([a1, a2], groupIndex) => {
          const isExpanded1 = expandedId === a1?.id;
          const isExpanded2 = expandedId === a2?.id;

          return (
            <div
              key={groupIndex}
              className="flex flex-col md:flex-row gap-8 w-full transition-all duration-700"
            >
              {isExpanded1 ? (
                <ExpandedArtistCard
                  artist={a1}
                  isLeft
                  onClose={() => setExpandedId(null)}
                />
              ) : isExpanded2 ? (
                <ExpandedArtistCard
                  artist={a2}
                  isLeft={false}
                  onClose={() => setExpandedId(null)}
                />
              ) : (
                <>
                  {a1 && (
                    <div className="w-full md:w-1/2">
                      <ArtistCard
                        artist={a1}
                        onClick={() => setExpandedId(a1.id)}
                      />
                    </div>
                  )}
                  {a2 && (
                    <div className="w-full md:w-1/2">
                      <ArtistCard
                        artist={a2}
                        onClick={() => setExpandedId(a2.id)}
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
