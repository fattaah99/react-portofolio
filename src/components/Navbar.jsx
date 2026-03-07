import { useState, useEffect } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#beranda", label: "Beranda" },
        { href: "#tentang", label: "Tentang" },
        { href: "#tools", label: "Tools" },
        { href: "#proyek", label: "Proyek" },
        { href: "#kontak", label: "Kontak" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-zinc-900/95 backdrop-blur-sm shadow-lg shadow-black/30" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="#beranda" className="text-xl font-bold">
                        Fattaah<span className="text-teal-400">Dev</span>
                    </a>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="text-sm text-zinc-300 hover:text-teal-400 transition-colors duration-200 font-medium"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Hamburger */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 p-1"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
                        <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                    </button>
                </div>

                {/* Mobile Nav */}
                <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-64 pb-4" : "max-h-0"}`}>
                    <ul className="flex flex-col gap-3 pt-2 border-t border-zinc-800">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="block text-sm text-zinc-300 hover:text-teal-400 transition-colors duration-200 py-1"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;