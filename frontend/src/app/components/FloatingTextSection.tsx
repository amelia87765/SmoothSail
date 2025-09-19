"use client";
import { useEffect, useState } from "react";

const words = [
  { text: "Zanurz się", top: "15%", left: "10%" },
  { text: "Odkrywaj", top: "8%", left: "65%" },
  { text: "Przemieszczaj się", top: "40%", left: "20%" },
  { text: "Zatrzymaj", top: "35%", left: "70%" },
  { text: "Błądź", top: "70%", left: "20%" },
  { text: "Odetchnij", top: "70%", left: "60%" },
];

export default function FloatingWordsSection() {
  const [blurStates, setBlurStates] = useState(Array(words.length).fill(false));

  useEffect(() => {
    const intervals = words.map((_, index) =>
      setInterval(() => {
        setBlurStates((prev) => {
          const updated = [...prev];
          updated[index] = !updated[index];
          return updated;
        });
      }, 2000 + index * 1500)
    );

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="h-[100vh] w-full z-5 relative bg-gradient-to-b from-grey via-yellow to-black overflow-hidden">
      {words.map((word, index) => (
        <span
          key={index}
          className={`absolute z-50 text-[clamp(1.5rem,5vw,4.5rem)] text-[#272B28] transition-all duration-[1500ms] ease-in-out ${
            blurStates[index] ? "blur-[6px]" : "blur-none"
          }`}
          style={{ top: word.top, left: word.left }}
        >
          {word.text}
        </span>
      ))}
    </section>
  );
}
