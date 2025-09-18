"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const TEXTS = [
  "DWIE SCENY",
  "SIEDEM UNIKALNYCH WYSTĘPÓW",
  "INSTALACJE PRZESTRZENNE",
  "PIĘĆ STREF",
];

interface FestivalSectionProps {
  onAnimationFinish?: () => void;
}

export default function FestivalSection({
  onAnimationFinish,
}: FestivalSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const festivalRef = useRef<HTMLHeadingElement>(null);
  const textsRef = useRef<Array<HTMLDivElement | null>>([]);
  const yellowFrameRef = useRef<HTMLDivElement>(null);
  const redFrameRef = useRef<HTMLDivElement>(null);
  const finalTextRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    let ctx: gsap.Context;

    const handleRestart = () => {
      if (ctx) ctx.revert();
      ctx = gsap.context(() => {
        gsap.set(festivalRef.current, { opacity: 1, y: 0 });
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
          { y: "-30vh", duration: 2, delay: 0.69 },
          ">"
        )
          .to(yellowFrameRef.current, { opacity: 1, duration: 1.5 }, "<")
          .to(textsRef.current[0], { opacity: 1, y: 0, duration: 1.5 }, "<")
          .to(yellowFrameRef.current, { scale: 1.6, duration: 2 }, "<")
          .to(festivalRef.current, {
            y: "-100vh",
            opacity: 0,
            duration: 2,
            delay: 0.5,
          })
          .to(textsRef.current[1], { opacity: 1, y: 0, duration: 2 }, "<")
          .to(yellowFrameRef.current, { scale: 1.4, duration: 2 }, "<")
          .to(textsRef.current[2], { opacity: 1, y: 0, duration: 1.5 })
          .to(yellowFrameRef.current, { scale: 1.2, duration: 2 }, "<")
          .to(textsRef.current[3], { opacity: 1, y: 0, duration: 1.5 })
          .to(yellowFrameRef.current, { scale: 1, duration: 2 }, "<")
          .to(textsRef.current, {
            color: "#C3D0E1",
            filter: "blur(10px)",
            duration: 2,
          })
          .to(yellowFrameRef.current, { opacity: 0, duration: 2 }, "<")
          .to(redFrameRef.current, { opacity: 1, duration: 1.5 }, "<")
          .to(finalTextRef.current, { opacity: 1, duration: 1 })
          .to(
            {},
            {
              onComplete: () => {
                document.body.style.overflow = "auto";
                gsap.to(containerRef.current, {
                  height: 0,
                  duration: 0.1,
                  onComplete: () => setShow(false),
                });
                if (onAnimationFinish) onAnimationFinish();
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
  }, [onAnimationFinish]);

  if (!show) return null;

  return (
    <section
      id="festiwal"
      className="w-full fixed top-0 left-0 z-50 pointer-events-none"
    >
      <div ref={containerRef} className="w-full h-screen">
        <h2
          ref={festivalRef}
          className="absolute z-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(3rem,10vw,10rem)] text-light_blue opacity-100"
        >
          FESTIWAL
        </h2>

        <div className="absolute z-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center space-y-1 md:space-y-8">
          {TEXTS.map((text, index) => (
            <div
              key={text}
              ref={(el) => {
                textsRef.current[index] = el;
              }}
              className="text-[clamp(0.7rem,4vw,2.5rem)] text-yellow opacity-0 translate-y-5"
            >
              {text}
            </div>
          ))}
        </div>

        <div
          ref={yellowFrameRef}
          className="absolute top-1/2 left-1/2 w-full h-full opacity-0"
        >
          <img
            src="/frame_yellow.svg"
            alt="Yellow Frame"
            className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto max-w-[90vw]"
          />
        </div>

        <div
          ref={redFrameRef}
          className="absolute top-1/2 left-1/2 w-full h-full opacity-0"
        >
          <img
            src="/frame_red.svg"
            alt="Red Frame"
            className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto max-w-[90vw]"
          />
        </div>

        <div
          ref={finalTextRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-red text-[clamp(2rem,8vw,7rem)] leading-[0.9] opacity-0 text-center z-50 transform-none"
        >
          JEDNO <br /> NARRACYJNE <br /> POŁĄCZENIE
        </div>
      </div>
    </section>
  );
}
