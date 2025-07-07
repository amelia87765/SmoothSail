import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

type Props = {
  onFinish: () => void;
};

export default function LoaderLogo({ onFinish }: Props) {
  const controls = useAnimation();

  useEffect(() => {
    async function sequence() {
      await controls.start({
        scale: 0.165,
        top: "2vh",
        left: "calc(100vw - 4vw)",
        transition: { duration: 2, ease: "easeInOut" },
        position: "fixed",
      });
      onFinish();
    }
    sequence();
  }, [controls, onFinish]);

  return (
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
      style={{ position: "fixed", zIndex: 30 }}
      className="pointer-events-none"
    />
  );
}
