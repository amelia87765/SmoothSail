"use client";

import { useEffect, useState } from "react";

export default function CountdownTimer({
  className = "",
}: {
  className?: string;
}) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-10-25T03:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const totalSeconds = Math.floor(difference / 1000);
      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();

    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`text-center z-50 text-light_blue mt-32 px-4 ${className}`}>
      <p className="mb-2 text-base sm:text-xl md:text-2xl">
        Do zmiany czasu na zimowy pozostało:
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-4 text-sm sm:text-base md:text-xl tracking-widest">
        <span>{timeLeft.days} dni</span>
        <span>{timeLeft.hours} godzin</span>
        <span>{timeLeft.minutes} minut</span>
        <span>{timeLeft.seconds} sekund</span>
      </div>
    </div>
  );
}
