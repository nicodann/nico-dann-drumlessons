import Image from "next/image";

// ─── Footer ─────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[#8a8578] text-sm">
        <div className="flex gap-8 items-center">
          <p>
            &copy; {new Date().getFullYear()} Nico Dann. All rights reserved.
          </p>
          <Image
            src="/Neurodiversity Affirming Infinity Symbol.svg"
            alt="Neurodiversity affirming infinity symbol"
            width={40}
            height={36}
            style={{ height: "auto" }}
          />
          <Image
            src="/Progress Pride Heart.svg"
            alt="Neurodiversity affirming infinity symbol"
            width={30}
            height={26}
            style={{ height: "auto" }}
          />
        </div>
        <p>Drum lessons in Toronto&rsquo;s east end.</p>
      </div>
    </footer>
  );
}
