"use client";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Lessons from "./components/Lessons";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function smoothScroll(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  return (
    <main className="bg-[#f8f7f4]">
      <Nav smoothScroll={smoothScroll} />
      <Hero smoothScroll={smoothScroll} />
      <About />
      <Lessons smoothScroll={smoothScroll} />
      <Contact />
      <Footer />
    </main>
  );
}
