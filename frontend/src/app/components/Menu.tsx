import { motion } from "framer-motion";
import React from "react";
//TO DO
export default function Menu() {
  const handleNavigation = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    window.history.pushState(null, "", hash);
    const event = new CustomEvent("hashchange");
    window.dispatchEvent(event);
  };
  //czcionka responsywna
  return (
    <div className="fixed w-full z-50 px-12 py-4 flex justify-between items-center bg-opacity-0">
      <nav className="text-light_blue">
        <ul className="flex gap-6 text-sm">
          <li>
            <a href="#home" onClick={(e) => handleNavigation(e, "#home")}>
              HOME
            </a>
          </li>
          <li>
            <a
              href="#festiwal"
              onClick={(e) => handleNavigation(e, "#festiwal")}
            >
              FESTIWAL
            </a>
          </li>
          <li>
            <a href="#bilety" onClick={(e) => handleNavigation(e, "#bilety")}>
              BILETY
            </a>
          </li>
          <li>
            <a href="#lineup" onClick={(e) => handleNavigation(e, "#lineup")}>
              LINE-UP
            </a>
          </li>
        </ul>
      </nav>
      <motion.img
        src="/logo_strefy.svg"
        alt="Logo"
        className="w-[12vw] max-w-[120px] origin-top-right"
        //link do insta strefyczasowe
      />
    </div>
  );
}
