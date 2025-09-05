"use client";

import { useEffect } from "react";

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
    <section className="h-[150vh] bg-gradient-to-b from-black via-partners_bg to-black w-full px-4 sm:px-6 py-16 md:py-20 lg:py-24 flex flex-col items-center gap-8 md:gap-10 z-5 relative overflow-x-hidden">
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
        {accordionData.flatMap((item, index) => [
          // Elipsa z pytaniem (zwinięta wysokość)
          <div
            key={`question-${index}`}
            className="w-full"
            style={{
              marginTop: index > 0 ? "-4rem" : "-1rem",
            }}
          >
            <div
              className="relative w-full"
              style={{
                minHeight: "clamp(4rem, 10vw, 8rem)",
              }}
            >
              <svg
                viewBox="0 0 600 120"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                <ellipse cx="300" cy="60" rx="280" ry="60" fill="url(#grad)" />
                <defs>
                  <radialGradient id="grad" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#C3D0E1" />
                    <stop offset="100%" stopColor="#9E9626" />
                  </radialGradient>
                </defs>
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-16">
                <h3 className="text-[clamp(2rem,3vi,3rem)] text-blue font-semibold">
                  {item.question}
                </h3>
              </div>
            </div>
          </div>,

          // Elipsa z odpowiedzią (rozwinięta wysokość)
          <div
            key={`answer-${index}`}
            className="w-full"
            style={{
              marginTop: "-4rem",
            }}
          >
            <div
              className="relative w-full"
              style={{
                minHeight: "clamp(12rem, 20vw, 20rem)",
              }}
            >
              <svg
                viewBox="0 0 600 240"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                <ellipse
                  cx="300"
                  cy="120"
                  rx="280"
                  ry="120"
                  fill="url(#grad2)"
                />
                <defs>
                  <radialGradient id="grad2" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#C3D0E1" />
                    <stop offset="100%" stopColor="#9E9626" />
                  </radialGradient>
                </defs>
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-16 pt-8">
                <div className="space-y-2 text-[clamp(1rem,1.5vi,1.25rem)] text-gray">
                  {item.answer.map((a, i) => (
                    <p key={i}>{a}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>,
        ])}
      </div>
    </section>
  );
}
