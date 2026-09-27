import Image from "next/image";
import React from "react";

export default function VersatilityGrid() {
  return (
    <section id="stash" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32 scroll-mt-24">
      {/* Section Header */}
      <div className="max-w-2xl text-left mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-medium mb-3 border border-black/[0.04]">
          <span>What can you stash?</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-neutral-950">
          Built for anything you drag.
        </h2>
        <p className="mt-2.5 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
          Rack handles more than just files — it acts as an invisible temporary staging ground for your entire workflow.
        </p>
      </div>

      {/* 3-Column Bento Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Card 1: Files & Media */}
        <div className="flex flex-col justify-between bg-white rounded-2xl md:rounded-3xl p-5 sm:p-6 border border-black/10 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group">
          {/* Image Preview - perfectly fitted aspect-square */}
          <div className="relative w-full aspect-square rounded-xl md:rounded-2xl overflow-hidden bg-neutral-50 mb-5">
            <Image
              src="/features/feature1.png"
              alt="Files & Media preview"
              fill
              unoptimized
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Text Content */}
          <div>
            <div className="inline-block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
              Files & Media
            </div>
            <h3 className="text-lg sm:text-xl font-medium tracking-tight text-blue-400 mb-2">
              Drag-in any file
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed font-normal">
              Images, documents, or heavy project files. Stash them safely while you switch apps.
            </p>
          </div>
        </div>

        {/* Card 2: Web Links */}
        <div className="flex flex-col justify-between bg-white rounded-2xl md:rounded-3xl p-5 sm:p-6 border border-black/10 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group">
          {/* Image Preview - perfectly fitted aspect-square */}
          <div className="relative w-full aspect-square rounded-xl md:rounded-2xl overflow-hidden bg-neutral-50 mb-5">
            <Image
              src="/features/feature2.png"
              alt="Web Links preview"
              fill
              unoptimized
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Text Content */}
          <div>
            <div className="inline-block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
              Web Links
            </div>
            <h3 className="text-lg sm:text-xl font-medium tracking-tight text-yellow-300 mb-2">
              Save the links
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed font-normal">
              Drag URLs straight from your address bar. Keep the link, close the clutter.
            </p>
          </div>
        </div>

        {/* Card 3: Text Snippets */}
        <div className="flex flex-col justify-between bg-white rounded-2xl md:rounded-3xl p-5 sm:p-6 border border-black/10 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group">
          {/* Image Preview - perfectly fitted aspect-square */}
          <div className="relative w-full aspect-square rounded-xl md:rounded-2xl overflow-hidden bg-neutral-50 mb-5">
            <Image
              src="/features/feature3.png"
              alt="Text Snippets preview"
              fill
              unoptimized
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Text Content */}
          <div>
            <div className="inline-block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
              Text Snippets
            </div>
            <h3 className="text-lg sm:text-xl font-medium tracking-tight text-pink-300 mb-2">
              Hold raw text
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed font-normal">
              Code, hex colors, or quick thoughts. Drop text straight in without opening a notepad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
