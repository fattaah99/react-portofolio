import HeroImage from "/assets/foto.jpg";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/php.svg";
import Tools13 from "/assets/tools/laravel.svg";
import Tools14 from "/assets/tools/postgresql.svg";
import Tools15 from "/assets/tools/mysql.svg";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "PHP",
    ket: "Language",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Laravel",
    ket: "Framework",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "PostgreSQL",
    ket: "Database",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "MySQL",
    ket: "Database",
    dad: "1500",
  },
];

import Proyek1 from "/assets/proyek/e-commerce_flutter.png";
import Proyek2 from "/assets/proyek/333shots_so.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "E-Commerce Flutter",
    desk: "Aplikasi e-commerce mobile yang dibangun menggunakan Flutter dengan fitur autentikasi, katalog produk, dan manajemen pesanan.",
    tools: ["Flutter", "Dart"],
    kategori: "Mobile App",
    link: "https://github.com/fattaah99/e-commerce-application",
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "REST API E-Commerce",
    desk: "Backend REST API untuk platform e-commerce, mencakup manajemen pengguna, produk, dan operasi CRUD.",
    tools: [".NET", "C#"],
    kategori: "Backend",
    link: "https://github.com/fattaah99/.Net-api-E-commerce",
    dad: "300",
  },
];
