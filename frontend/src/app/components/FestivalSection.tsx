"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const TEXTS = [
  "DWIE STREFY",
  "PIĘĆ UNIKALNYCH WYSTĘPÓW",
  "WYSTAWY PRZESTRZENNE",
  "PROJEKTOWANIE ŚWIETLNE",
];

export default function FestivalSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const festivalRef = useRef<HTMLHeadingElement>(null);
  const textsRef = useRef<(HTMLDivElement | null)[]>([]);
  const yellowFrameRef = useRef<HTMLImageElement>(null);
  const redFrameRef = useRef<HTMLImageElement>(null);
  const finalTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: gsap.Context;
    let delayTimer: NodeJS.Timeout;

    const handleRestart = () => {
      if (ctx) ctx.revert();
      clearTimeout(delayTimer);

      document.body.classList.add("overflow-hidden");

      ctx = gsap.context(() => {
        gsap.set(festivalRef.current, { y: 0, opacity: 1 });
        gsap.set(textsRef.current, { opacity: 0, y: 20 });
        gsap.set(yellowFrameRef.current, { scale: 1.8, opacity: 0 });
        gsap.set(redFrameRef.current, {
          scale: 1,
          opacity: 0,
          x: "-50%",
          y: "-50%",
        });
        gsap.set(finalTextRef.current, { opacity: 0 });

        delayTimer = setTimeout(() => {
          const tl = gsap.timeline();

          tl.to(festivalRef.current, { y: "-30vh", duration: 3 })
            .to(yellowFrameRef.current, { opacity: 1, duration: 2 }, "<")
            .to(textsRef.current[0], { opacity: 1, y: 0, duration: 2 }, "<")
            .to(yellowFrameRef.current, { scale: 1.6, duration: 3 }, "<")

            .to(festivalRef.current, { y: "-100vh", opacity: 0, duration: 3 })
            .to(textsRef.current[1], { opacity: 1, y: 0, duration: 2 }, "<")
            .to(yellowFrameRef.current, { scale: 1.4, duration: 3 }, "<")

            .to(textsRef.current[2], { opacity: 1, y: 0, duration: 2 })
            .to(yellowFrameRef.current, { scale: 1.2, duration: 3 }, "<")

            .to(textsRef.current[3], { opacity: 1, y: 0, duration: 2 })
            .to(yellowFrameRef.current, { scale: 1.1, duration: 3 }, "<")

            .to(textsRef.current, {
              color: "#84c5ff",
              filter: "blur(10px)",
              duration: 3,
            })
            .to(yellowFrameRef.current, { opacity: 0, duration: 4 }, "<")
            .fromTo(
              redFrameRef.current,
              { opacity: 0, scale: 1.5 },
              { opacity: 1, scale: 1, duration: 4, ease: "power2.out" },
              "<"
            )
            .to(finalTextRef.current, {
              opacity: 1,
              duration: 3,
              onComplete: () => {
                document.body.classList.remove("overflow-hidden");
              },
            });
        }, 2000);
      }, containerRef);
    };

    handleRestart();
    window.addEventListener("restartFestivalAnimation", handleRestart);

    return () => {
      window.removeEventListener("restartFestivalAnimation", handleRestart);
      clearTimeout(delayTimer);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full">
      <h2
        ref={festivalRef}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 text-[10rem] text-light_blue pointer-events-none"
      >
        FESTIWAL
      </h2>

      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 text-center space-y-8">
        {TEXTS.map((text, index) => (
          <div
            key={text}
            ref={(el) => (textsRef.current[index] = el)}
            className="text-[2.5rem] pointer-events-none text-yellow"
          >
            {text}
          </div>
        ))}
      </div>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <img
          ref={yellowFrameRef}
          src="/frame_yellow.svg"
          alt="Yellow Frame"
          className="h-auto max-w-[90vw]"
        />
        <img
          ref={redFrameRef}
          src="/frame_red.svg"
          alt="Red Frame"
          className="h-auto max-w-[90vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <div
          ref={finalTextRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-red text-[7rem] leading-[0.9] opacity-0 text-center"
        >
          JEDNO <br /> KLIMATYCZNE <br /> POŁĄCZENIE
        </div>
      </div>
    </div>
  );
}
