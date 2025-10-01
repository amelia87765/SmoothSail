"use client";

export default function BeforeTicketsSection() {
  return (
    <section className="bg-gradient-to-b from-black to-[#4f554e] w-full flex flex-col items-center relative overflow-x-hidden">
      <div className="z-50 text-center md:mt-[8rem]">
        <p className="text-[clamp(1.8rem,2.5vw,3.5rem)] text-light_blue px-2">
          <em>
            {" "}
            Stworzyliśmy coś, co znacząco wymyka się poza percepcję czasu.{" "}
          </em>
        </p>
        <h2 className="text-[clamp(3rem,7vw,9rem)] text-red leading-tight mt-[12rem]">
          EDYCJA 2025 (-1)
        </h2>
        <p className="text-[clamp(1rem,2vw,2.5rem)] text-blue mt-2 text-center max-w-[80vw] mx-auto px-4">
          25. października, zmiana czasu z letniego na zimowy
        </p>
        <div className="flex justify-center mt-4">
          <img
            src={"logo_strefy.svg"}
            alt="logo"
            className="w-[clamp(9rem,18vw,20rem)] h-[clamp(6rem,12vw,14rem)] object-center z-50"
          />
        </div>
        <p className="text-[clamp(1rem,2vw,2.5rem)] text-light_blue mt-8 text-justify max-w-[80vw] mx-auto">
          Nowy festiwal w Trójmieście oparty na narracyjności i nietuzinkowej
          koncepcji, gdzie starannie dobrane koncerty uzupełniają się z licznymi
          dekoracjami i instalacjami przestrzennymi.
          <br />
          <br />
          Dwa razy do roku, w momencie zmiany czasu, wybrani kuratorzy i
          kuratorki postarają się o jak największe zaangażowanie uczestnika,
          jego zmysłów i przede wszystkim -{" "}
          <strong>KREOWANIE DOŚWIADCZEŃ</strong>.<br />
          <br />
          Ten festiwal sprawi, że po przekroczeniu progu... przepadniesz.
          <br />
          Nie opieraj się temu. Przyjdź, poczuj, doświadcz - w pełni.
        </p>
      </div>
    </section>
  );
}
