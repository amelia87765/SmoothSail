"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

type TitleSectionProps = {
  onAnimationComplete: () => void;
  showCountDown: () => void;
  onPartAnimationEnd: () => void;
};

export default function TitleSection({
  onAnimationComplete,
  showCountDown,
  onPartAnimationEnd,
}: TitleSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLImageElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          titleRef.current,
          subtitleRef.current,
          frameRef.current,
          bgRef.current,
          maskRef.current,
        ],
        { opacity: 0, visibility: "visible" }
      );
      gsap.set(titleRef.current, {
        y: 0,
        filter: "blur(8px)",
      });
      gsap.set(subtitleRef.current, {
        y: 40,
      });
      gsap.set(frameRef.current, {
        scale: 1.6,
        transformOrigin: "center center",
      });
      gsap.set(bgRef.current, {
        opacity: 1,
        filter: "blur(0px)",
      });
      gsap.set(maskRef.current, {
        opacity: 1,
      });
      const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
      tl.to(titleRef.current, {
        opacity: 1,
        duration: 2,
      })
        .to(frameRef.current, { opacity: 1, duration: 1.5 }, "-=2.0")
        .to(titleRef.current, { filter: "blur(0px)", duration: 3 }, "-=1.5")
        .to(frameRef.current, { scale: 1, duration: 2 }, "-=2.5")
        .to(
          subtitleRef.current,
          { opacity: 1, y: 0, duration: 2.5, delay: 1 },
          "-=2.0"
        )
        .call(showCountDown)
        .to({}, { duration: 2 })
        .call(onPartAnimationEnd)
        .to(
          frameRef.current,
          { scale: 3.5, duration: 2.5, ease: "power2.in" },
          "exit"
        )
        .to(
          bgRef.current,
          {
            opacity: 0,
            duration: 1.5,
            ease: "power2.in",
          },
          "exit"
        )
        .to(
          maskRef.current,
          {
            opacity: 0,
            duration: 1.3,
            ease: "power2.in",
          },
          "exit"
        )
        .to(
          [titleRef.current, subtitleRef.current],
          { y: "-100vh", opacity: 0, duration: 2, ease: "power2.in" },
          "exit"
        )
        .to(
          frameRef.current,
          {
            opacity: 0,
            duration: 0.5,
            onComplete: () => frameRef.current?.remove(),
          },
          "exit+=2.3"
        )
        .eventCallback("onComplete", () => {
          if (containerRef.current) {
            gsap.to(containerRef.current, {
              height: 0,
              duration: 0.2,
              overflow: "hidden",
              onComplete: onAnimationComplete,
            });
          } else {
            onAnimationComplete();
          }
        });
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
        className="fixed inset-0 z-10 bg-gradient-to-b from-color_bg_top via-color_bg_mid to-red opacity-0"
      />
      <img
        ref={maskRef}
        src="/strefy.svg"
        alt="Mask"
        className="fixed inset-0 z-20 w-full h-full object-cover object-top pointer-events-none"
        style={{ opacity: 1, transition: "opacity 1.5s" }}
      />
      <div
        ref={titleRef}
        className="z-50 text-[clamp(5rem,14vw,19rem)] leading-[0.9] text-red text-center pointer-events-none opacity-0"
        style={{
          willChange: "transform, opacity, filter",
          textShadow: "0 0 10px rgba(0,0,0,0.1), 0 0 40px rgba(0,0,0,0.1)",
        }}
      >
        STREFY
        <br />
        CZASOWE
      </div>
      <div
        ref={subtitleRef}
        className="mt-5 z-50 text-center pointer-events-none text-light_blue text-[clamp(1.5rem,3vw,2.8rem)] leading-[1] opacity-0"
        style={{
          willChange: "transform, opacity",
        }}
      >
        Indoorowy festiwal w Trójmieście
        <br />
        na koniec października — w noc
        <br />
        zmiany czasu na zimowy.
      </div>
      <div
        ref={frameRef}
        className="fixed inset-0 z-40 pointer-events-none flex justify-center items-center md:items-start md:mt-[-33vh] opacity-0 transform-gpu"
        style={{
          willChange: "transform, opacity, filter",
        }}
      >
        <img
          src="/frame_blue.svg"
          alt="Frame"
          className="h-auto w-auto"
          style={{ transformOrigin: "center center" }}
        />
      </div>
    </div>
  );
}
