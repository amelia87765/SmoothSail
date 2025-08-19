"use client";
import { useState } from "react";
import ArtistCard from "./ArtistCard";
import ExpandedArtistCard from "./ExpandedArtistCard";
import { artists } from "../data/artists";
import { Edition } from "../data/editions";

type Props = {
  edition: Edition;
};

export default function EditionBlock({ edition }: Props) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const editionArtists = edition.artistIndexes
    .map((id) => artists.find((a) => a.id === id))
    .filter(Boolean) as (typeof artists)[number][];

  const groupedArtists: (typeof artists)[number][][] = [];
  for (let i = 0; i < editionArtists.length; i += 2) {
    const group: (typeof artists)[number][] = [];
    if (editionArtists[i]) group.push(editionArtists[i]);
    if (editionArtists[i + 1]) group.push(editionArtists[i + 1]);
    groupedArtists.push(group);
  }

  return (
    <section className="min-h-screen w-full relative bg-black overflow-hidden px-[clamp(1rem,3vw,2rem)] py-[clamp(2rem,5vh,4rem)]">
      <h1 className="absolute z-20 left-1/2 -translate-x-1/2 top-[clamp(1.5rem,6vh,3rem)] text-[clamp(3rem,8vw,9rem)] text-light_blue drop-shadow-lg">
        {edition.title.toUpperCase()}
      </h1>

      <div className="absolute left-[clamp(3rem,6vw,6rem)] top-[clamp(12rem,27vh,18rem)] z-20 flex items-start gap-[clamp(1rem,2vw,1.5rem)]">
        <div className="text-[clamp(2.5rem,5vw,6rem)] text-red select-none">
          {edition.yearLabel}
        </div>
        <div className="text-blue text-[clamp(1rem,2.5vw,2.5rem)] flex flex-col justify-center leading-tight pt-[0.5rem]">
          {edition.title.split(",").map((line, i) => (
            <span key={i}>{line.trim()}</span>
          ))}
        </div>
      </div>

      <img
        src={edition.logo}
        alt="logo"
        className="absolute left-[clamp(3rem,6vw,6rem)] top-[clamp(14rem,35vh,25rem)] w-[clamp(6rem,12vw,10rem)] h-[clamp(6rem,12vw,8rem)] z-20"
      />

      <div className="mt-[clamp(18rem,45vh,32rem)] flex flex-col gap-[clamp(1rem,2vh,1.5rem)] max-w-7xl mx-auto z-10 relative">
        {groupedArtists.map(([a1, a2], groupIndex) => {
          const isExpanded1 = a1 && expandedId === a1.id;
          const isExpanded2 = a2 && expandedId === a2.id;

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
