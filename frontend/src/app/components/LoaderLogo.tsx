import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

type Props = {
  onFinish: () => void;
};

export default function LoaderLogo({ onFinish }: Props) {
  const pulseControls = useAnimation();
  const fadeControls = useAnimation();
  const bgFadeControls = useAnimation();
  const [isPulsing, setIsPulsing] = useState(true);
  const [showLogo, setShowLogo] = useState(true);
  const [showComponent, setShowComponent] = useState(true);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;

    pulseControls.start({
      scale: [1, 0.95, 1, 0.95, 1],
      transition: { duration: 3.5, ease: "easeInOut" },
    });

    const timer = setTimeout(async () => {
      if (!isMounted.current) return;

      setIsPulsing(false);
      await pulseControls.stop();

      await fadeControls.start({
        opacity: 0,
        transition: { duration: 1.5, ease: "easeOut" },
      });
      setShowLogo(false);

      onFinish();
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (!isMounted.current) return;
      await bgFadeControls.start({
        opacity: 0,
        transition: { duration: 1, ease: "easeOut" },
      });

      if (!isMounted.current) return;
      setShowComponent(false);
    }, 3500);

    return () => {
      isMounted.current = false;
      clearTimeout(timer);
    };
  }, [pulseControls, fadeControls, bgFadeControls, onFinish]);

  if (!showComponent) return null;

  return (
    <>
      <motion.div
        className="fixed inset-0 z-30 flex items-center justify-center bg-gradient-to-b from-color_bg_top via-color_bg_mid to-red"
        animate={bgFadeControls}
        initial={{ opacity: 1 }}
      >
        <img
          src="/strefy.svg"
          alt="Mask"
          className="fixed inset-0 z-40 w-full h-full object-cover object-top pointer-events-none"
        />
      </motion.div>
      {showLogo && (
        <motion.img
          src="/logo_strefy_.svg"
          alt="Logo"
          initial={{
            scale: 1,
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            position: "fixed",
            opacity: 1,
          }}
          animate={isPulsing ? pulseControls : fadeControls}
          style={{
            position: "fixed",
            zIndex: 9999,
            willChange: "transform, opacity",
          }}
          className="pointer-events-none"
        />
      )}
    </>
  );
}
