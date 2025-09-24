"use client";

const TEXTS = [
  "DWIE SCENY",
  "SIEDEM UNIKALNYCH WYSTĘPÓW",
  "INSTALACJE PRZESTRZENNE",
  "PIĘĆ STREF",
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
      <div className="absolute z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center space-y-1 md:space-y-8">
        {TEXTS.map((text, index) => (
          <div
            key={index}
            className="text-[clamp(0.7rem,4vw,2.5rem)] text-light_blue blur-[10px]"
          >
            {text}
          </div>
        ))}
      </div>

      <div className="absolute w-full h-full">
        <img
          src="/frame_red.svg"
          alt="Red Frame"
          className="absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto max-w-[90vw]"
        />
      </div>

      <div className="absolute left-1/2 top-[49.5%] mb:top-[48%] -translate-x-1/2 -translate-y-1/2 w-full text-red text-[clamp(2.1rem,8vw,7rem)] text-center leading-[0.9] z-50">
        JEDNO <br /> NARRACYJNE <br /> POŁĄCZENIE
      </div>
      {children}
    </section>
  );
}
