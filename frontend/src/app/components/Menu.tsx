import { motion } from "framer-motion";
import React from "react";
import localFont from "next/font/local";

const akzid = localFont({
  src: "../../../public/fonts/AkzidGrtskNext.ttf",
  weight: "400",
  display: "swap",
});

export default function Menu() {
  const handleNavigation = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();

    const target = document.getElementById(targetId);
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className={`fixed w-full z-[9999] px-12 py-4 flex justify-between items-center bg-opacity-0 ${akzid.className}`}
    >
      <nav className="text-light_blue">
        <ul className="flex gap-6 text-[clamp(0.8rem,1.5vw,1.1rem)]">
          <li>
            <a
              href="#festiwal"
              onClick={(e) => handleNavigation(e, "festiwal")}
            >
              FESTIWAL
            </a>
          </li>
          <li>
            <a href="#bilety" onClick={(e) => handleNavigation(e, "bilety")}>
              BILETY
            </a>
          </li>
          <li>
            <a href="#lineup" onClick={(e) => handleNavigation(e, "lineup")}>
              LINE-UP
            </a>
          </li>
        </ul>
      </nav>
      <motion.img
        src="/logo_strefy.svg"
        alt="Logo"
        className="w-[12vw] max-w-[120px] origin-top-right cursor-pointer"
        onClick={() =>
          window.open("https://www.instagram.com/strefyczasowe", "_blank")
        }
      />
    </div>
  );
}
