"use client";
import { useEffect, useRef } from "react";

interface Spark {
  id: number;
  x: number;
  y: number;
}

export default function ClickEffect() {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function spawnEffect(x: number, y: number) {
      if (!container) return;
      const id = counterRef.current++;

      /* ── Ripple rings ── */
      for (let i = 0; i < 3; i++) {
        const ring = document.createElement("div");
        ring.className = "click-ring";
        ring.style.cssText = `
          left:${x}px; top:${y}px;
          animation-delay:${i * 80}ms;
        `;
        container.appendChild(ring);
        ring.addEventListener("animationend", () => ring.remove(), { once: true });
      }

      /* ── Sparks ── */
      const angles = [0, 45, 90, 135, 180, 225, 270, 315];
      angles.forEach((angle) => {
        const spark = document.createElement("div");
        spark.className = "click-spark";
        const rad = (angle * Math.PI) / 180;
        const dist = 40 + Math.random() * 30;
        spark.style.cssText = `
          left:${x}px; top:${y}px;
          --tx:${Math.cos(rad) * dist}px;
          --ty:${Math.sin(rad) * dist}px;
        `;
        container.appendChild(spark);
        spark.addEventListener("animationend", () => spark.remove(), { once: true });
      });

      /* ── Center flash ── */
      const flash = document.createElement("div");
      flash.className = "click-flash";
      flash.style.cssText = `left:${x}px; top:${y}px;`;
      container.appendChild(flash);
      flash.addEventListener("animationend", () => flash.remove(), { once: true });
    }

    const handler = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      spawnEffect(e.clientX - rect.left, e.clientY - rect.top);
    };

    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  return <div ref={containerRef} className="click-layer" aria-hidden />;
}
