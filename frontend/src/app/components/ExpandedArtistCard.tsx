import React from "react";
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
}

interface ExpandedArtistCardProps {
  artist: Artist;
  onClose: () => void;
  mobile?: boolean;
}

export default function ExpandedArtistCard({
  artist,
  onClose,
  mobile = false,
}: ExpandedArtistCardProps) {
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
        style={{ fontFamily: "gil-sans-nova, sans-serif", fontWeight: 500 }}
        className="text-grey text-[clamp(0.9rem,1.4vi,1.4rem)] leading-relaxed pt-[2em]"
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

  const CloseButton = () => (
    <button
      onClick={onClose}
      style={{ fontFamily: "gil-sans-nova, sans-serif" }}
      className="absolute top-[1rem] right-[1rem] text-grey text-[clamp(1.5rem,3vi,2rem)] hover:text-red transition-colors z-10"
    >
      X
    </button>
  );

  if (mobile) {
    return (
      <div
        className="w-full h-[35vh] bg-artist_bg rounded-2xl relative flex"
        onClick={onClose}
      >
        <CloseButton />
        <div className="w-full p-[clamp(1rem,2vw,1.5rem)] overflow-y-auto">
          <DescriptionText />
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full h-[clamp(45svh,55dvh,65lvh)] bg-artist_bg rounded-2xl flex flex-col md:flex-row overflow-hidden"
      onClick={onClose}
    >
      <div className="w-full md:w-[52%] flex flex-col">
        <div className="relative w-full aspect-[4/5] overflow-hidden">
          <Image
            src={artist.image}
            alt={artist.name}
            width={400}
            height={500}
            className="w-full h-full object-cover"
          />
          {artist.mask && (
            <Image
              src={artist.mask}
              alt="Mask"
              width={400}
              height={500}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
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
                className="text-grey text-[clamp(0.8rem,1.8vi,1rem)]"
              >
                {artist.subtitle}
              </span>
            )}
          </div>
          <span
            className={
              optima.className +
              " text-[clamp(0.75rem,1.5vi,1rem)] bg-red text-black px-[0.75em] py-[0.25em] rounded-full"
            }
          >
            {artist.specialty}
          </span>
        </div>
      </div>

      <div className="w-full md:w-[51%] p-[clamp(1rem,2vw,1.5rem)] overflow-y-auto relative">
        <CloseButton />
        <DescriptionText />
      </div>
    </div>
  );
}
