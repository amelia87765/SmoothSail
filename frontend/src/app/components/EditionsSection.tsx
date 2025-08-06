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
    <section className="min-h-screen w-full relative bg-black overflow-hidden px-[clamp(1rem,3vw,2rem)] py-[clamp(2rem,5vh,4rem)]">
      <h1 className="absolute z-20 left-1/2 -translate-x-1/2 top-[clamp(2rem,8vh,4rem)] text-[clamp(3rem,8vw,9rem)] text-light_blue drop-shadow-lg">
        EDYCJE
      </h1>

      <div className="absolute left-[clamp(1rem,3vw,2rem)] top-[clamp(10rem,25vh,16rem)] z-20 flex items-start gap-[clamp(1rem,2vw,1.5rem)]">
        <div className="text-[clamp(2rem,5vw,5rem)] text-red select-none">
          2025 <span className="text-red">(-1)</span>
        </div>
        <div className="text-blue text-[clamp(0.875rem,1.5vw,1.25rem)] flex flex-col justify-center leading-tight pt-[0.5rem]">
          <span>Koniec października,</span>
          <span>zmiana czasu na zimowy</span>
        </div>
      </div>

      <img
        src="/logo_strefy.svg"
        alt="logo"
        className="absolute left-[clamp(1rem,3vw,2rem)] top-[clamp(14rem,35vh,20rem)] w-[clamp(4rem,8vw,7rem)] h-[clamp(4rem,8vw,7rem)] z-20"
      />

      <div className="mt-[clamp(16rem,40vh,28rem)] flex flex-col gap-[clamp(1rem,2vh,1.5rem)] max-w-7xl mx-auto z-10 relative">
        {groupedArtists.map(([a1, a2], groupIndex) => {
          const isExpanded1 = expandedId === a1?.id;
          const isExpanded2 = expandedId === a2?.id;

          return (
            <div
              key={groupIndex}
              className="flex flex-col md:flex-row gap-[clamp(1rem,2vh,1.5rem)] w-full transition-all duration-700"
            >
              {isExpanded1 ? (
                <ExpandedArtistCard
                  artist={a1}
                  onClose={() => setExpandedId(null)}
                />
              ) : isExpanded2 ? (
                <ExpandedArtistCard
                  artist={a2}
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
