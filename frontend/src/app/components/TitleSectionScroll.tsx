"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type TitleSectionScrollProps = {
  onAnimationComplete: () => void;
  showCountDown: () => void;
};

export default function TitleSectionScroll({
  onAnimationComplete,
  showCountDown,
}: TitleSectionScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const container = containerRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const frame = frameRef.current;
    const bg = bgRef.current;
    const mask = maskRef.current;
    if (!container || !title || !subtitle || !frame) return;

    const disableScroll = () => {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    };
    const enableScroll = () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };

    disableScroll();

    gsap.set(title, { opacity: 0, filter: "blur(20px)", y: 40 });
    gsap.set(frame, { opacity: 0, scale: 1.6, y: 10 });
    gsap.set(subtitle, { opacity: 0, y: 60 });
    gsap.set(bg, { opacity: 0 });
    if (mask) gsap.set(mask, { opacity: 1 });

    const intro = gsap.timeline();
    intro.to(bg, { opacity: 1, duration: 0.6, ease: "power2.out" }, 0);
    if (mask) intro.to(mask, { opacity: 1, duration: 0.6 }, 0);
    intro.to(
      frame,
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
      0.05
    );
    intro.to(
      title,
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
      0.08
    );

    intro.eventCallback("onComplete", () => {
      enableScroll();
      ScrollTrigger.refresh();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=120%",
          pin: true,
          anticipatePin: 1,
          toggleActions: "play none none none",
          scrub: false,
          once: true,
          onLeave: () => {
            onAnimationComplete();
          },
        },
      });

      tl.to(title, { filter: "blur(0px)", duration: 1 }, 0);
      tl.to(frame, { scale: 1, duration: 1 }, 0);
      if (mask) tl.to(mask, { opacity: 0.8, duration: 1 }, 0);
      tl.to(
        subtitle,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          onStart: () => showCountDown(),
        },
        "+=0.3"
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf([title, frame, subtitle, bg, mask as any]);
      enableScroll();
    };
  }, [onAnimationComplete, showCountDown]);

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
