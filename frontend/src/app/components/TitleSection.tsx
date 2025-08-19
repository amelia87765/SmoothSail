"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

type TitleSectionProps = {
  onAnimationComplete: () => void;
};

export default function TitleSection({
  onAnimationComplete,
}: TitleSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLImageElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          titleRef.current,
          subtitleRef.current,
          frameRef.current,
          bgRef.current,
        ],
        { opacity: 0, visibility: "visible" }
      );
      gsap.set(titleRef.current, {
        y: 0,
        filter: "blur(20px)",
      });
      gsap.set(subtitleRef.current, {
        y: 50,
      });
      gsap.set(frameRef.current, {
        scale: 1.6,
        xPercent: -50,
        yPercent: -50,
        top: "50%",
        left: "50%",
      });
      gsap.set(bgRef.current, {
        opacity: 1,
        filter: "blur(0px)",
      });
      const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
      tl.to(titleRef.current, {
        opacity: 1,
        duration: 2.5,
      })
        .to(frameRef.current, { opacity: 1, duration: 2 }, "-=2.0")
        .to(titleRef.current, { filter: "blur(0px)", duration: 3 }, "-=1.5")
        .to(frameRef.current, { scale: 1, duration: 3 }, "-=2.5")
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 2 }, "-=2.0")
        .to({}, { duration: 3 })
        .to(
          frameRef.current,
          { scale: 2.8, duration: 2.5, ease: "power2.in" },
          "exit"
        )
        .to(
          bgRef.current,
          {
            opacity: 0,
            filter: "blur(20px)",
            duration: 1.5,
            ease: "power2.in",
          },
          "exit"
        )
        .to(
          [titleRef.current, subtitleRef.current],
          { y: "-100vh", opacity: 0, duration: 2, ease: "power2.in" },
          "exit"
        )
        .eventCallback("onComplete", onAnimationComplete);
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center h-screen relative"
    >
      <div
        ref={bgRef}
        className="fixed inset-0 z-0 bg-gradient-to-b from-color_bg_top via-color_bg_mid to-red opacity-0"
      />
      <div
        ref={titleRef}
        className="z-30 text-[clamp(8rem,15vw,20rem)] leading-[0.9] text-red text-center pointer-events-none opacity-0"
        style={{
          willChange: "transform, opacity, filter",
          textShadow: "0 0 10px rgba(255,0,0,0.1), 0 0 40px rgba(255,0,0,0.1)",
        }}
      >
        STREFY
        <br />
        CZASOWE
      </div>
      <div
        ref={subtitleRef}
        className="mt-5 z-30 text-center pointer-events-none text-light_blue text-[clamp(1.5rem,4vw,3rem)] leading-[1.2] opacity-0"
        style={{
          willChange: "transform, opacity",
        }}
      >
        Indoorowy festiwal w Trojmiescie
        <br />
        na koniec października—w noc
        <br />
        zmiany czasu na zimowy.
      </div>
      <img
        ref={frameRef}
        src="/frame_blue.svg"
        alt="Frame"
        className="fixed top-1/2 left-1/2 z-20 h-auto pointer-events-none opacity-0"
        style={{
          transform: "translate(-50%, -50%)",
          willChange: "transform, opacity, filter",
        }}
      />
    </div>
  );
}
