"use client";
import { useState } from "react";
const accordionData = [
  {
    question: "KOGO SZUKAMY?",
    answer: [
      "Firmy, która chce wzmocnić swój wizerunek",
      "Partnera do współpracy promocyjnej",
      "Organizacji wspierającej inicjatywy kulturalne",
    ],
  },
  {
    question: "CO GWARANTUJEMY?",
    answer: [
      "Sponsora, który wesprze wydarzenie finansowo",
      "Dostęp do szerokiego grona odbiorców",
      "Widoczność w materiałach promocyjnych",
    ],
  },
];
export default function Partnerzy() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="bg-gradient-to-b from-black via-partners_bg to-black w-full px-4 sm:px-6 py-16 md:py-20 lg:py-24 flex flex-col items-center gap-8 md:gap-10 z-5 relative overflow-x-hidden">
      <h2 className="z-20 text-9xl sm:text-10xl md:text-12xl text-center text-white">
        PARTNERZY
      </h2>
      <p className="z-20 text-lg md:text-xl text-center text-light_blue max-w-2xl">
        Dołącz do nas i stwórz własną strefę
      </p>
      <div className="w-full max-w-5xl flex flex-col gap-6 md:gap-8 z-20 px-2 sm:px-4">
        {accordionData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              onClick={() => toggle(index)}
              className="relative cursor-pointer w-full group"
            >
              <div
                className={`w-full bg-no-repeat bg-center bg-contain transition-all duration-500 ease-in-out ${
                  isOpen
                    ? "min-h-[300px] md:min-h-[350px]"
                    : "min-h-[120px] md:min-h-[150px]"
                }`}
                style={{
                  backgroundImage: `url("/frame_yellow_blue.svg")`,
                }}
              >
                <div className="flex flex-col items-center justify-center text-center h-full px-6 md:px-12 lg:px-16 py-8 md:py-12">
                  <h3 className="text-xl sm:text-2xl md:text-3xl text-sky-900 font-semibold">
                    {item.question}
                  </h3>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="space-y-2 text-base sm:text-lg md:text-xl text-gray-800 pb-4">
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
