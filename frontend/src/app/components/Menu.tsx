import { motion } from "framer-motion";
import React from "react";

export default function Menu() {
  const handleNavigation = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();

    const target = document.getElementById(targetId);
    if (!target) return;

    if (targetId === "bilety") {
      const rect = target.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const middle =
        rect.top + scrollTop + rect.height / 2 - window.innerHeight / 2;

      window.scrollTo({ top: middle, behavior: "smooth" });
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed w-full z-[9999] px-12 py-4 flex justify-between items-center bg-opacity-0">
      <nav className="text-light_blue">
        <ul className="flex gap-6 text-sm">
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
