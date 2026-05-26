import { Section, SectionHeading, SectionLabel } from "../SectionWrapper";

// ─── Lessons ────────────────────────────────────────────────────────────
export default function Lessons({
  smoothScroll,
}: {
  smoothScroll: (id: string) => void;
}) {
  const offerings = [
    {
      icon: "🥁",
      title: "Private Drum Lessons",
      description:
        "One-on-one instruction tailored to your level and goals. Topics can include technique, reading, rudiments, styles, and — most importantly — making music.",
    },
    {
      icon: "🎵",
      title: "All Ages & Levels",
      description:
        "From young beginners to adult hobbyists to serious students preparing for auditions. I adapt every lesson to meet you where you are.",
    },
    {
      icon: "🎧",
      title: "Modern Approach",
      description:
        "I integrate technology, play-along tracks, and recording into lessons so you can hear your progress and stay motivated. I also play guitar and bass and love to jam with my students!",
    },
  ];

  return (
    <Section id="lessons" alt>
      <SectionLabel>Lessons</SectionLabel>
      <SectionHeading>What to Expect</SectionHeading>

      <div className="grid sm:grid-cols-3 gap-8 mb-14">
        {offerings.map((o) => (
          <div
            key={o.title}
            className="bg-[#f8f7f4] border border-[#e0ddd6] rounded-2xl p-6 hover:border-[#3d6b50]/40 transition-colors"
          >
            <span className="text-3xl mb-4 block">{o.icon}</span>
            <h3 className="text-[#1a1a1a] font-semibold text-lg mb-2">
              {o.title}
            </h3>
            <p className="text-[#8a8578] text-sm leading-relaxed">
              {o.description}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-[#f8f7f4] border border-[#e0ddd6] rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div className="flex-1">
          <h3 className="text-[#1a1a1a] font-semibold text-lg mb-2">
            Studio Location
          </h3>
          <p className="text-[#6b665c] leading-relaxed">
            My studio is located in Toronto&rsquo;s east end, near{" "}
            <strong className="text-[#1a1a1a]">Greenwood &amp; Danforth</strong>
            . Easy access by TTC (Greenwood station, Line 2) and plenty of
            street parking.
          </p>
        </div>
        <button
          onClick={() => smoothScroll("contact")}
          className="shrink-0 bg-[#3d6b50] hover:bg-[#4a7d5e] text-white font-semibold px-6 py-3 rounded-full text-sm tracking-wider uppercase transition-colors"
        >
          Get in Touch for Rates
        </button>
      </div>

      {/* Testimonials placeholder */}
      {/* <div className="mt-16 text-center">
        <p className="text-[#8a8578] italic text-sm">
          Testimonials coming soon.
        </p>
      </div> */}
    </Section>
  );
}
