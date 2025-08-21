import React, { useEffect } from "react";

export default function ArtistCard({
  artist,
  onClick,
}: {
  artist: any;
  onClick: () => void;
}) {
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
      className="h-[clamp(45svh,55dvh,65lvh)] aspect[4/3] bg-artist_bg cursor-pointer overflow-hidden relative flex flex-col rounded-2xl"
      onClick={onClick}
    >
      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-2xl">
        <img
          src={artist.image}
          alt={artist.name}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <img
          src={artist.mask}
          alt="Mask"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />
      </div>

      <div className="flex justify-between items-center px-[clamp(1rem,2vw,1.5rem)] py-[1em]">
        <div className="flex flex-col">
          <span className="text-grey text-[clamp(1.5rem,3vi,2rem)]">
            {artist.name}
          </span>
          {artist.subtitle && (
            <span
              style={{
                fontFamily: "gil-sans-nova, sans-serif",
                fontWeight: 500,
                marginTop: "-0.5rem",
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
