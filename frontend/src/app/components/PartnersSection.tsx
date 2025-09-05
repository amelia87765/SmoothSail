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
    <section className="min-h-screen bg-gradient-to-b from-black via-partners_bg to-[#231F20] w-full px-4 sm:px-6 py-16 md:py-20 lg:py-24 flex flex-col items-center gap-8 md:gap-10 z-5 relative overflow-x-hidden">
      <div className="z-20 text-center mb-0">
        <h2 className="text-[clamp(3rem,8vw,9rem)] text-light_blue mb-0 leading-tight">
          PARTNERZY
        </h2>
        <p
          style={{
            fontFamily: "gil-sans-nova, sans-serif",
            marginTop: "-1.2rem",
          }}
          className="text-[clamp(1rem,2vw,2rem)] text-light_blue "
        >
          Dołącz do nas i stwórz własną strefę
        </p>
      </div>

      <div className="w-full max-w-6xl flex flex-col gap-0 z-20 px-2 sm:px-4">
        {accordionData.map((item, index) => {
          const isOpen = openIndex === index;
          const ry = isOpen ? 120 : 60;
          const minHeight = isOpen
            ? "clamp(12rem, 20vw, 20rem)"
            : "clamp(4rem, 10vw, 8rem)";
          return (
            <div
              key={index}
              onClick={() => toggle(index)}
              className="cursor-pointer w-full"
              style={{
                marginTop: index > 0 ? "-4rem" : "-1rem",
                transition: "margin-top 0.5s ease-in-out",
              }}
            >
              <div
                className="relative w-full transition-all duration-500 ease-in-out"
                style={{
                  minHeight,
                }}
              >
                <svg
                  viewBox="0 0 900 240"
                  className="w-full h-full transition-all duration-500 ease-in-out"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <ellipse
                    cx="450"
                    cy="120"
                    rx="430"
                    ry={ry}
                    fill="url(#grad)"
                    className="transition-all duration-500"
                  />
                  <defs>
                    <radialGradient
                      id="grad"
                      cx="50%"
                      cy="50%"
                      r="70%"
                      fx="50%"
                      fy="50%"
                    >
                      <stop offset="0%" stopColor="#E8EDF7" stopOpacity="1" />
                      <stop offset="40%" stopColor="#C3D0E1" stopOpacity="1" />
                      <stop offset="70%" stopColor="#9E9626" stopOpacity="1" />
                      <stop offset="100%" stopColor="#7A7520" stopOpacity="1" />
                    </radialGradient>
                  </defs>
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-16">
                  <h3 className="text-[clamp(1.6rem,3.2vw,2.8rem)] text-blue font-semibold">
                    {item.question}
                  </h3>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="space-y-2 text-[clamp(1rem,1.5vw,1.25rem)] text-gray-800">
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
