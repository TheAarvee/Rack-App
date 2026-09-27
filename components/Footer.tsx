import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoImg from "@/public/Logo.png";

interface FooterProps {
  brandName?: string;
  githubHref?: string;
  creatorName?: string;
  creatorHref?: string;
}

export default function Footer({
  brandName = "Rack",
  githubHref = "https://github.com/TheAarvee/Rack-App",
  creatorName = "Aarvee",
  creatorHref = "https://aarvee.is-a.dev",
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="connect" className="w-full border-t border-black/[0.06] bg-white/70 backdrop-blur-md pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-black/[0.06]">
          {/* Brand Info (2 Columns on md+) */}
          <div className="md:col-span-2 flex flex-col items-start">
            <Link
              href="/"
              className="flex items-center gap-6 text-neutral-900 hover:opacity-80 transition-opacity mb-4"
            >
              <div className="relative flex items-center justify-center">
                <Image
                  src={logoImg}
                  alt={`${brandName} logo`}
                  height={22}
                  className="h-15 w-auto object-contain brightness-0"
                  style={{ filter: "brightness(0)" }}
                />
              </div>
              <span className="font-semibold text-6xl tracking-tight text-neutral-950">
                {brandName}
              </span>
            </Link>
          </div>

          {/* Column 1: Product Navigation */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-950 mb-1">
              Product
            </h3>
            <Link
              href="/"
              className="text-sm text-neutral-500 hover:text-neutral-950 transition-colors"
            >
              Overview
            </Link>
            <Link
              href="#demo"
              className="text-sm text-neutral-500 hover:text-neutral-950 transition-colors"
            >
              Interactive Demo
            </Link>
            <Link
              href="#stash"
              className="text-sm text-neutral-500 hover:text-neutral-950 transition-colors"
            >
              What You Can Stash
            </Link>
            <Link
              href="#download"
              className="text-sm text-neutral-500 hover:text-neutral-950 transition-colors"
            >
              Download Rack v1
            </Link>
          </div>

          {/* Column 2: Resources & Code */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-950 mb-1">
              Resources
            </h3>
            <Link
              href={githubHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-500 hover:text-neutral-950 transition-colors flex items-center gap-1.5"
            >
              <span>GitHub Repository</span>
              <svg className="w-3 h-3 text-neutral-400" viewBox="0 0 12 12" fill="none" stroke="currentColor">
                <path d="M3.5 1.5h7m0 0v7m0-7L1.5 10.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href={`${githubHref}/releases`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-500 hover:text-neutral-950 transition-colors flex items-center gap-1.5"
            >
              <span>Changelog & Releases</span>
              <svg className="w-3 h-3 text-neutral-400" viewBox="0 0 12 12" fill="none" stroke="currentColor">
                <path d="M3.5 1.5h7m0 0v7m0-7L1.5 10.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href={`${githubHref}/issues`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-500 hover:text-neutral-950 transition-colors flex items-center gap-1.5"
            >
              <span>Report an Issue</span>
              <svg className="w-3 h-3 text-neutral-400" viewBox="0 0 12 12" fill="none" stroke="currentColor">
                <path d="M3.5 1.5h7m0 0v7m0-7L1.5 10.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Column 3: Socials & Connect */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-950 mb-1">
              Connect
            </h3>
            <div className="flex items-center gap-4 mt-2">
              {/* GitHub */}
              <Link
                href="https://github.com/TheAarvee/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="text-neutral-500 hover:text-neutral-950 transition-colors duration-200 active:scale-95"
              >
                <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/ravivarmanb/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-neutral-500 hover:text-neutral-950 transition-colors duration-200 active:scale-95"
              >
                <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </Link>

              {/* Instagram */}
              <Link
                href="https://www.instagram.com/arv.builds/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-neutral-500 hover:text-neutral-950 transition-colors duration-200 active:scale-95"
              >
                <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>

              {/* Mail */}
              <Link
                href="mailto:ravivarmanb05@gmail.com"
                aria-label="Email Contact"
                className="text-neutral-500 hover:text-neutral-950 transition-colors duration-200 active:scale-95"
              >
                <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </Link>
            </div>

            <p className="text-xs text-neutral-500 mt-2">
              Get in touch bruh!
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-lg text-neutral-500">
          <p className="select-none">
            &copy; {currentYear} {brandName}. All rights reserved.
          </p>

          {/* Credits */}
          <div className="flex items-center gap-1.5 select-none">
            <span>cooked by</span>
            <Link
              href={creatorHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-black hover:text-neutral-600 hover:underline underline-offset-4 transition-colors inline-flex items-center gap-1.5"
            >
              <span>{creatorName}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://i.giphy.com/media/PQkCUxSAwZo3QWH6Pz/giphy.gif"
                alt="Patrick Jane"
                className="w-10 h-10 object-cover inline-block"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
