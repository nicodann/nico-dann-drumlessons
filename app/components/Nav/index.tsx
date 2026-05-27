import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Lessons", href: "#lessons" },
  { label: "Contact", href: "#contact" },
];

// ─── Nav ────────────────────────────────────────────────────────────────
export default function Nav({
  smoothScroll,
}: {
  smoothScroll: (id: string) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f8f7f4]/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => smoothScroll("hero")}
          className={`text-xl tracking-wide transition-colors uppercase ${
            scrolled
              ? "text-[#1a1a1a] hover:text-[#3d6b50]"
              : "text-[#f2f0ed] hover:text-[#a3c4a8]"
          }`}
        >
          Nico Dann
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => smoothScroll(item.href.slice(1))}
                className={`transition-colors text-sm tracking-widest uppercase ${
                  scrolled
                    ? "text-[#6b665c] hover:text-[#3d6b50]"
                    : "text-[#f2f0ed]/70 hover:text-[#a3c4a8]"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 ${scrolled ? "text-[#1a1a1a]" : "text-[#f2f0ed]"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className={`md:hidden backdrop-blur-md px-6 py-4 ${
            scrolled
              ? "bg-[#f8f7f4]/95 border-t border-[#e0ddd6]"
              : "bg-[#1a1a1a]/90 border-t border-white/10"
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => {
                smoothScroll(item.href.slice(1));
                setMenuOpen(false);
              }}
              className={`block w-full text-left py-3 transition-colors text-sm tracking-widest uppercase ${
                scrolled
                  ? "text-[#6b665c] hover:text-[#3d6b50]"
                  : "text-[#f2f0ed]/70 hover:text-[#a3c4a8]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
