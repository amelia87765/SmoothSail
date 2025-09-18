import Image from "next/image";
import React, { useEffect } from "react";

interface Artist {
  name: string;
  image: string;
  mask?: string;
  subtitle?: string;
  specialty: string;
}

interface ArtistCardProps {
  artist: Artist;
  onClick: () => void;
}

export default function ArtistCard({ artist, onClick }: ArtistCardProps) {
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
    <div
      className="z-50 h-[35vh] md:h-[clamp(45svh,55dvh,65lvh)] aspect[4/3] bg-artist_bg cursor-pointer overflow-hidden relative flex flex-col rounded-2xl"
      onClick={onClick}
    >
      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-2xl">
        <Image
          src={artist.image}
          alt={artist.name}
          width={400}
          height={500}
          className="absolute inset-0 w-full h-full object-cover overflow-hidden object-center"
        />
        {artist.mask && (
          <Image
            src={artist.mask}
            alt="Mask"
            width={400}
            height={500}
            className="absolute inset-0 w-full h-full object-cover object-center overflow-hidden pointer-events-none"
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
  );
}
