"use client";

export default function MovieSection() {
  return (
    <section className="relative w-full h-[33vh] sm:h-[66vh] lg:min-h-screen z-50 overflow-hidden">
      <div className="absolute inset-0 ">
        <img
          src="/svera_movieS.png"
          alt="Festival"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
}
