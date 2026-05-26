// ─── Footer ─────────────────────────────────────────────────────────────
export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[#8a8578] text-sm">
        <p>&copy; {new Date().getFullYear()} Nico Dann. All rights reserved.</p>
        <p>Drum lessons in Toronto&rsquo;s east end.</p>
      </div>
    </footer>
  );
}
