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
      gsap.set(titleRef.current, {
        y: 0,
        opacity: 0,
        filter: "blur(20px)",
      });
      gsap.set(subtitleRef.current, {
        opacity: 0,
        y: 50,
      });
      gsap.set(frameRef.current, {
        scale: 1.6,
        opacity: 0,
      });

      const tl = gsap.timeline({
        defaults: { ease: "power3.inOut" },
      });

      tl.to(titleRef.current, {
        opacity: 1,
        duration: 2.5,
      })
        .to(
          frameRef.current,
          {
            opacity: 1,
            duration: 2,
          },
          "-=2.0"
        )
        .to(
          titleRef.current,
          {
            filter: "blur(0px)",
            duration: 3,
          },
          "-=1.5"
        )
        .to(
          frameRef.current,
          {
            scale: 1,
            duration: 3,
          },
          "-=2.5"
        )
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 2,
          },
          "-=2.0"
        )
        .to(
          {},
          {
            duration: 3,
          }
        )
        .to(
          [
            titleRef.current,
            subtitleRef.current,
            frameRef.current,
            bgRef.current,
          ],
          {
            y: "-100vh",
            opacity: 0,
            duration: 2,
            ease: "power2.in",
          }
        )
        .eventCallback("onComplete", onAnimationComplete);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <div
        ref={bgRef}
        className="fixed inset-0 z-0 bg-gradient-to-b from-color_bg_top via-color_bg_mid to-red"
      />

      <div
        ref={titleRef}
        className="fixed left-1/2 z-30 text-[14rem] leading-[0.9] text-red text-center pointer-events-none -translate-x-1/2"
        style={{
          top: "35vh",
          transform: "translate(-50%, -50%)",
        }}
      >
        STREFY
        <br />
        CZASOWE
      </div>

      <div
        ref={subtitleRef}
        className="fixed left-1/2 z-30 text-center pointer-events-none text-light_blue text-[3rem] leading-[1.2] -translate-x-1/2"
        style={{
          top: "calc(35vh + 14rem + 2rem)",
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
        className="fixed top-1/2 left-1/2 z-20 h-auto pointer-events-none"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}
