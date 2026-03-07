const About = () => {
    return (
        <section id="tentang" className="py-20">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-14" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        Tentang <span className="text-teal-400">Saya</span>
                    </h2>
                    <div className="w-16 h-1 bg-teal-400 mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col md:flex-row items-start gap-12">
                    {/* Bio */}
                    <div className="flex-1" data-aos="fade-right" data-aos-duration="800">
                        <p className="text-zinc-300 leading-relaxed mb-4">
                            Halo! Saya adalah seorang <span className="text-teal-400 font-semibold">Web Developer</span> yang
                            passionate dalam membangun pengalaman digital yang luar biasa. Saya
                            menikmati menciptakan hal-hal yang hidup di internet.
                        </p>
                        <p className="text-zinc-300 leading-relaxed mb-6">
                            Dengan pengalaman dalam berbagai teknologi web modern, saya selalu
                            berusaha untuk belajar dan berkembang mengikuti perkembangan
                            teknologi yang terus berubah.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
                        >
                            Download CV
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </a>
                    </div>

                    {/* Info Cards */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-left" data-aos-duration="800">
                        {[
                            { label: "Nama", value: "Muhammad Fattaah Al Rasyidin" },
                            { label: "Email", value: "fattaah99@gmail.com" },
                            { label: "Domisili", value: "Bantul" },
                            { label: "Status", value: "Freelance / Open to Work" },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-zinc-800 rounded-xl p-4 border border-zinc-700 hover:border-teal-500/50 transition-colors duration-200"
                            >
                                <p className="text-teal-400 text-sm font-medium mb-1">{item.label}</p>
                                <p className="text-white font-semibold text-sm">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
