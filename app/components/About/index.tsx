import { Section, SectionHeading, SectionLabel } from "../SectionWrapper";

// ─── About ──────────────────────────────────────────────────────────────
export default function About() {
  const credentials = [
    {
      label: "McGill University",
      detail: "BMus Jazz Performance",
    },
    { label: "CUNY Queens College", detail: "MMus Jazz Performance" },
    { label: "Banff Centre", detail: "Residencies and Workshops" },
    {
      label: "Pravate Study",
      detail:
        "I've been fortunate to be able to study with many great teachers, including Jim Black, Jim Blackley, Remy Bolduc, Antonio Hart, Dave Patel, Michelle Lambert, Chris McCann, Bob Moses, John Riley and Nasheet Waits",
    },
  ];

  return (
    <Section id="about">
      <SectionLabel>About</SectionLabel>
      <SectionHeading>Hi, I&rsquo;m Nico.</SectionHeading>

      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3 space-y-5 text-[#6b665c] leading-relaxed">
          <p>
            I&rsquo;m a professional drummer, composer, and music educator based
            in Toronto&rsquo;s east end. I&rsquo;ve spent over twenty years
            performing, recording, and touring across North America and Europe
            (especially before kids!) — from Glastonbury Festival to the
            Stratford Summer Music Festival, from indie rock stages to jazz bars
            and classical concert halls.
          </p>
          <p>
            As an educator, I believe every student is different. I tailor every
            lesson to match your personal goals, your interests, and your pace.
            Whether you&rsquo;re an adult hitting a cymbal for the first time or
            a seven-year-old who's been playing in the family band since the age
            of three, my job is to make the experience fun, rewarding, and
            musical from day one.
          </p>
          <p>
            I&rsquo;ve taught privately and in schools for over 15 years,
            including a long-running position at Bayview Glen School, where I
            tought percussion and piano to students from Grades 1 through 12.
            I&rsquo;m patient, I&rsquo;m encouraging, and I genuinely care about
            helping you grow. A life-long learner I'm always trying to pick up
            new ideas and re-think the way I'm emparting knowledge to my own
            students.
          </p>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h3 className="text-[#1a1a1a] font-semibold text-sm tracking-widest uppercase mb-4">
            Education
          </h3>
          {credentials.map((c) => (
            <div key={c.label} className="border-l-2 border-[#3d6b50] pl-4">
              <p className="text-[#1a1a1a] font-medium">{c.label}</p>
              <p className="text-[#8a8578] text-sm">{c.detail}</p>
            </div>
          ))}

          <h3 className="text-[#1a1a1a] font-semibold text-sm tracking-widest uppercase mt-8 mb-4">
            Highlights
          </h3>
          <ul className="space-y-2 text-[#6b665c] text-sm">
            <li>• 20+ years performing &amp; recording</li>
            <li>• Glastonbury, SXSW, North Sea Jazz Festival</li>
            <li>• Juno-nominated collaborations</li>
            <li>• Bilingual (English &amp; French)</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
