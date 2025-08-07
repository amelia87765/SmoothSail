"use client";

import { useState, useEffect } from "react";

const accordionData = [
  {
    question: "KOGO SZUKAMY?",
    answer: [
      "Sponsora, ktory chce nie tylko wesprzec festiwal finansowo,",
      "ale takze stac sie jego czescia,",
      "wpisze sie w bardzo narracyjny charakter wydarzenia,",
      "popusci wodze fantazji i stworzy wlasna strefe jedyna w swoim rodzaju,",
      "chce sie pokazac trojmiejskim fanom kultury.",
    ],
  },
  {
    question: "CO GWARANTUJEMY?",
    answer: [
      "Bycie glownym sponsorem festiwalu,",
      "przestrzen na wydarzeniu w samym centrum Gdyni,",
      "ekspozycje marki w materialach promocyjnych online i offline,",
      "bycie kluczowa czescia nowoczesnego immersyjnego projektu,",
      "profesjonalizm, ....",
    ],
  },
];

export default function Partnerzy() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://use.typekit.net/zik8iyz.css";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="h-[200vh] bg-gradient-to-b from-black via-partners_bg to-black w-full px-4 sm:px-6 py-16 md:py-20 lg:py-24 flex flex-col items-center gap-8 md:gap-10 z-5 relative overflow-x-hidden">
      <h2 className="z-20 text-9xl sm:text-10xl md:text-12xl text-center text-white">
        PARTNERZY
      </h2>
      <p className="z-20 text-lg md:text-xl text-center text-light_blue max-w-2xl">
        Dolacz do nas i stworz wlasna strefe
      </p>

      <div className="w-full max-w-5xl flex flex-col gap-2 z-20 px-2 sm:px-4">
        {accordionData.map((item, index) => {
          const isOpen = openIndex === index;
          const ry = isOpen ? 120 : 60;
          const minHeight = isOpen ? "16rem" : "8rem";
          return (
            <div
              key={index}
              onClick={() => toggle(index)}
              className="cursor-pointer w-full"
            >
              <div
                className="relative w-full transition-all duration-500 ease-in-out"
                style={{
                  minHeight,
                }}
              >
                <svg
                  viewBox="0 0 600 240"
                  className="w-full h-full transition-all duration-500 ease-in-out"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <ellipse
                    cx="300"
                    cy="120"
                    rx="280"
                    ry={ry}
                    fill="url(#grad)"
                    className="transition-all duration-500"
                  />
                  <defs>
                    <radialGradient id="grad" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#C3D0E1" />
                      <stop offset="100%" stopColor="#9E9626" />
                    </radialGradient>
                  </defs>
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-16">
                  <h3 className="text-[3rem] text-blue font-semibold">
                    {item.question}
                  </h3>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="space-y-2 text-base sm:text-lg md:text-xl text-gray">
                      {item.answer.map((a, i) => (
                        <p key={i}>{a}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
