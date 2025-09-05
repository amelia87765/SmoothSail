"use client";

export default function MovieSection() {
  return (
    <section className="relative w-full h-screen z-30 overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <img
          src="/svera.png"
          alt="Festival"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/video_mask.svg"
          alt="Mask"
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>
    </section>
  );
}
