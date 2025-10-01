"use client";

export default function TitleSectionStatic({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-color_bg_top via-color_bg_mid to-red z-6" />
      <div className="z-50 text-[clamp(5rem,14vw,19rem)] leading-[0.9] text-red text-center pointer-events-none">
        STREFY
        <br />
        CZASOWE
      </div>
      <div className="mt-5 z-50 text-center pointer-events-none text-light_blue text-[clamp(1.5rem,3vw,2.8rem)] leading-[1]">
        Indoorowy festiwal w Trójmieście
        <br />
        na koniec października — w noc
        <br />
        zmiany czasu na zimowy.
      </div>
      <div className="absolute inset-0 z-40 pointer-events-none flex justify-center items-center md:items-start md:pt-[-33vh]">
        <img
          src="/frame_blue.svg"
          alt="Frame"
          className="h-auto w-auto"
          style={{ transformOrigin: "center center" }}
        />
      </div>
      {children}
    </div>
  );
}
