import { MouseEventHandler, useState } from "react";
import { Section, SectionHeading, SectionLabel } from "../SectionWrapper";

// ─── Contact ────────────────────────────────────────────────────────────
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section id="contact">
      <SectionLabel>Contact</SectionLabel>
      <SectionHeading>Let&rsquo;s Get Started</SectionHeading>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-5 text-[#6b665c] leading-relaxed">
          <p>
            Interested in lessons? Have a question? Drop me a line and
            I&rsquo;ll get back to you within 24 hours. I offer a{" "}
            <strong className="text-[#1a1a1a]">free introductory lesson</strong>{" "}
            so we can meet, talk about your goals, and make sure it&rsquo;s a
            good fit.
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <span className="text-[#3d6b50]">📍</span>
              <span>Greenwood &amp; Danforth, East Toronto</span>
            </div>
          </div>
        </div>

        <div>
          {status === "sent" ? (
            <div className="bg-[#e8f0ea] border border-[#3d6b50]/20 rounded-2xl p-8 text-center">
              <p className="text-[#3d6b50] font-semibold text-lg mb-1">
                Thanks!
              </p>
              <p className="text-[#5a8a68] text-sm">
                I&rsquo;ll be in touch soon.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <input
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-white border border-[#e0ddd6] rounded-xl px-4 py-3 text-[#1a1a1a] placeholder:text-[#b5b0a6] focus:outline-none focus:ring-2 focus:ring-[#3d6b50]/30 focus:border-[#3d6b50] transition-all text-sm"
              />
              <input
                name="email"
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-white border border-[#e0ddd6] rounded-xl px-4 py-3 text-[#1a1a1a] placeholder:text-[#b5b0a6] focus:outline-none focus:ring-2 focus:ring-[#3d6b50]/30 focus:border-[#3d6b50] transition-all text-sm"
              />
              <textarea
                name="message"
                placeholder="Tell me a bit about yourself and what you're looking for..."
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-white border border-[#e0ddd6] rounded-xl px-4 py-3 text-[#1a1a1a] placeholder:text-[#b5b0a6] focus:outline-none focus:ring-2 focus:ring-[#3d6b50]/30 focus:border-[#3d6b50] transition-all text-sm resize-none"
              />
              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === "sending"}
                className="w-full bg-[#3d6b50] hover:bg-[#4a7d5e] disabled:bg-[#3d6b50]/50 text-white font-semibold py-3 rounded-xl text-sm tracking-wider uppercase transition-colors"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "error" && (
                <p className="text-red-600 text-sm text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
