"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logoImg from "@/public/Logo.png";

interface NavbarProps {
  brandName?: string;
  downloadHref?: string;
  links?: { label: string; href: string }[];
}

export default function Navbar({
  brandName = "Rack",
  downloadHref = "https://github.com/TheAarvee/Rack-App/releases/download/v1.0.0/RackSetup-v1.0.exe",
  links = [
    { label: "Home", href: "/" },
    { label: "Demo", href: "#demo" },
    { label: "Stash", href: "#stash" },
    { label: "Connect", href: "#connect" },
  ],
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on click outside or escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 sm:px-6 sm:py-4 md:px-8 backdrop-blur-md transition-all font-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Left: Brand Logo */}
        <div className="pointer-events-auto">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-neutral-900 select-none hover:opacity-80 transition-opacity"
          >
            <div className="relative flex items-center justify-center">
              <Image
                src={logoImg}
                alt={`${brandName} logo`}
                height={20}
                className="h-5 w-auto object-contain brightness-0"
                style={{ filter: "brightness(0)" }}
                priority
              />
            </div>
            <span className="font-semibold text-base md:text-lg tracking-tight text-neutral-900">
              {brandName}
            </span>
          </Link>
        </div>

        {/* Center: Menu */}
        <div
          ref={menuRef}
          className="pointer-events-auto absolute left-1/2 -translate-x-1/2"
        >
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            className="flex items-center gap-2 py-2 px-3 text-neutral-900 hover:text-neutral-600 active:scale-[0.98] transition-all cursor-pointer select-none"
          >
            {/* Two parallel horizontal lines */}
            <div className="flex flex-col justify-center items-center gap-1 w-3.5 h-3.5">
              <span
                className={`block h-[1.5px] w-3.5 bg-neutral-900 rounded-full transition-all duration-200 ${
                  isMenuOpen ? "rotate-45 translate-y-[2.75px]" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-3.5 bg-neutral-900 rounded-full transition-all duration-200 ${
                  isMenuOpen ? "-rotate-45 -translate-y-[2.75px]" : ""
                }`}
              />
            </div>
            <span className="font-medium text-sm md:text-base tracking-tight text-neutral-900">
              Menu
            </span>
          </button>

          {/* Floating Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white rounded-3xl border border-black/[0.08] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] py-2 px-1.5 animate-in fade-in zoom-in-95 duration-150">
              <nav className="flex flex-col gap-0.5">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-2 rounded-3xl text-sm font-medium text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                {/* Mobile-only shortcuts */}
                <div className="pt-2 mt-1 border-t border-neutral-100 flex flex-col gap-1 sm:hidden">
                  <Link
                    href={downloadHref}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-2 rounded-xl text-sm font-medium bg-neutral-950 text-white text-center shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.35),inset_0_0_0_1px_rgba(255,255,255,0.1)] hover:bg-neutral-900 transition-all"
                  >
                    Download
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>

        {/* Right: Action Pill */}
        <div className="pointer-events-auto flex items-center">
          <Link
            href={downloadHref}
            className="inline-flex items-center justify-center bg-neutral-950 text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full shadow-[inset_0_2px_5px_rgba(255,255,255,0.35),inset_0_0_0_1px_rgba(255,255,255,0.1),0_2px_8px_rgba(0,0,0,0.12)] hover:shadow-[inset_0_2px_5px_rgba(255,255,255,0.35),inset_0_0_0_1px_rgba(255,255,255,0.15),0_4px_12px_rgba(0,0,0,0.18)] hover:bg-neutral-900 active:scale-[0.98] transition-all duration-200 font-medium text-sm md:text-base tracking-tight select-none whitespace-nowrap"
          >
            Download
          </Link>
        </div>
      </div>
    </header>
  );
}