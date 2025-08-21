"use client";
import { useState } from "react";
import ArtistCard from "./ArtistCard";
import ExpandedArtistCard from "./ExpandedArtistCard";
import { artists } from "../data/artists";

export default function EditionsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const editions = [
    {
      id: "2025_-1",
      year: "2025",
      label: "(-1)",
      logo: "/logo_strefy.svg",
      colorYear: "text-red",
      colorLabel: "text-blue",
      artists: artists.slice(0, 6),
    },
    {
      id: "2026_+1",
      year: "2026",
      label: "(+1)",
      logo: "/logo_strefy.svg",
      colorYear: "text-red",
      colorLabel: "text-blue",
      artists: artists.slice(7, 11),
    },
    {
      id: "2026_-1",
      year: "2026",
      label: "(-1)",
      logo: "/logo_strefy.svg",
      colorYear: "text-red",
      colorLabel: "text-blue",
      artists: artists.slice(11, 12),
    },
  ];

  return (
    <section className="min-h-screen w-full relative bg-black overflow-hidden px-[clamp(3rem,6vw,6rem)] py-[clamp(2rem,5vh,4rem)]">
      <h1 className="absolute z-20 left-1/2 -translate-x-1/2 top-[clamp(1.5rem,6vh,3rem)] text-[clamp(3rem,8vw,9rem)] text-light_blue drop-shadow-lg">
        EDYCJE
      </h1>
      <div className="mt-[clamp(18rem,45vh,32rem)] flex flex-col gap-[clamp(8rem,12vh,10rem)]">
        {editions.map((edition, idx) => {
          const groupedArtists = [];
          for (let i = 0; i < edition.artists.length; i += 2) {
            groupedArtists.push([edition.artists[i], edition.artists[i + 1]]);
          }

          const dateLabel =
            idx === 1 ? (
              <>
                <span>Koniec marca,</span>
                <span>zmiana czasu na letni</span>
              </>
            ) : (
              <>
                <span>Koniec października,</span>
                <span>zmiana czasu na zimowy</span>
              </>
            );

          return (
            <div key={edition.id} className="relative">
              <div className="flex flex-col items-start relative z-30 gap-[clamp(0.5rem,1.5vh,1rem)]">
                <div className="flex items-start gap-[clamp(1rem,2vw,1.5rem)]">
                  <div
                    className={`text-[clamp(2.5rem,5vw,6rem)] select-none ${edition.colorYear}`}
                  >
                    {edition.year}{" "}
                    <span className={edition.colorYear}>{edition.label}</span>
                  </div>
                  <div
                    className={`${edition.colorLabel} text-[clamp(1rem,2.5vw,2.5rem)] flex flex-col justify-center leading-tight pt-[0.25rem]`}
                  >
                    {dateLabel}
                  </div>
                </div>

                <img
                  src={edition.logo}
                  alt="logo"
                  className="w-[clamp(6rem,12vw,10rem)] h-[clamp(6rem,12vw,8rem)] relative z-30"
                  style={{
                    marginTop: "-4rem",
                  }}
                />
              </div>

              <div className="flex flex-col gap-[clamp(1rem,2vh,1.5rem)] relative z-10">
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
            </div>
          );
        })}
      </div>
    </section>
  );
}
