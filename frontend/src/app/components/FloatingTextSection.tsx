"use client";
import { useEffect, useState } from "react";

const words = [
  { text: "Zanurz się", top: "10%", left: "20%" },
  { text: "Stań", top: "25%", left: "60%" },
  { text: "Przemieszczaj", top: "40%", left: "30%" },
  { text: "Znajdź", top: "55%", left: "70%" },
  { text: "Błądź", top: "70%", left: "15%" },
  { text: "Odetchnij", top: "85%", left: "50%" },
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
    <section className="h-[100vh] w-full relative bg-gradient-to-b from-yellow-200 to-yellow-500 overflow-hidden">
      {words.map((word, index) => (
        <span
          key={index}
          className={`absolute text-4xl transition-all duration-[3000ms] ease-in-out ${
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
