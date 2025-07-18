"use client";

export default function MovieSection() {
  return (
    <section className="h-[100vh] w-full relative z-30">
      <div className="fixed inset-0 bg-black">
        <img
          src="/svera.png"
          alt="Festival"
          className="w-full h-full object-cover"
        />
      </div>
      <img
        src="/video_mask.svg"
        alt="Mask"
        className="fixed inset-0 w-full h-full object-cover pointer-events-none"
      />
    </section>
  );
}
