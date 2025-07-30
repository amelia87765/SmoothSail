"use client";
import { useEffect, useState } from "react";

const words = [
  { text: "Zanurz się", top: "15%", left: "10%" },
  { text: "Stań", top: "15%", left: "65%" },
  { text: "Przemieszczaj", top: "40%", left: "30%" },
  { text: "Znajdź", top: "35%", left: "70%" },
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
      }, 4000 + index * 1500)
    );

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="h-[100vh] w-full z-5 relative bg-gradient-to-b from-grey via-yellow to-black overflow-hidden">
      {words.map((word, index) => (
        <span
          key={index}
          className={`absolute z-30 text-6xl transition-all duration-[1500ms] ease-in-out ${
            blurStates[index] ? "blur-sm" : "blur-none"
          }`}
          style={{ top: word.top, left: word.left }}
        >
          {word.text}
        </span>
      ))}
    </section>
  );
}
