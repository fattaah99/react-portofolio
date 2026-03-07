import Image from "../data.js";
import { useState, useEffect } from "react";

const roles = ["Web Developer", "UI Designer", "React Enthusiast", "Freelancer"];

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [deleting, setDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const current = roles[roleIndex];
        let timeout;

        if (!deleting && charIndex <= current.length) {
            timeout = setTimeout(() => {
                setDisplayed(current.slice(0, charIndex));
                setCharIndex((c) => c + 1);
            }, 80);
        } else if (!deleting && charIndex > current.length) {
            timeout = setTimeout(() => setDeleting(true), 1500);
        } else if (deleting && charIndex >= 0) {
            timeout = setTimeout(() => {
                setDisplayed(current.slice(0, charIndex));
                setCharIndex((c) => c - 1);
            }, 45);
        } else {
            setDeleting(false);
            setRoleIndex((i) => (i + 1) % roles.length);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, deleting, roleIndex]);

    return (
        <section id="beranda" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
            {/* Background gradient blobs */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">

                    {/* ── Text ── */}
                    <div className="flex-1 text-center md:text-left" data-aos="fade-right" data-aos-duration="1000">
                        <p className="text-teal-400 font-medium mb-2 tracking-widest uppercase text-sm">
                            Halo, Saya 👋
                        </p>
                        <h1 className="text-4xl md:text-6xl font-bold mb-3 leading-tight">
                            Muhammad Fattaah <br />
                            <span className="gradient-text">Al Rasyidin</span>
                        </h1>

                        {/* Typing effect */}
                        <p className="text-zinc-300 text-xl md:text-2xl font-semibold mb-4 h-8">
                            <span className="text-teal-400 typing-cursor">{displayed}</span>
                        </p>

                        <p className="text-zinc-400 text-base md:text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                            Berfokus pada pembuatan website yang menarik, responsif, dan berkualitas tinggi
                            menggunakan teknologi web modern.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
                            <a
                                href="#kontak"
                                className="btn-glow bg-teal-500 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                            >
                                Hubungi Saya
                            </a>
                            <a
                                href="#proyek"
                                className="border border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                            >
                                Lihat Proyek
                            </a>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4 justify-center md:justify-start">
                            {[
                                {
                                    href: "https://github.com/fattaah99", label: "GitHub",
                                    icon: <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />,
                                },
                                {
                                    href: "https://www.linkedin.com/in/muhammad-fattaah-al-rasyidin/", label: "LinkedIn",
                                    icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />,
                                },
                                {
                                    href: "#", label: "YouTube",
                                    icon: <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />,
                                },
                            ].map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-zinc-700 hover:border-teal-400 hover:text-teal-400 text-zinc-400 flex items-center justify-center transition-all duration-300 hover:bg-teal-400/10"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        {s.icon}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ── Image ── */}
                    <div className="flex-1 flex justify-center" data-aos="fade-left" data-aos-duration="1000">
                        <div className="relative">
                            {/* Floating badges */}
                            <div className="absolute -top-4 -left-6 glass rounded-xl px-3 py-2 flex items-center gap-2 animate-bounce z-10 shadow-lg">
                                <span className="text-lg">💻</span>
                                <span className="text-xs text-white font-semibold">Web Dev</span>
                            </div>
                            <div className="absolute -bottom-4 -right-6 glass rounded-xl px-3 py-2 flex items-center gap-2 z-10 shadow-lg" style={{ animation: 'bounce 2s infinite 0.5s' }}>
                                <span className="text-lg">🎨</span>
                                <span className="text-xs text-white font-semibold">UI Design</span>
                            </div>
                            <div className="absolute top-1/2 -right-10 glass rounded-xl px-3 py-2 flex items-center gap-2 z-10 shadow-lg" style={{ animation: 'bounce 2s infinite 1s' }}>
                                <span className="text-lg">⚡</span>
                                <span className="text-xs text-white font-semibold">React</span>
                            </div>

                            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal-500 shadow-2xl shadow-teal-500/30">
                                <img src={Image.HeroImage} alt="Hero" className="w-full h-full object-cover" />
                            </div>

                            {/* Decorative rings */}
                            <div className="absolute inset-0 rounded-full border-2 border-teal-400/20 scale-110 animate-pulse" />
                            <div className="absolute inset-0 rounded-full border border-indigo-400/10 scale-125" />
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-500">
                    <span className="text-xs tracking-widest uppercase">Scroll</span>
                    <div className="w-5 h-8 border-2 border-zinc-600 rounded-full flex justify-center pt-1">
                        <div className="w-1 h-2 bg-teal-400 rounded-full animate-bounce" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
