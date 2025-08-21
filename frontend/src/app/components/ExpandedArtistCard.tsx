import React, { useEffect } from "react";
import localFont from "next/font/local";

const optima = localFont({
  src: "../../../public/fonts/OPTIMA.ttf",
  weight: "400",
  display: "swap",
});

export default function ExpandedArtistCard({
  artist,
  onClose,
}: {
  artist: any;
  onClose: () => void;
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
    <div className="w-full h-[clamp(45svh,55dvh,65lvh)] bg-artist_bg rounded-2xl flex flex-col md:flex-row overflow-hidden">
      <div className="w-full md:w-[52%] flex flex-col">
        <div className="relative w-full aspect-[4/5] overflow-hidden">
          <img
            src={artist.image}
            alt={artist.name}
            className="w-full h-full object-cover"
          />
          <img
            src={artist.mask}
            alt="Mask"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
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
        <button
          onClick={onClose}
          style={{ fontFamily: "gil-sans-nova, sans-serif" }}
          className="absolute top-[1rem] right-[1rem] text-grey text-[clamp(1.5rem,3vi,2rem)] hover:text-red transition-colors"
        >
          X
        </button>
        <p
          style={{ fontFamily: "gil-sans-nova, sans-serif", fontWeight: 500 }}
          className="text-grey text-[clamp(0.9rem,1.4vi,1.1rem)] leading-relaxed pt-[2em]"
        >
          {artist.description
            .split("\n")
            .map(
              (
                line:
                  | string
                  | number
                  | bigint
                  | boolean
                  | React.ReactElement<
                      unknown,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | Promise<
                      | string
                      | number
                      | bigint
                      | boolean
                      | React.ReactPortal
                      | React.ReactElement<
                          unknown,
                          string | React.JSXElementConstructor<any>
                        >
                      | Iterable<React.ReactNode>
                      | null
                      | undefined
                    >
                  | null
                  | undefined,
                idx: React.Key | null | undefined
              ) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              )
            )}
        </p>
      </div>
    </div>
  );
}
