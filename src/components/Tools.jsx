import { listTools } from "../data.js";

const Tools = () => {
    return (
        <section id="tools" className="py-20 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-zinc-800/20 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Title */}
                <div className="text-center mb-14" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        Tools <span className="gradient-text">Saya</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-indigo-400 mx-auto rounded-full" />
                    <p className="text-zinc-400 mt-4 max-w-md mx-auto text-sm">
                        Tools dan teknologi yang saya gunakan.
                    </p>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {listTools.map((tool) => (
                        <div
                            key={tool.id}
                            className="tooltip glass rounded-xl p-5 flex flex-col items-center gap-3 hover:border-teal-500/60 hover:-translate-y-2 transition-all duration-300 group"
                            data-aos="fade-up"
                            data-aos-delay={tool.dad}
                            data-aos-duration="600"
                        >
                            <span className="tooltip-text">{tool.nama} — {tool.ket}</span>
                            <div className="w-14 h-14 flex items-center justify-center">
                                <img
                                    src={tool.gambar}
                                    alt={tool.nama}
                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-white text-xs font-semibold leading-tight">{tool.nama}</p>
                                <p className="text-teal-400 text-xs mt-1">{tool.ket}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tools;
