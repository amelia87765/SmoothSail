"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import MovieSection from "./MovieSection";
import FloatingWordsSection from "./FloatingTextSection";

const TEXTS = [
  "DWIE STREFY",
  "PIĘĆ UNIKALNYCH WYSTĘPÓW",
  "WYSTAWY PRZESTRZENNE",
  "PROJEKTOWANIE ŚWIETLNE",
];

export default function FestivalSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const festivalRef = useRef<HTMLHeadingElement>(null);
  const textsRef = useRef<Array<HTMLDivElement | null>>([]);
  const yellowFrameRef = useRef<HTMLDivElement>(null);
  const redFrameRef = useRef<HTMLDivElement>(null);
  const finalTextRef = useRef<HTMLDivElement>(null);
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#festiwal") {
        const event = new CustomEvent("restartFestivalAnimation");
        window.dispatchEvent(event);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    let ctx: gsap.Context;

    const handleRestart = () => {
      if (ctx) ctx.revert();

      ctx = gsap.context(() => {
        gsap.set(festivalRef.current, { y: 0, opacity: 1 });
        gsap.set(textsRef.current, { opacity: 0, y: 20 });
        gsap.set(yellowFrameRef.current, {
          scale: 1.8,
          opacity: 0,
          x: "-50%",
          y: "-50%",
        });
        gsap.set(redFrameRef.current, {
          scale: 1,
          opacity: 0,
          x: "-50%",
          y: "-50%",
        });
        gsap.set(finalTextRef.current, { opacity: 0, x: "-50%", y: "-50%" });

        const tl = gsap.timeline();

        tl.to(
          festivalRef.current,
          {
            y: "-30vh",
            duration: 3,
            delay: 2,
          },
          ">"
        )
          .to(yellowFrameRef.current, { opacity: 1, duration: 2 }, "<")
          .to(textsRef.current[0], { opacity: 1, y: 0, duration: 2 }, "<")
          .to(yellowFrameRef.current, { scale: 1.6, duration: 3 }, "<")
          .to(festivalRef.current, { y: "-100vh", opacity: 0, duration: 3 })
          .to(textsRef.current[1], { opacity: 1, y: 0, duration: 2 }, "<")
          .to(yellowFrameRef.current, { scale: 1.4, duration: 3 }, "<")
          .to(textsRef.current[2], { opacity: 1, y: 0, duration: 2 })
          .to(yellowFrameRef.current, { scale: 1.2, duration: 3 }, "<")
          .to(textsRef.current[3], { opacity: 1, y: 0, duration: 2 })
          .to(yellowFrameRef.current, { scale: 1, duration: 3 }, "<")
          .to(textsRef.current, {
            color: "#C3D0E1",
            filter: "blur(10px)",
            duration: 4,
          })
          .to(yellowFrameRef.current, { opacity: 0, duration: 4 }, "<")
          .to(redFrameRef.current, { opacity: 1, duration: 4 }, "<")
          .to(finalTextRef.current, { opacity: 1, duration: 3 })
          .to(
            {},
            {
              onComplete: () => {
                setAnimationFinished(true);
                document.body.style.overflow = "auto";
              },
            }
          );
      }, containerRef);
    };

    handleRestart();
    window.addEventListener("restartFestivalAnimation", handleRestart);

    return () => {
      window.removeEventListener("restartFestivalAnimation", handleRestart);
      if (ctx) ctx.revert();
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div id="festiwal">
      <div
        ref={containerRef}
        className="fixed top-0 left-0 w-full h-screen z-50 bg-transparent pointer-events-none"
      >
        <h2
          ref={festivalRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] text-light_blue"
        >
          FESTIWAL
        </h2>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center space-y-8">
          {TEXTS.map((text, index) => (
            <div
              key={text}
              ref={(el: HTMLDivElement | null) => {
                textsRef.current[index] = el;
              }}
              className="text-[2.5rem] text-yellow"
            >
              {text}
            </div>
          ))}
        </div>

        <div
          ref={yellowFrameRef}
          className="absolute top-1/2 left-1/2 w-full h-full"
        >
          <img
            src="/frame_yellow.svg"
            alt="Yellow Frame"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto max-w-[90vw]"
          />
        </div>

        <div
          ref={redFrameRef}
          className="absolute top-1/2 left-1/2 w-full h-full"
        >
          <img
            src="/frame_red.svg"
            alt="Red Frame"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto max-w-[90vw]"
          />
        </div>

        <div
          ref={finalTextRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-red text-[7rem] leading-[0.9] opacity-0 text-center z-30 transform-none"
        >
          JEDNO <br /> KLIMATYCZNE <br /> POŁĄCZENIE
        </div>
      </div>

      {animationFinished && (
        <>
          <div style={{ height: "100vh" }}></div>
          <MovieSection />
          <FloatingWordsSection />
        </>
      )}
    </div>
  );
}
