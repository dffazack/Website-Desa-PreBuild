import type { NewsItem } from './types';
import barikanImg from '../assets/images/barikan.webp';
import nightCarnivalImg from '../assets/images/night_carnival.webp';
import grebegSuroImg from '../assets/images/grebeg_suro.webp';

export const newsItems: NewsItem[] = [
  {
    id: 1,
    slug: 'barikan-desa-ngenep',
    title: 'Tradisi Barikan: Selamatan Desa Guna Tolak Bala dan Eratkan Kerukunan',
    category: 'Sosial',
    date: '15 Juli 2026',
    excerpt: 'Warga Desa Ngenep berkumpul menggelar tradisi Barikan dengan membawa ancak di persimpangan jalan sebagai wujud rasa syukur dan kebersamaan warga.',
    image: barikanImg,
    link: '#',
    author: 'Sekretariat Desa Ngenep',
    imageCaption: 'FOTO: Warga Desa Ngenep duduk bersila menyantap hidangan dalam tradisi Barikan.',
    content: [
      'ngenep.desa.id - Semangat kebersamaan dan tradisi gotong royong terus dipelihara erat oleh masyarakat Desa Ngenep, Kecamatan Karangploso. Ratusan warga dari berbagai penjuru dusun berkumpul di persimpangan jalan desa untuk menyelenggarakan tradisi selamatan Barikan.',
      'Dalam tradisi Barikan ini, setiap keluarga membawa wadah makanan tradisional yang disebut dengan "ancak" berisi nasi tumpeng mini, lauk pauk khas pedesaan, serta buah-buahan yang diletakkan di atas daun pisang. Acara dimulai dengan pembacaan doa tolak bala dan keselamatan bagi seluruh warga desa oleh tokoh adat setempat.',
      'Kepala Desa Ngenep menyampaikan bahwa Barikan bukan hanya sekadar acara adat tahunan, tetapi merupakan wadah yang sangat efektif untuk mempererat tali silaturahmi, menjaga kerukunan, serta merawat persatuan antarwarga lintas dusun.',
      'Setelah doa bersama selesai, seluruh warga menyantap hidangan secara bersama-sama dalam suasana hangat dan kekeluargaan. Tradisi turun-temurun ini diharapkan dapat terus diwariskan kepada generasi muda demi kelestarian warisan budaya lokal.'
    ]
  },
  {
    id: 2,
    slug: 'ngenep-night-carnival-meriah',
    title: 'Ngenep Night Carnival Pukau Ribuan Pengunjung dengan Gemerlap Lampu Hias',
    category: 'Sosial',
    date: '10 Juli 2026',
    excerpt: 'Karnaval malam hari yang megah digelar di sepanjang jalan utama Desa Ngenep menampilkan pertunjukan lampu hias kreatif dan seni pertunjukan warga.',
    image: nightCarnivalImg,
    link: '#',
    author: 'Karang Taruna Desa Ngenep',
    imageCaption: 'FOTO: Arak-arakan ogoh-ogoh berhiaskan lampu LED memeriahkan Ngenep Night Carnival.',
    content: [
      'ngenep.desa.id - Ribuan pengunjung memadati rute pelaksanaan Ngenep Night Carnival yang digelar sangat meriah di sepanjang jalan utama desa. Karnaval malam hari ini diikuti oleh perwakilan RT/RW dari delapan dusun yang menyajikan berbagai kreativitas lampu hias.',
      'Setiap dusun memamerkan parade maskot raksasa (ogoh-ogoh), replika bangunan bersejarah, hingga kostum bercahaya yang dirancang kreatif oleh pemuda Karang Taruna setempat. Suasana malam kian spektakuler dengan iringan musik tradisional kontemporer dan tata lampu yang memukau.',
      'Pemerintah Desa Ngenep sangat mengapresiasi tingginya partisipasi aktif warga dalam menyukseskan acara ini. Selain sebagai sarana hiburan rakyat yang premium, karnaval ini terbukti mampu menggerakkan roda perekonomian lokal dengan banyaknya pedagang UMKM yang mendapat limpahan omzet.',
      'Narasumber dari panitia penyelenggara menegaskan bahwa Ngenep Night Carnival akan terus dikembangkan sebagai agenda pariwisata tahunan resmi guna mempromosikan potensi seni dan budaya Desa Ngenep ke tingkat kabupaten.'
    ]
  },
  {
    id: 3,
    slug: 'grebeg-suro-desa-ngenep',
    title: 'Grebeg Suro Desa Ngenep: Kirab Hasil Bumi Berlangsung Khidmat',
    category: 'Sosial',
    date: '5 Juli 2026',
    excerpt: 'Menyambut tahun baru Islam 1 Muharram, warga Desa Ngenep menggelar kirab gunungan hasil pertanian melimpah sebagai bentuk syukur di Sumber Nyolo.',
    image: grebegSuroImg,
    link: '#',
    author: 'Lembaga Adat Desa Ngenep',
    imageCaption: 'FOTO: Arak-arakan gunungan hasil bumi dikawal oleh barisan pemuda berpakaian lurik adat Jawa.',
    content: [
      'ngenep.desa.id - Perayaan tahun baru Islam 1 Suro dirayakan dengan penuh sukacita oleh warga Desa Ngenep melalui tradisi Grebeg Suro. Acara diisi dengan arak-arakan gunungan hasil bumi berukuran raksasa yang dihias dengan aneka sayuran, padi, dan buah-buahan lokal.',
      'Kirab dimulai dari Balai Desa Ngenep dan berakhir di kawasan bersejarah Sumber Nyolo (Karangploso View, RW 02). Setiap dusun menyajikan gunungan hasil bumi hasil kerja sama kelompok tani setempat sebagai simbol kemakmuran dan kesuburan tanah desa.',
      'Sesampainya di Sumber Nyolo, sesepuh desa memimpin jalannya doa bersama sebagai wujud rasa syukur atas rezeki hasil bumi yang melimpah dan memohon perlindungan dari segala mara bahaya. Setelah doa usai, gunungan tersebut langsung diperebutkan oleh warga dengan penuh antusias.',
      'Ketua Lembaga Adat Desa Ngenep menyatakan bahwa Grebeg Suro merupakan bentuk pelestarian warisan budaya peninggalan Kerajaan Singasari yang sarat nilai spiritual dan gotong royong agar alam Desa Ngenep tetap lestari dan subur.'
    ]
  }
];

export const newsCategories: string[] = [
  'SEMUA',
  'PEMERINTAHAN',
  'KESEHATAN',
  'INFRASTRUKTUR',
  'SOSIAL',
  'PERTANIAN',
  'PENDIDIKAN'
];
