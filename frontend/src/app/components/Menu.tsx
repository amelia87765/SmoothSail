import { motion } from "framer-motion";
import React from "react";

export default function Menu() {
  return (
    <div className="fixed w-full z-50 px-12 py-4 flex justify-between items-center bg-opacity-0">
      <nav className="text-light_blue">
        <ul className="flex gap-6 text-sm">
          <li>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = "home";
              }}
            >
              HOME
            </a>
          </li>
          <li>
            <a href="#muzyka">FESTIWAL</a>
          </li>
          <li>
            <a href="#sztuka">MUZYKA I SZTUKA</a>
          </li>
          <li>
            <a href="#festiwal">PARTNERZY</a>
          </li>
        </ul>
      </nav>
      <motion.img
        src="/logo_strefy.svg"
        alt="Logo"
        className="w-[12vw] max-w-[120px] origin-top-right"
      />
    </div>
  );
}
