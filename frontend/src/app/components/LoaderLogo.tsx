import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

type Props = {
  onFinish: () => void;
};

export default function LoaderLogo({ onFinish }: Props) {
  const controls = useAnimation();
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);

  useEffect(() => {
    async function sequence() {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setIsPulsing(false);
      await controls.start({
        scale: 0.165,
        top: "6vh",
        left: "calc(100vw - 10vw)",
        transition: { duration: 2, ease: "easeInOut" },
        position: "fixed",
      });
      setAnimationComplete(true);
      onFinish();
    }
    sequence();
  }, [controls, onFinish]);

  return (
    <>
      <div className="fixed inset-0 z-5 flex items-center justify-center bg-gradient-to-b from-color_bg_top via-color_bg_mid to-red">
        <div
          className="fixed inset-0 z-10 pointer-events-none opacity-25"
          style={{
            backgroundImage: "url(data:image/png;base64,...)",
          }}
        />
        <img
          src="/strefy.svg"
          alt="Mask"
          className="fixed inset-0 z-10 w-full h-full object-cover object-top pointer-events-none"
        />
      </div>

      <motion.img
        src="/logo_strefy.svg"
        alt="Logo"
        initial={{
          scale: 1,
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
          position: "fixed",
        }}
        animate={controls}
        style={{
          position: "fixed",
          zIndex: 50,
          willChange: "transform",
        }}
        className={`pointer-events-none ${
          !animationComplete && isPulsing ? "animate-pulse" : ""
        }`}
      />
    </>
  );
}
