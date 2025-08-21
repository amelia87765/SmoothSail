"use client";
import { useEffect, useState } from "react";
import localFont from "next/font/local";
import LoaderLogo from "../components/LoaderLogo";
import TitleSection from "../components/TitleSection";
import CountdownTimer from "../components/CountdownTimer";
import FestivalSection from "../components/FestivalSection";
import MovieSection from "../components/MovieSection";
import FloatingTextSection from "../components/FloatingTextSection";
import PartnersSection from "../components/PartnersSection";
import EditionsSection from "../components/EditionsSection";
import Footer from "../components/Footer";
import EditionSection from "../components/EditionSection";
import HeaderLogo from "../components/HeaderLogo";

const optima = localFont({
  src: "../../../public/fonts/OPTIMA.ttf",
  weight: "400",
  display: "swap",
});

export default function Page() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showFestival, setShowFestival] = useState(false);
  const [festivalAnimationFinished, setFestivalAnimationFinished] =
    useState(false);
  const [showCountDown, setShowCountdown] = useState(false);

  return (
    <div className={`relative w-screen overflow-x-hidden ${optima.className}`}>
      <div className="fixed inset-0 bg-[#231F20] z-0"></div>

      <div
        className="fixed inset-0 z-10 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            "url(data:image/png;base64,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)",
        }}
      />
      <img
        src="/strefy.svg"
        alt="Mask"
        className="fixed inset-0 z-10 w-full h-full object-cover object-top pointer-events-none"
      />

      {!loadingComplete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <LoaderLogo onFinish={() => setLoadingComplete(true)} />
        </div>
      )}

      {loadingComplete && <HeaderLogo />}

      {loadingComplete && (
        <section id="home" className="relative w-full min-h-screen">
          <TitleSection
            onAnimationComplete={() => {
              setTimeout(() => setShowFestival(true), 2000);
            }}
            showCountDown={() => setShowCountdown(true)}
          />

          {showCountDown && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40">
              <CountdownTimer />
            </div>
          )}

          {showFestival && (
            <FestivalSection
              onAnimationFinish={() => setFestivalAnimationFinished(true)}
            />
          )}
        </section>
      )}

      {festivalAnimationFinished && (
        <>
          <section id="movie" className="min-h-screen w-full">
            <MovieSection />
          </section>
          <section id="floating-words" className="min-h-screen w-full">
            <FloatingTextSection />
          </section>
          <section id="editions" className="min-h-screen w-full">
            <EditionSection />
          </section>
          <section id="partners" className="min-h-screen w-full">
            <PartnersSection />
          </section>
          <Footer />
        </>
      )}
    </div>
  );
}
