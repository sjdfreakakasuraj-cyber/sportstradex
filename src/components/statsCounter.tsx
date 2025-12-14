"use client";

import { useEffect, useState } from "react";

interface StatsCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export default function StatsCounter({
  value,
  suffix = "+",
  label,
}: StatsCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // ms
    const steps = 20;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <span className="text-2xl md:text-3xl font-bold">
          {count.toFixed(value % 1 === 0 ? 0 : 1)}
        </span>
        <span className="text-[#4ce2c2] text-xl md:text-2xl font-bold">
          {suffix}
        </span>
      </div>
      <span className="text-sm text-gray-300">{label}</span>
    </div>
  );
}
