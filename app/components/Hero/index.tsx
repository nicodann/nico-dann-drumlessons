import Image from "next/image";
import { useEffect, useState } from "react";

// ─── Hero ───────────────────────────────────────────────────────────────
export default function Hero({
  smoothScroll,
}: {
  smoothScroll: (id: string) => void;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background — replace src with your hero image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Nico Dann playing drums"
          fill
          className="w-full h-full object-cover object-[50%_40%]"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#1a1a1a]/60 via-[#1a1a1a]/40 to-[#f8f7f4]" />
      </div>

      <div
        className={`flex flex-col items-center gap-12 relative z-10 text-center px-6 max-w-3xl transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          <p className="text-[#a3c4a8] tracking-[0.35em] uppercase text-sm font-medium">
            Drum Lessons in East Toronto
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#f2f0ed] leading-tight">
            Learn Drums
            <br />
            <span className="text-[#a3c4a8]">with Nico Dann</span>
          </h1>
          <p className="text-[#f2f0ed]/60 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed">
            Patient, personalised instruction for all ages and levels.
            <br className="hidden sm:block" />
            Studio located at Greenwood &amp; Danforth.
          </p>
          <button
            onClick={() => smoothScroll("contact")}
            className="inline-block bg-[#3d6b50] hover:bg-[#4a7d5e] text-white font-semibold px-8 py-4 rounded-full text-sm tracking-wider uppercase transition-colors"
          >
            Book a Free Intro Lesson
          </button>
        </div>
        <figure className="max-w-lg mx-auto pt-2 backdrop-blur-sm rounded-2xl px-6 py-5">
          {/* <figure className="max-w-lg mx-auto pt-2"> */}
          <blockquote className="text-[#f2f0ed] text-base italic leading-relaxed">
            {/* <blockquote
            className="text-[#f2f0ed] text-base italic leading-relaxed"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
          > */}
            "Incredible drum lessons — such patience and understanding of who
            our daughter is as a learner, catering to her styles and approaches.
            She leaves lessons every week with a smile, and it has built her
            confidence and competence at playing the drums."
          </blockquote>
          <figcaption className="mt-3 text-[#f2f0ed] text-sm tracking-wide">
            — Daniel F.
          </figcaption>
        </figure>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(61,107,80,0.5)"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
