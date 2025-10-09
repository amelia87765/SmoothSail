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
      dateLabel: (
        <>
          <span>25. października,</span>
          <span> zmiana czasu z letniego na zimowy</span>
        </>
      ),
      artists: artists.slice(0, 10),
    },
    {
      id: "2026_+1",
      year: "2026",
      label: "(+1)",
      logo: "/logo_strefy.svg",
      colorYear: "text-red",
      colorLabel: "text-blue",
      dateLabel: (
        <>
          <span>28. marca,</span>
          <span>zmiana czasu na letni</span>
        </>
      ),
      artists: artists.slice(10, 14),
    },
    {
      id: "2026_-1",
      year: "2026",
      label: "(-1)",
      logo: "/logo_strefy.svg",
      colorYear: "text-red",
      colorLabel: "text-blue",
      dateLabel: (
        <>
          <span>24. października,</span>
          <span>zmiana czasu na zimowy</span>
        </>
      ),
      artists: artists.slice(14, 15),
    },
  ];

  return (
    <section className="min-h-screen w-full relative bg-black overflow-hidden px-[clamp(3rem,6vw,6rem)] py-[clamp(2rem,5vh,4rem)]">
      <h1 className="absolute z-50 left-1/2 -translate-x-1/2 top-[clamp(1.5rem,6vh,3rem)] text-[clamp(3rem,8vw,9rem)] text-light_blue drop-shadow-lg">
        EDYCJE
      </h1>
      <div className="mt-[clamp(12rem,14vh,18rem)] flex flex-col gap-[clamp(8rem,12vh,10rem)]">
        {editions.map((edition) => {
          const groupedArtists = [];
          for (let i = 0; i < edition.artists.length; i += 2) {
            groupedArtists.push([edition.artists[i], edition.artists[i + 1]]);
          }

          return (
            <div key={edition.id} className="relative">
              <div className="flex flex-col items-start relative z-50 gap-[clamp(0.5rem,1.5vh,1rem)]">
                <div className="flex items-start gap-[clamp(1rem,2vw,1.5rem)]">
                  <div
                    className={`text-[clamp(2.5rem,5vw,6rem)] select-none whitespace-nowrap ${edition.colorYear}`}
                  >
                    {edition.year}{" "}
                    <span className={edition.colorYear}>{edition.label}</span>
                  </div>
                  <div
                    className={`${edition.colorLabel} text-[clamp(1rem,2.5vw,1.7rem)] flex flex-col justify-center leading-tight pt-[0.5rem] sm:pt-[0.5rem] md:pt-[1.25rem] lg:pt-[1.8rem]`}
                  >
                    {edition.dateLabel}
                  </div>
                </div>

                {edition.id === "2025_-1" && (
                  <div className="absolute right-0 top-[50%] -translate-y-1/2 text-light_blue text-[clamp(0.9rem,1.8vw,1.2rem)] whitespace-nowrap">
                    Kliknij na artystę, żeby dowiedzieć się więcej
                  </div>
                )}
                <img
                  src={edition.logo}
                  alt="logo"
                  className="w-[clamp(6rem,12vw,10rem)] h-[clamp(6rem,12vw,8rem)] relative z-50 mt-[-4rem] md:mt-[-3rem]"
                />
              </div>

              <div className="flex flex-col gap-[clamp(1rem,2vh,1.5rem)] relative z-50">
                {groupedArtists.map(([a1, a2], groupIndex) => {
                  const isExpanded1 = expandedId === a1?.id;
                  const isExpanded2 = expandedId === a2?.id;

                  return (
                    <div
                      key={groupIndex}
                      className="flex flex-col md:flex-row gap-[clamp(1rem,2vh,1.5rem)] w-full transition-all duration-700"
                    >
                      <div className="flex md:hidden w-full flex-col gap-[clamp(1rem,2vh,1.5rem)]">
                        {isExpanded1 ? (
                          <ExpandedArtistCard
                            artist={a1}
                            onClose={() => setExpandedId(null)}
                            mobile
                          />
                        ) : (
                          a1 && (
                            <ArtistCard
                              artist={a1}
                              onClick={() => setExpandedId(a1.id)}
                            />
                          )
                        )}
                        {isExpanded2 ? (
                          <ExpandedArtistCard
                            artist={a2}
                            onClose={() => setExpandedId(null)}
                            mobile
                          />
                        ) : (
                          a2 && (
                            <ArtistCard
                              artist={a2}
                              onClick={() => setExpandedId(a2.id)}
                            />
                          )
                        )}
                      </div>

                      <div className="hidden md:flex flex-col md:flex-row gap-[clamp(1rem,2vh,1.5rem)] w-full">
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
