"use client";

import { useEffect, useRef, useState } from "react";

interface DemoVideoProps {
  heading?: string;
  subcontent?: string;
}

export default function DemoVideo({
  heading = "Drag. Stash. Disappear",
  subcontent = "Drag to the right edge of your screen to slide Rack open. Drop your files in, and move away to let it stash. Zero friction, Total focus.",
}: DemoVideoProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStartedLoading, setHasStartedLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Use IntersectionObserver to lazy load & autoplay when in view
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasStartedLoading(true);
          if (videoRef.current) {
            videoRef.current
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => {
                // Browser policy fallback if autoplay is restricted
              });
          }
        } else {
          // Pause when out of view to save CPU and battery
          if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      },
      {
        root: null,
        rootMargin: "150px 0px", // Start buffering slightly before entering viewport
        threshold: 0.25, // Play when 25% of the video is visible
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <section id="demo" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-18 sm:mt-24 mb-20 sm:mb-28 scroll-mt-24">
      {/* Left-aligned Heading and Subcontent */}
      <div className="max-w-2xl text-left mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium tracking-tight text-black">
          {heading}
        </h2>
        <p className="mt-5 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
          {subcontent}
        </p>
      </div>

      {/* Video Container Card */}
      <div
        ref={containerRef}
        className="relative w-full aspect-video rounded-2xl md:rounded-4xl overflow-hidden bg-neutral-900 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18),0_1px_3px_rgba(0,0,0,0.06)] group select-none cursor-pointer"
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src={hasStartedLoading ? "/Rack Demo.mp4" : undefined}
          poster="/rack-demo-poster.webp"
          muted={isMuted}
          playsInline
          loop
          preload="none"
          className="w-full h-full object-cover"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Top/Bottom Gradient Vignette for Subtle Controls Visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Center Play Button Overlay (when paused) */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/25 backdrop-blur-[2px] transition-all">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 text-neutral-900 flex items-center justify-center shadow-2xl pl-1 hover:scale-105 hover:bg-white transition-all">
              <svg
                className="w-7 h-7 sm:w-8 sm:h-8 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {/* Bottom Floating Control Pills */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Mute / Unmute Button */}
          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="p-2.5 sm:p-3 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 hover:bg-black/80 transition-all cursor-pointer shadow-lg active:scale-95"
          >
            {isMuted ? (
              /* Muted Icon */
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
              </svg>
            ) : (
              /* Unmuted Icon */
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
