import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// ── EmailJS config ──────────────────────────────────────────────────────────
// 1. Daftar di https://www.emailjs.com  (gratis 200 email/bulan)
// 2. Buat Email Service  → salin SERVICE_ID
// 3. Buat Email Template → salin TEMPLATE_ID
//    Variabel template yang dipakai: {{from_name}}, {{from_email}}, {{message}}
// 4. Buka Account → API Keys → salin PUBLIC_KEY
// Lalu isi ketiga nilai di bawah ini:
const SERVICE_ID = "service_2vnniwa";   // ganti ini
const TEMPLATE_ID = "template_murq6dr"; // ganti ini
const PUBLIC_KEY = "mKkeXJ_UqUto2Z6JM";  // ganti ini
// ────────────────────────────────────────────────────────────────────────────

const contactItems = [
    {
        icon: "📧",
        label: "Email",
        value: "fattaah99@gmail.com",
        href: "mailto:fattaah99@gmail.com",
    },
    {
        icon: "📍",
        label: "Domisili",
        value: "Bantul, Indonesia",
        href: "#",
    },
    {
        icon: "💼",
        label: "Status",
        value: "Freelance / Open to Work",
        href: "#",
    },
];

const Kontak = () => {
    const formRef = useRef(null);
    const [status, setStatus] = useState("idle"); // idle | sending | success | error
    const [form, setForm] = useState({ nama: "", email: "", pesan: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (status === "sending") return;

        setStatus("sending");

        emailjs
            .send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    name: form.nama,
                    from_email: form.email,
                    message: form.pesan,
                },
                PUBLIC_KEY
            )
            .then(() => {
                setStatus("success");
                setForm({ nama: "", email: "", pesan: "" });
                setTimeout(() => setStatus("idle"), 5000);
            })
            .catch((err) => {
                console.error("EmailJS error:", err);
                setStatus("error");
                setTimeout(() => setStatus("idle"), 5000);
            });
    };

    return (
        <section id="kontak" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-zinc-800/20 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Title */}
                <div className="text-center mb-14" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        Kontak <span className="gradient-text">Saya</span>
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-indigo-400 mx-auto rounded-full" />
                    <p className="text-zinc-400 mt-4 max-w-md mx-auto text-sm">
                        Punya proyek atau pertanyaan? Jangan ragu untuk menghubungi saya!
                    </p>
                </div>

                <div className="grid md:grid-cols-5 gap-8 max-w-4xl mx-auto">
                    {/* Contact Info — left */}
                    <div className="md:col-span-2 flex flex-col gap-4" data-aos="fade-right" data-aos-duration="800">
                        <h3 className="text-white font-bold text-xl mb-2">Mari Terhubung! 🤝</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                            Saya selalu terbuka untuk diskusi proyek baru, kolaborasi kreatif atau kesempatan menjadi bagian dari visi kamu.
                        </p>

                        {contactItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="glass rounded-xl p-4 flex items-center gap-3 hover:border-teal-500/50 transition-all duration-300 group"
                            >
                                <span className="text-2xl">{item.icon}</span>
                                <div>
                                    <p className="text-teal-400 text-xs font-medium">{item.label}</p>
                                    <p className="text-white text-sm font-semibold group-hover:text-teal-300 transition-colors">{item.value}</p>
                                </div>
                            </a>
                        ))}

                        {/* Social */}
                        <div className="flex gap-3 mt-2">
                            {[
                                { label: "GitHub", href: "https://github.com/fattaah99" },
                                { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-fattaah-al-rasyidin/" },
                                { label: "YouTube", href: "#" },
                            ].map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 glass rounded-lg py-2 text-xs text-zinc-400 hover:text-teal-400 text-center hover:border-teal-500/50 transition-all duration-200"
                                >
                                    {s.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Form — right */}
                    <div className="md:col-span-3" data-aos="fade-left" data-aos-duration="800">
                        <form ref={formRef} onSubmit={handleSubmit} className="glass rounded-2xl p-6 flex flex-col gap-4">
                            {/* Nama */}
                            <div>
                                <label className="block text-sm font-medium text-zinc-300 mb-1.5">Nama</label>
                                <input
                                    type="text"
                                    name="nama"
                                    value={form.nama}
                                    onChange={handleChange}
                                    required
                                    placeholder="Masukkan nama kamu"
                                    className="w-full bg-zinc-900/60 border border-zinc-700 focus:border-teal-500 text-white placeholder-zinc-500 rounded-lg px-4 py-3 outline-none transition-colors duration-200 text-sm"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-zinc-300 mb-1.5">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Masukkan email kamu"
                                    className="w-full bg-zinc-900/60 border border-zinc-700 focus:border-teal-500 text-white placeholder-zinc-500 rounded-lg px-4 py-3 outline-none transition-colors duration-200 text-sm"
                                />
                            </div>

                            {/* Pesan */}
                            <div>
                                <label className="block text-sm font-medium text-zinc-300 mb-1.5">Pesan</label>
                                <textarea
                                    name="pesan"
                                    value={form.pesan}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    placeholder="Tulis pesanmu di sini..."
                                    className="w-full bg-zinc-900/60 border border-zinc-700 focus:border-teal-500 text-white placeholder-zinc-500 rounded-lg px-4 py-3 outline-none transition-colors duration-200 text-sm resize-none"
                                />
                            </div>

                            {/* Feedback message */}
                            {status === "success" && (
                                <div className="flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 text-teal-400 rounded-lg px-4 py-3 text-sm">
                                    <span>✅</span> Pesan berhasil dikirim! Saya akan segera membalas.
                                </div>
                            )}
                            {status === "error" && (
                                <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg px-4 py-3 text-sm">
                                    <span>❌</span> Gagal mengirim pesan. Silakan coba lagi atau hubungi via email langsung.
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="btn-glow bg-teal-500 hover:bg-teal-400 disabled:bg-teal-700 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 w-full mt-1 flex items-center justify-center gap-2"
                            >
                                {status === "sending" ? (
                                    <>
                                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                        </svg>
                                        Mengirim...
                                    </>
                                ) : (
                                    "Kirim Pesan ✉️"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Kontak;
