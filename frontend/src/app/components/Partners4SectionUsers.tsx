"use client";

const formatBoldText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/);

  return parts
    .map((part, index) => {
      if (!part) return null;
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    })
    .filter(Boolean);
};

const accordionData = [
  {
    question: "KOGO SZUKAMY?",
    answer: [
      "Tworząc ten festiwal, już od pierwszej edycji stawiamy na interdyscyplinarność, zaangażowanie wszystkich zmysłów, a także wysmakowany line-up. Poza polskimi wykonawcami sięgamy również po zagranicznych artystów, którzy pozwalają na przyciągnięcie grupy docelowej wychodzącej znacznie poza Trójmiasto.",

      "**Poszukujemy Sponsora** - chętnego wesprzeć festiwal nie tylko finansowo, ale także stać się jego częścią. Kogoś, z kim rezonuje koncepcja i unikalny, narracyjny charakter wydarzenia.",
      "Tym, na czym zależy nam najbardziej jest **KREOWANIE DOŚWIADCZEŃ**.",

      "**Poszukujemy Partnerów**, którzy chcieliby przyczynić się do sukcesu tego wydarzenia. Osób, Firm, Instytucji, które pomogłyby wznieść realizację na jeszcze wyższy poziom oraz dotrzeć do szerszej grupy odbiorców, mając aktywny wkład w jego produkcję, np. poprzez stworzenie własnej strefy.",
    ],
  },
  {
    question: "CO OFERUJEMY?",
    answer: [
      "W zależności od wkładu i stopnia zaangażowania w **Strefy Czasowe** z przyjemnością oferujemy różnorakie możliwości ekspozycji. Dysponujemy ogromną przestrzenią i zapleczem marketingowym, które pozwalają Partnerom m.in. na:",

      <br key="break" />,
      "- stanie się kluczową częścią nowoczesnego i immersyjnego projektu,",
      "- ekspozycję marki w materiałach promocyjnych online i offline,",
      "- dedykowaną Partnerowi przestrzeń do stworzenia własnego stoiska promocyjnego",
      " lub sprzedażowego podczas wydarzenia,",
      "- stworzenie tytularnej strefy, sceny lub instalacji Partnera,",
      "- przeprowadzenie akcji promocyjnej “skrojonej na wymiar”,",
      "- realizację wspólnie uzgodnionego projektu specjalnego,",
      "- możliwość dołączenia produktu / sampla Partnera do biletów zakupionych przez uczestników,",
      "- pełen profesjonalizm i świetną komunikację.",
    ],
  },
];

export default function Partnerzy() {
  return (
    <section className="bg-gradient-to-b from-black via-partners_bg to-[#231F20] w-full px-4 sm:px-6 py-2 md:py-12 lg:py-24 flex flex-col items-center gap-12 md:gap-16 relative overflow-x-hidden">
      <div className="z-50 text-center">
        <h2 className="text-[clamp(3rem,8vw,9rem)] text-light_blue leading-tight">
          PARTNERZY
        </h2>
        <p className="text-[clamp(1rem,2vw,2rem)] text-light_blue mt-[0.5rem] md:mt-[-1rem]">
          Dołącz do nas i stwórzmy to razem!
        </p>
      </div>

      <div className="w-full max-w-6xl flex flex-col gap-12 md:gap-16 z-50 px-2 sm:px-4">
        {accordionData.map((item, index) => (
          <div key={index} className="flex flex-col gap-1 md:gap-2">
            <div className="relative w-full aspect-[10/2]">
              <svg
                viewBox="0 0 1000 200"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                <ellipse cx="500" cy="100" rx="480" ry="80" fill="url(#grad)" />
                <defs>
                  <radialGradient
                    id="grad"
                    cx="50%"
                    cy="50%"
                    r="70%"
                    fx="50%"
                    fy="50%"
                  >
                    <stop offset="0%" stopColor="#E8EDF7" />
                    <stop offset="40%" stopColor="#C3D0E1" />
                    <stop offset="70%" stopColor="#9E9626" />
                    <stop offset="100%" stopColor="#7A7520" />
                  </radialGradient>
                </defs>
              </svg>

              <div className="absolute inset-0 flex items-center justify-center text-center px-6 md:px-12 lg:px-16">
                <h3 className="text-[clamp(1.2rem,3.2vw,2.8rem)] text-blue font-semibold">
                  {item.question}
                </h3>
              </div>
            </div>

            <div className="relative w-full px-4 md:px-8 lg:px-12">
              <div
                className="w-full rounded-2xl p-6 md:p-8 lg:p-12 flex items-center justify-center"
                style={{
                  background:
                    "radial-gradient(ellipse at center, #E8EDF7 0%, #C3D0E1 40%, #9E9626 100%)",
                }}
              >
                <div className="space-y-2 text-[clamp(0.9rem,1.5vw,1.3rem)] text-black font-medium max-w-4xl text-center">
                  {item.answer.map((a, i) => (
                    <p key={i}>
                      {typeof a === "string" ? formatBoldText(a) : a}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="h-18" />
    </section>
  );
}
