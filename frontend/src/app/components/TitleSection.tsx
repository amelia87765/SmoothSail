type TitleSectionProps = {
  showText: boolean;
  showFrame: boolean;
  blurAmount: number;
  frameScale: number;
  exitAnimation: boolean;
};
export default function TitleSection({
  showText,
  showFrame,
  blurAmount,
  frameScale,
  exitAnimation,
}: TitleSectionProps) {
  return (
    <>
      <div
        className={`
    fixed left-1/2 z-30 text-[14rem] leading-[0.9] text-red
    text-center pointer-events-none transition-all duration-[1500ms] ease-[cubic-bezier(0.8,0,0.2,1)]
    -translate-x-1/2
     ${
       exitAnimation
         ? "-translate-y-[50vh] opacity-0"
         : showText
         ? "top-[35vh] translate-y-[-50%] opacity-100"
         : "top-[100%] opacity-0"
     }
  `}
        style={{ filter: `blur(${blurAmount}px)` }}
      >
        STREFY
        <br />
        CZASOWE
      </div>
      {showFrame && (
        <div
          className={`
      fixed left-1/2 z-30 text-center pointer-events-none
      text-light_blue text-[3rem] leading-[1.2]
      transition-opacity duration-[1500ms] ease-[cubic-bezier(0.8,0,0.2,1)]
      ${exitAnimation ? "-translate-y-[40vh] opacity-0" : "opacity-100"}
    `}
          style={{
            top: "calc(35vh + 14rem)",
            transform: "translateX(-50%)",
            filter: `blur(${blurAmount}px)`,
          }}
        >
          Indoorowy festiwal w Trójmieście
          <br />
          na koniec października—w noc
          <br />
          zmiany czasu na zimowy.
        </div>
      )}
      {showFrame && (
        <img
          src="/frame_blue.svg"
          alt="Frame"
          className={`
            fixed top-1/2 left-1/2 z-20 h-auto pointer-events-none
            transition-all duration-1000 ease-[cubic-bezier(0.8,0,0.2,1)]
            ${exitAnimation ? "scale-[3] opacity-0" : ""}
          `}
          style={{
            transform: `translate(-50%, -50%) scale(${frameScale})`,
          }}
        />
      )}
    </>
  );
}
