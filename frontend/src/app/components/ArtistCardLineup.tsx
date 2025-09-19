"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import localFont from "next/font/local";

const optima = localFont({
  src: "../../../public/fonts/URWClassico.ttf",
  weight: "400",
  display: "swap",
});

interface Artist {
  name: string;
  description: string;
  image: string;
  mask?: string;
  subtitle?: string;
  specialty: string;
  instagram?: string;
}

interface ArtistCardLineupProps {
  artist: Artist;
}

export default function ArtistCardLineup({ artist }: ArtistCardLineupProps) {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://use.typekit.net/zik8iyz.css";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="w-full h-[clamp(45svh,55dvh,65lvh)] flex rounded-2xl overflow-hidden relative">
      {/* LEWA STRONA */}
      <div className="w-1/2 flex flex-col bg-artist_bg rounded-l-2xl overflow-hidden relative z-50">
        <div className="relative w-full h-[70%] overflow-hidden">
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
              width={600}
              height={600}
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-50"
            />
          )}
        </div>

        <div className="flex justify-between items-center px-[clamp(1rem,2vw,1.5rem)] py-[1em]">
          <div className="flex flex-col">
            <span className="text-grey text-[clamp(1.2rem,3vi,2rem)]">
              {artist.name}
            </span>
            {artist.subtitle && (
              <span
                style={{
                  fontFamily: "gil-sans-nova, sans-serif",
                  fontWeight: 500,
                  marginTop: "-0.3rem",
                  transition: "margin-top 0.5s ease-in-out",
                }}
                className="text-grey text-[clamp(0.8rem,1.8vi,1rem)] "
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
      <div className="w-1/2 bg-[#9ea69d] rounded-r-2xl flex flex-col justify-between p-6 relative z-40">
        <div className="overflow-y-auto pr-2 mt-6">
          <p
            style={{ fontFamily: "gil-sans-nova, sans-serif", fontWeight: 500 }}
            className="text-black text-[clamp(0.9rem,1.2vi,1.3rem)] leading-relaxed"
          >
            {artist.description}
          </p>
        </div>

        {/* PRZYCISKI (ELIPSY) */}
        <div className="mt-6 flex gap-4">
          {/* PLAY */}
          <button
            type="button"
            aria-label={`Play ${artist.name} (preview)`}
            className="relative h-14 px-10 rounded-full flex items-center justify-center bg-[#4f90b1]"
          >
            <span
              className="block"
              style={{
                width: 0,
                height: 0,
                borderTop: "12px solid transparent",
                borderBottom: "12px solid transparent",
                borderLeft: "20px solid #ff5b2e",
              }}
            />
          </button>

          {/* INSTAGRAM */}
          {artist.instagram && (
            <a
              href={artist.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 px-10 rounded-full flex items-center justify-center bg-[#8b5e3c] text-white font-bold"
            >
              IG
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
