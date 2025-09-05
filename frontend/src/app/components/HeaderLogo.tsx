"use client";
import Image from "next/image";

export default function HeaderLogo() {
  return (
    <img
      src="/logo_strefy.svg"
      alt="Logo Header"
      className="fixed z-[9999] pointer-events-none"
      style={{
        scale: 0.165,
        top: "6vh",
        left: "calc(100vw - 10vw)",
      }}
    />
  );
}
