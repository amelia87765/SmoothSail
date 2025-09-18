"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://use.typekit.net/zik8iyz.css";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <footer
        className="w-full bg-[#231F20] text-light_blue flex items-center justify-between px-[5vw] py-4 sm:py-6 z-5 relative"
        style={{ fontFamily: "gil-sans-nova, sans-serif" }}
      >
        <div className="flex items-center gap-6 sm:gap-10 text-[clamp(0.8rem,1.5vw,1.1rem)] whitespace-nowrap z-50">
          <a
            href="https://www.instagram.com/smoothsailmusic/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            INSTAGRAM
          </a>
          <div className="relative">
            <button
              onClick={() => setShowContact(!showContact)}
              className="hover:opacity-80 transition-opacity cursor-pointer"
              style={{ fontFamily: "gil-sans-nova, sans-serif" }}
            >
              KONTAKT
            </button>

            {showContact && (
              <div className="contact-popup absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 bg-light_blue rounded-2xl p-4 w-56 z-50">
                <button
                  onClick={() => setShowContact(false)}
                  style={{ fontFamily: "gil-sans-nova, sans-serif" }}
                  className="absolute top-2 right-2 text-grey text-xl hover:text-red transition-colors"
                >
                  X
                </button>
                <div
                  style={{ fontFamily: "gil-sans-nova, sans-serif" }}
                  className="text-grey text-center space-y-2 pt-4"
                >
                  <div>kuba@smoothsail.pl</div>
                  <div>+48 512 922 298</div>
                </div>
              </div>
            )}
          </div>
        </div>

        <span className="hidden sm:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[clamp(0.8rem,1.5vw,1.1rem)] mb-4 whitespace-nowrap z-50">
          STREFY CZASOWE 2025
        </span>

        <div className="flex items-center z-50">
          <a
            href="https://smoothsail.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="relative"
          >
            <Image
              src="/SMOOTHSAIL_LOGO_W.png"
              alt="Logo SmothSail"
              width={160}
              height={80}
              className="w-[clamp(40px,7vw,80px)] h-auto"
              priority
            />
          </a>
        </div>
      </footer>

      <style jsx>{`
        @media (max-width: 640px) {
          .contact-popup {
            width: 44vw !important;
            padding: 0.75rem !important;
            border-radius: 1rem !important;
          }

          .contact-popup div {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
}
