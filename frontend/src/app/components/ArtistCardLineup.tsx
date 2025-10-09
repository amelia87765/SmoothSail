"use client";
import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

interface Artist {
  name: string;
  description: string;
  image: string;
  mask?: string;
  subtitle?: string;
  specialty: string;
  instagram?: string;
  music?: string;
}

interface ArtistCardLineupProps {
  artist: Artist;
}

const akzid = localFont({
  src: "../../../public/fonts/AkzidGrtskNext.ttf",
  weight: "400",
  display: "swap",
});

export default function ArtistCardLineup({ artist }: ArtistCardLineupProps) {
  const DescriptionText = () => {
    const formatText = (text: string) => {
      const parts = text.split(/(\*\*.*?\*\*|_.*?_)/);

      return parts
        .map((part, index) => {
          if (!part) return null;
          if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={index}>{part.slice(2, -2)}</strong>;
          }
          if (part.startsWith("_") && part.endsWith("_")) {
            return <em key={index}>{part.slice(1, -1)}</em>;
          }
          return part;
        })
        .filter(Boolean);
    };

    return (
      <p
        className={`text-grey text-[clamp(0.9rem,1.3vw,1.4rem)] ${akzid.className}`}
      >
        {typeof artist.description === "string"
          ? artist.description.split("\n").map((line: string, idx: number) => (
              <React.Fragment key={idx}>
                {formatText(line)}
                <br />
              </React.Fragment>
            ))
          : artist.description}
      </p>
    );
  };

  return (
    <div className="w-full md:h-[clamp(50svh,60dvh,70lvh)] bg-artist_bg rounded-2xl flex flex-col md:flex-row overflow-hidden ">
      {/* LEWA STRONA */}
      <div className="w-full md:w-1/2 flex flex-col bg-artist_bg rounded-l-2xl overflow-hidden relative z-50 ">
        <div className="relative w-full h-[30vh] md:h-full aspect-[4/5] overflow-hidden py-4">
          <Image
            src={artist.image}
            alt={artist.name}
            width={600}
            height={600}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {artist.mask && (
            <Image
              src={artist.mask}
              alt="Mask"
              width={620}
              height={620}
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-50"
            />
          )}
        </div>

        <div className="flex justify-between items-center px-[clamp(1rem,2vw,1.5rem)] py-[1em]">
          <div className="flex flex-col">
            <span className="text-grey text-[clamp(1.2rem,4vw,2rem)]">
              {artist.name}
            </span>
            {artist.subtitle && (
              <span
                className={`text-grey text-[clamp(0.8rem,2.5vw,1rem) ${akzid.className}`}
              >
                {artist.subtitle}
              </span>
            )}
          </div>
          <span className="text-[clamp(0.75rem,1.5vi,1rem)] bg-red text-black px-[0.75em] py-[0.25em] rounded-full">
            {artist.specialty}
          </span>
        </div>
      </div>

      {/* PRAWA STRONA */}
      <div className="w-full md:w-1/2 flex-1 bg-artist_bg md:rounded-r-2xl flex flex-col justify-between p-3 md:p-6 relative z-40">
        <div className="overflow-y-auto pt-4 pr-2">
          <DescriptionText />
        </div>
        {/* PRZYCISKI (ELIPSY) */}
        <div className="mt-3 flex justify-center gap-6">
          {/* MUZYKA (YouTube) */}
          {artist.music && (
            <a
              href={artist.music}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center"
              style={{
                width: "clamp(9rem, 14vw, 16rem)",
                height: "clamp(4rem, 5vw, 6rem)",
              }}
            >
              <svg
                viewBox="0 0 200 100"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                <ellipse cx="100" cy="50" rx="95" ry="45" fill="#477F9C" />
              </svg>
              <span
                className="relative z-10"
                style={{
                  width: 0,
                  height: 0,
                  borderTop: "clamp(18px,2vw,14px) solid transparent",
                  borderBottom: "clamp(18px,2vw,14px) solid transparent",
                  borderLeft: "clamp(28px,3vw,34px) solid #FF4F23",
                }}
              />
            </a>
          )}

          {/* INSTAGRAM */}
          {artist.instagram && (
            <a
              href={artist.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center text-white font-bold"
              style={{
                width: "clamp(9rem, 14vw, 16rem)",
                height: "clamp(4rem, 5vw, 6rem)",
              }}
            >
              <svg
                viewBox="0 0 200 100"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                <ellipse cx="100" cy="50" rx="95" ry="45" fill="#46351C" />
              </svg>
              <span className="relative z-10">IG</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
