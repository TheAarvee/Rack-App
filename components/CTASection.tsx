"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface CTASectionProps {
  downloadHref?: string;
  githubHref?: string;
}

export default function CTASection({
  downloadHref = "#download",
  githubHref = "https://github.com/TheAarvee/Rack-App",
}: CTASectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStartedLoading, setHasStartedLoading] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Respect reduced-motion preferences
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    // Lazy-load and play only when visible in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasStartedLoading(true);
          if (videoRef.current) {
            videoRef.current.play().catch(() => {
              // Browser policy fallback if autoplay is restricted
            });
          }
        } else {
          // Pause when out of view to preserve CPU, GPU and battery
          if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
          }
        }
      },
      {
        root: null,
        rootMargin: "200px 0px", // Buffer slightly before scrolling into view
        threshold: 0.15,
      }
    );

    observer.observe(container);

    // Pause when browser tab is inactive or minimized
    const handleVisibilityChange = () => {
      if (!videoRef.current) return;
      if (document.hidden) {
        if (!videoRef.current.paused) {
          videoRef.current.pause();
        }
      } else if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInView) {
          videoRef.current.play().catch(() => {});
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section id="download" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32 scroll-mt-24">
      <div
        ref={containerRef}
        className="relative w-full rounded-3xl bg-neutral-900 border border-black/10 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.18),0_1px_3px_rgba(0,0,0,0.06)] px-6 py-16 sm:py-24 md:py-28 text-center overflow-hidden"
      >
        {/* Background Video with Hardware Accelerated Compositing */}
        <video
          ref={videoRef}
          src={hasStartedLoading ? "/cta.mp4" : undefined}
          poster="/cta-poster.webp"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0 transform-gpu"
        />

        {/* Very subtle micro-blur & gentle translucent scrim so the video stays clear while text is crisp */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backdropFilter: "blur(1.5px)",
            WebkitBackdropFilter: "blur(1.5px)",
            backgroundColor: "rgba(0, 0, 0, 0.22)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          {/* Subtle Live Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 border border-white/20 text-xs font-medium text-white mb-6 shadow-md backdrop-blur-md select-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span>Windows Native &bull; v1.0 Available</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            Ready to stash?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white font-medium leading-relaxed max-w-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Slide Rack into your workflow today. Native, lightweight, and completely free.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
            {/* Primary Button */}
            <Link
              href={downloadHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3.5 bg-white text-neutral-950 px-7 py-3 rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:bg-neutral-100 active:scale-[0.98] transition-all duration-200 select-none group"
            >
              {/* Windows Icon */}
              <svg
                className="w-4 h-4 fill-current shrink-0 text-neutral-950 group-hover:scale-105 transition-transform"
                viewBox="0 0 88 88"
              >
                <path d="M0 12.402l35.689-4.86.016 34.423-35.67.203zm35.67 33.529l.026 34.453-35.67-4.885-.026-29.771zm4.326-39.027L87.914 0v41.527l-47.918.378zm47.918 43.708L87.914 88l-47.918-6.76V46.602z" />
              </svg>

              {/* Stacked Text: Download Rack v1 / Windows */}
              <div className="flex flex-col items-start text-left">
                <span className="font-medium text-sm sm:text-base leading-tight tracking-tight text-neutral-950">
                  Download Rack v1
                </span>
              </div>
            </Link>

            {/* Secondary Button */}
            <Link
              href={githubHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-white bg-black/50 hover:bg-black/70 transition-colors duration-200 font-medium text-sm sm:text-base tracking-tight select-none py-2.5 px-5 rounded-full border border-white/20 backdrop-blur-md shadow-md"
            >
              {/* GitHub Icon */}
              <svg
                className="w-4 h-4 fill-current shrink-0"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>Star on Github</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
