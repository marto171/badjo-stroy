"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Preloader() {
  const [loaded, setLoaded] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 800);
    const removeTimer = setTimeout(() => setRemoved(true), 1300);
    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <div id="preloader" className={loaded ? "loaded" : ""} aria-hidden="true">
      <div className="flex flex-col items-center">
        <Logo size={72} className="mb-6 rounded-2xl" />
        <div className="flex gap-2 justify-center mb-6">
          <div className="loader-block" />
          <div className="loader-block" />
          <div className="loader-block" />
          <div className="loader-block" />
        </div>
        <span className="text-white font-[family-name:var(--font-heading)] font-extrabold text-xl tracking-[4px]">
          БАДЖО СТРОЙ
        </span>
      </div>
    </div>
  );
}
