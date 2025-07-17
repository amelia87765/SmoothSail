"use client";
import { useEffect, useState } from "react";
import localFont from "next/font/local";
import LoaderLogo from "../components/LoaderLogo";
import TitleSection from "../components/TitleSection";
import CountdownTimer from "../components/CountdownTimer";
import Menu from "../components/Menu";
import FestivalSection from "../components/FestivalSection";
const optima = localFont({
  src: "../../../public/fonts/OPTIMA.ttf",
  weight: "400",
  display: "swap",
});
export default function Page() {
  const [showText, setShowText] = useState(false);
  const [showFrame, setShowFrame] = useState(false);
  const [blurAmount, setBlurAmount] = useState(20);
  const [frameScale, setFrameScale] = useState(1.6);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [exitAnimation, setExitAnimation] = useState(false);
  const [showFestival, setShowFestival] = useState(false);
  const [readyForExit, setReadyForExit] = useState(false);
  //const event = new CustomEvent("restartFestivalAnimation");
  //window.dispatchEvent(event);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingComplete(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#home") {
        setShowText(true);
        setShowFrame(true);
        setBlurAmount(0);
        setFrameScale(1);
        setAnimationComplete(true);
        setReadyForExit(false);
        setExitAnimation(false);
        setShowFestival(false);
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);
  useEffect(() => {
    if (!loadingComplete) return;
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > 20 && !showText) setShowText(true);
      if (scrollY > 300 && !showFrame) setShowFrame(true);
      if (showText) {
        const start = 300;
        const end = 1600;
        const progress = Math.min(
          Math.max((scrollY - start) / (end - start), 0),
          1
        );
        setBlurAmount(20 - progress * 20);
        setFrameScale(1.6 - progress * 0.6);
        if (scrollY >= 1599 && !animationComplete) {
          setAnimationComplete(true);
          setTimeout(() => setReadyForExit(true), 2000);
        }
      }
      if (readyForExit && !exitAnimation) {
        setExitAnimation(true);
        setShowFestival(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchmove", handleScroll);
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
      window.removeEventListener("wheel", handleScroll);
    };
  }, [
    loadingComplete,
    showText,
    showFrame,
    animationComplete,
    readyForExit,
    exitAnimation,
  ]);
  return (
    <div
      className={`relative h-[300vh] w-screen overflow-x-hidden ${optima.className}`}
      id="home"
    >
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-color_bg_top via-color_bg_mid to-red" />
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
      {!loadingComplete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <LoaderLogo onFinish={() => setLoadingComplete(true)} />
        </div>
      )}
      <section id="home" className="min-h-[100vh] relative">
        {loadingComplete && (
          <TitleSection
            showText={showText || animationComplete}
            showFrame={showFrame || animationComplete}
            blurAmount={animationComplete ? 0 : blurAmount}
            frameScale={animationComplete ? 1 : frameScale}
            exitAnimation={exitAnimation}
          />
        )}
      </section>
      {showFestival && <FestivalSection />}
      {loadingComplete && animationComplete && (
        <>
          <div className="fixed top-0 w-full z-50 opacity-100">
            <Menu />
          </div>
          <div className="fixed left-1/2 transform -translate-x-1/2 z-40 opacity-100 top-[70vh]">
            <CountdownTimer />
          </div>
        </>
      )}
      <div className="h-[200vh]"></div>
    </div>
  );
}
