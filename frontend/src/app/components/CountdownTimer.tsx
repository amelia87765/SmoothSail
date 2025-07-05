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
    const targetDate = new Date("2024-10-27T03:00:00");

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
    <div className="text-center text-[#C3D0E1] text-xl sm:text-2xl mt-32">
      <p className="mb-2 font-semibold">Do zmiany czasu na zimowy pozostało:</p>
      <p className="tracking-widest font-mono">
        {timeLeft.days} dni {timeLeft.hours} godzin {timeLeft.minutes} minut{" "}
        {timeLeft.seconds} sekund
      </p>
    </div>
  );
}
