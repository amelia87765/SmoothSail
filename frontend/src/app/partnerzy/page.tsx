"use client";
import { useState } from "react";
import localFont from "next/font/local";
import LoaderLogo from "../components/LoaderLogo";
import TitleSection from "../components/TitleSection";
import CountdownTimer from "../components/CountdownTimer";
import FestivalSection from "../components/FestivalSection";
import MovieSection from "../components/MovieSection";
import FloatingTextSection from "../components/FloatingTextSection";
import Partners4Section from "../components/Partners4Section";
import Footer from "../components/Footer";
import EditionSection from "../components/EditionSection";
import FestivalSectionStatic from "../components/FestivalSectionStatic";
import { usePreloadAssets } from "../hooks/usePreloadAssets";
import NoiseBackground from "../components/NoiseBackground";

const optima = localFont({
  src: "../../../public/fonts/URWClassico.ttf",
  weight: "400",
  display: "swap",
});

export default function Page() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showFestival, setShowFestival] = useState(false);
  const [festivalAnimationFinished, setFestivalAnimationFinished] =
    useState(false);
  const [showCountDown, setShowCountdown] = useState(false);
  const [changeBg, setChangeBg] = useState(true);

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
      {changeBg && (
        <div className="fixed inset-0 bg-gradient-to-b from-color_bg_top via-color_bg_mid to-red z-4"></div>
      )}
      {!changeBg && (
        <img
          src="/strefy_long.svg"
          alt="Mask"
          className="fixed inset-0 z-10 w-full h-full object-cover object-top pointer-events-none"
        />
      )}
      <NoiseBackground />
      {!loadingComplete && (
        <LoaderLogo onFinish={() => setLoadingComplete(true)} />
      )}

      {loadingComplete && assetsLoaded && (
        <>
          <TitleSection
            onAnimationComplete={() => {
              setTimeout(() => setShowFestival(true), 300);
            }}
            showCountDown={() => setShowCountdown(true)}
            onPartAnimationEnd={() => setChangeBg(false)}
          />

          {showFestival && !festivalAnimationFinished && (
            <FestivalSection
              onAnimationFinish={() => setFestivalAnimationFinished(true)}
            />
          )}
        </>
      )}

      {showCountDown && !festivalAnimationFinished && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[999]">
          <CountdownTimer />
        </div>
      )}
      {festivalAnimationFinished && (
        <>
          <FestivalSectionStatic>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[999]">
              <CountdownTimer />
            </div>
          </FestivalSectionStatic>
          <section
            id="movie"
            className="h-[33vh] sm:h-[66vh] lg:min-h-screen w-full"
          >
            <MovieSection />
          </section>
          <section id="floating-words" className="min-h-screen w-full">
            <FloatingTextSection />
          </section>
          <section id="editions" className="min-h-screen w-full">
            <EditionSection />
          </section>
          <section id="partners" className="min-h-screen w-full">
            <Partners4Section />
          </section>
          <Footer />
        </>
      )}
    </div>
  );
}
