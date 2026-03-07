import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tools from "./components/Tools";
import Proyek from "./components/Proyek";
import Kontak from "./components/Kontak";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 700 });

    // Custom cursor
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");

    const moveCursor = (e) => {
      if (dot) { dot.style.left = e.clientX + "px"; dot.style.top = e.clientY + "px"; }
      if (ring) { ring.style.left = e.clientX + "px"; ring.style.top = e.clientY + "px"; }
    };

    const growCursor = () => { if (dot) dot.style.transform = "translate(-50%,-50%) scale(2.5)"; };
    const shrinkCursor = () => { if (dot) dot.style.transform = "translate(-50%,-50%) scale(1)"; };

    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a,button").forEach((el) => {
      el.addEventListener("mouseenter", growCursor);
      el.addEventListener("mouseleave", shrinkCursor);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Custom cursor elements */}
      <div id="cursor-dot" />
      <div id="cursor-ring" />

      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tools />
        <Proyek />
        <Kontak />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
