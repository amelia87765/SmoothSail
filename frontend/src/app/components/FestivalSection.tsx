"use client";
import { useEffect, useState } from "react";

export default function FestiwalSection() {
  const [visible, setVisible] = useState(false);

  return (
    <section className="h-[100vh] w-full flex flex-col items-center justify-center relative z-30">
      <h2
        className={`
          text-[8rem] text-[#FF4F23] transition-all duration-1000 ease-out
          ${visible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}
        `}
      >
        FESTIWAL
      </h2>
      <div
        className={`
          mt-12 w-48 h-48 rounded-full bg-[#C3D0E1] transition-all duration-1000 ease-out
          ${visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}
        `}
      />
    </section>
  );
}
