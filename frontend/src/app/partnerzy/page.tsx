"use client";
import { useState, useEffect } from "react";
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
  const [hasAccess, setHasAccess] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showFestival, setShowFestival] = useState(false);
  const [festivalAnimationFinished, setFestivalAnimationFinished] =
    useState(false);
  const [showCountDown, setShowCountdown] = useState(false);
  const [changeBg, setChangeBg] = useState(true);

  const correctPassword = "JoinUsNow!";
  const storageKey = "partnerzy_access";

  const assetsLoaded = usePreloadAssets([
    "/fonts/URWClassico.ttf",
    "/frame_blue.svg",
    "/frame_red.svg",
    "/frame_yellow.svg",
    "/strefy.svg",
  ]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(storageKey);
      if (saved === "true") {
        setHasAccess(true);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPassword === correctPassword) {
      localStorage.setItem(storageKey, "true");
      setHasAccess(true);
    } else {
      alert("Błędne hasło");
    }
  };

  if (!hasAccess) {
    return (
      <div
        style={{
          padding: "2rem",
          color: "black",
          textAlign: "center",
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
          <input
            type="password"
            placeholder="Wpisz hasło"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            style={{
              padding: "0.75rem",
              marginRight: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              minWidth: "250px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "0.75rem 1.5rem",
              borderRadius: "4px",
              border: "none",
              backgroundColor: "#007bff",
              color: "white",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Wejdź
          </button>
        </form>
      </div>
    );
  }

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
