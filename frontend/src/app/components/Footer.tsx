"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function Footer() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://use.typekit.net/zik8iyz.css";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <footer
      className="w-full bg-black text-light_blue flex items-center justify-between px-[5vw] py-4 sm:py-6 z-5 relative"
      style={{ fontFamily: "gil-sans-nova, sans-serif" }}
    >
      <div className="flex items-center gap-6 sm:gap-10 text-[clamp(0.8rem,1.5vw,1.1rem)] whitespace-nowrap">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity z-30"
        >
          INSTAGRAM
        </a>
        <a
          href="tel:+48512922298"
          className="hover:opacity-80 transition-opacity z-30"
        >
          KONTAKT
        </a>
      </div>

      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[clamp(0.8rem,1.5vw,1.1rem)] whitespace-nowrap z-30">
        STREFY CZASOWE 2025
      </span>

      <div className="flex items-center">
        <a
          href="https://smoothsail.pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/SMOOTHSAIL_LOGO_W.png"
            alt="Logo SmothSail"
            width={80}
            height={80}
            className="w-[clamp(40px,7vw,80px)] h-auto z-30"
            priority
          />
        </a>
      </div>
    </footer>
  );
}
