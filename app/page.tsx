import CTASection from "@/components/CTASection";
import DemoVideo from "@/components/DemoVideo";
import Footer from "@/components/Footer";
import ImageStack from "@/components/ImageStack";
import Navbar from "@/components/Navbar";
import VersatilityGrid from "@/components/VersatilityGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      {/* Floating Navbar */}
      <Navbar />

      {/* Main Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center pt-24 pb-8 sm:pt-32 sm:pb-12 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
        {/* Hero Header */}
        <div className="text-center relative w-fit max-w-3xl mx-auto mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-950 leading-[1.12]">
            Stash Anything. Anywhere
            <br />
            Grab Anytime.
          </h1>

          {/* Floating Speech Bubble Tag: Drag-in */}
          <div className="hidden sm:inline-flex absolute -left-6 md:-left-10 -bottom-2 sm:-bottom-3 z-20">
            <div className="relative flex items-center bg-[#789cff] text-black text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-2xl shadow-md select-none">
              <span>Drag-in</span>
              <svg
                className="absolute -bottom-1.5 right-3 w-3 h-2 text-[#789cff]"
                viewBox="0 0 12 8"
                fill="currentColor"
              >
                <path d="M0 0 C4 0 9 2 12 8 C8 5 4 2 0 0 Z" />
              </svg>
            </div>
          </div>

          {/* Floating Speech Bubble Tag: Drag-out */}
          <div className="hidden sm:inline-flex absolute -right-6 md:-right-10 -bottom-4 sm:-bottom-5 z-20">
            <div className="relative flex items-center bg-[#ff87f7] text-black text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-2xl shadow-md select-none">
              <span>Drag-out</span>
              <svg
                className="absolute -bottom-1.5 left-3 w-3 h-2 text-[#ff87f7]"
                viewBox="0 0 12 8"
                fill="currentColor"
              >
                <path d="M12 0 C8 0 3 2 0 8 C4 5 8 2 12 0 Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Fanned Overlapping Cards Component (5 Cards) */}
        <div className="w-full my-1 sm:my-2 mb-4 sm:mb-8 flex justify-center">
          <ImageStack />
        </div>

        {/* Hero Subtitle / Description */}
        <div className="text-center max-w-xl mx-auto px-4 mt-2 sm:mt-4">
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-normal">
            An invisible drop-zone for Windows. <br />Swipe & Stash.
          </p>
        </div>

        {/* Demo Video Section */}
        <DemoVideo />

        {/* Versatility Grid Section */}
        <VersatilityGrid />

        {/* CTA Section */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
