import { useState } from "react";
import { listProyek } from "../data.js";

const Proyek = () => {
    // Ambil semua kategori unik dari data, tambahkan "Semua" di depan
    const allTags = ["Semua", ...new Set(listProyek.map((p) => p.kategori).filter(Boolean))];

    const [active, setActive] = useState("Semua");

    const filtered = listProyek.filter(
        (p) => active === "Semua" || p.kategori === active
    );

    return (
        <section id="proyek" className="py-20">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-10" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        Proyek <span className="gradient-text">Saya</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-indigo-400 mx-auto rounded-full" />
                    <p className="text-zinc-400 mt-4 max-w-md mx-auto text-sm">
                        Proyek yang pernah saya kerjakan.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-10" data-aos="fade-up" data-aos-delay="100">
                    {allTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setActive(tag)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${active === tag
                                ? "bg-teal-500 border-teal-500 text-white shadow-lg shadow-teal-500/30"
                                : "border-zinc-700 text-zinc-400 hover:border-teal-500/60 hover:text-teal-400"
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className={`flex ${filtered.length === 1 ? "justify-center" : "flex-wrap"} gap-6`}>
                    {filtered.map((proyek) => (
                        <div key={proyek.id} className={filtered.length === 1 ? "w-full max-w-sm" : "w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]"}>
                            <TiltCard proyek={proyek} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TiltCard = ({ proyek }) => {
    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;
        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(4px)`;
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = "perspective(800px) rotateX(0) rotateY(0) translateZ(0)";
    };

    return (
        <div
            className="glass rounded-xl overflow-hidden border border-zinc-700/50 hover:border-teal-500/50 group transition-all duration-300"
            style={{ transition: "transform 0.15s ease, box-shadow 0.3s ease" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            data-aos="fade-up"
            data-aos-delay={proyek.dad}
            data-aos-duration="600"
        >
            {/* Image */}
            <div className="relative overflow-hidden h-48">
                <img
                    src={proyek.gambar}
                    alt={proyek.nama}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    {proyek.link && (
                        <a
                            href={proyek.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-glow bg-teal-500 text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-teal-400 transition-colors duration-200"
                        >
                            Lihat di GitHub 🚀
                        </a>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-2">{proyek.nama}</h3>
                <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{proyek.desk}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                    {proyek.tools.map((tool, idx) => (
                        <span
                            key={idx}
                            className="text-xs bg-teal-500/10 text-teal-400 border border-teal-500/30 px-2 py-1 rounded-md"
                        >
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Proyek;
