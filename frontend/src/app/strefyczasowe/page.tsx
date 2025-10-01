"use client";
import { useState } from "react";
import localFont from "next/font/local";
import LoaderLogoUsers from "../components/LoaderLogoUsers";
import CountdownTimer from "../components/CountdownTimer";
import MovieSection from "../components/MovieSection";
import FloatingTextSection from "../components/FloatingTextSection";
import Partners4SectionUsers from "../components/Partners4SectionUsers";
import Footer from "../components/Footer";
import TicketsSection from "../components/TicketsSection";
import BeforeTicketsSection from "../components/BeforeTicketsSection";
import FestivalSectionStatic from "../components/FestivalSectionStatic";
import TitleSectionStatic from "../components/TitleSectionStatic";
import { usePreloadAssets } from "../hooks/usePreloadAssets";
import NoiseBackground from "../components/NoiseBackground";
import LineupSection from "../components/LineupSection";
import Menu from "../components/Menu";

const optima = localFont({
  src: "../../../public/fonts/URWClassico.ttf",
  weight: "400",
  display: "swap",
});

export default function Page() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  const assetsLoaded = usePreloadAssets([
    "/fonts/URWClassico.ttf",
    "/frame_blue.svg",
    "/frame_red.svg",
    "/frame_yellow.svg",
    "/strefy.svg",
  ]);

  return (
    <div
      className={`relative w-screen min-h-full overflow-x-hidden ${optima.className}`}
    >
      <div className="fixed inset-0 bg-[#231F20] z-6"></div>
      <img
        src="/strefy_long.svg"
        alt="Mask"
        className="fixed inset-0 z-10 w-full h-full object-cover object-top pointer-events-none"
      />
      <NoiseBackground />
      {!loadingComplete && (
        <LoaderLogoUsers onFinish={() => setLoadingComplete(true)} />
      )}

      {loadingComplete && assetsLoaded && (
        <>
          <div className="block">
            <Menu />
          </div>
          <section id="home" className="relative min-h-screen w-full">
            <TitleSectionStatic>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[999]">
                <CountdownTimer />
              </div>
            </TitleSectionStatic>
          </section>
          <section id="festiwal">
            <FestivalSectionStatic />
          </section>
          <section
            id="movie"
            className="h-[33vh] sm:h-[66vh] lg:min-h-screen w-full"
          >
            <MovieSection />
          </section>
          <section id="floating-words" className="min-h-screen w-full">
            <FloatingTextSection />
          </section>
          <section id="before-bilety" className="relative min-h-screen w-full">
            <BeforeTicketsSection />
          </section>
          <section id="bilety" className="relative min-h-screen w-full">
            <TicketsSection />
          </section>
          <section id="lineup" className="min-h-screen w-full">
            <LineupSection />
          </section>
          <section id="partnerzy" className="min-h-screen w-full">
            <Partners4SectionUsers />
          </section>
          <Footer />
        </>
      )}
    </div>
  );
}
