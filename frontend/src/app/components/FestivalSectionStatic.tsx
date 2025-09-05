"use client";

import localFont from "next/font/local";

const optima = localFont({
  src: "../../../public/fonts/OPTIMA.ttf",
  weight: "400",
  display: "swap",
});

const TEXTS = [
  "DWIE STREFY",
  "PIĘĆ UNIKALNYCH WYSTĘPÓW",
  "WYSTAWY PRZESTRZENNE",
  "PROJEKTOWANIE ŚWIETLNE",
];

export default function FestivalSectionStatic({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <section
      id="festiwal-static"
      className="relative w-full h-screen bg-[#231F20] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute z-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center space-y-8">
        {TEXTS.map((text, index) => (
          <div
            key={index}
            className="text-[clamp(1.2rem,4vw,2.5rem)] text-light_blue opacity-70 blur-[10px]"
          >
            {text}
          </div>
        ))}
      </div>

      <div className="absolute w-full h-full opacity-100">
        <img
          src="/frame_red.svg"
          alt="Red Frame"
          className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto max-w-[90vw]"
        />
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-red text-[clamp(2rem,8vw,7rem)] leading-[0.9] text-center z-50">
        JEDNO <br /> KLIMATYCZNE <br /> POŁĄCZENIE
      </div>
      {children}
    </section>
  );
}
