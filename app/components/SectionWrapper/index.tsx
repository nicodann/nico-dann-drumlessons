import { useEffect, useRef, useState } from "react";

// ─── Section wrapper with scroll-reveal ─────────────────────────────────
function Section({
  id,
  children,
  className = "",
  alt = false,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
  alt?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`py-24 sm:py-32 px-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${alt ? "bg-[#edeae3]" : "bg-[#f8f7f4]"} ${className}`}
    >
      <div className="max-w-4xl mx-auto">{children}</div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#3d6b50] tracking-[0.3em] uppercase text-xs font-semibold mb-3">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-3xl sm:text-4xl mb-10 text-[#1a1a1a]">
      {children}
    </h2>
  );
}

export { Section, SectionHeading, SectionLabel };
