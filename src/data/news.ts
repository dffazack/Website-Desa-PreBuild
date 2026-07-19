import type { NewsItem } from './types';
import barikanImg from '../assets/images/barikan.webp';
import nightCarnivalImg from '../assets/images/night_carnival.webp';
import grebegSuroImg from '../assets/images/grebeg_suro.webp';
import posyanduImg from '../assets/images/posyandu_kkn.jpg';
import ecopoundImg from '../assets/images/ecopound.png';
import pkkImg from '../assets/images/pkk_kkn.jpg';

export const newsItems: NewsItem[] = [
  {
    id: 1,
    slug: 'barikan-desa-ngenep',
    title: 'Tradisi Barikan: Selamatan Desa Guna Tolak Bala dan Eratkan Kerukunan',
    category: 'Sosial',
    date: '15 Juli 2026',
    excerpt: 'Barikan merupakan tradisi sedekah bumi yang rutin dilaksanakan oleh masyarakat Desa Ngenep sebagai wujud rasa syukur kepada Tuhan Yang Maha Esa.',
    image: barikanImg,
    link: '#',
    author: 'Sekretariat Desa Ngenep',
    imageCaption: 'FOTO: Warga Desa Ngenep duduk bersila menyantap hidangan dalam tradisi Barikan.',
    content: [
      'Barikan merupakan tradisi sedekah bumi yang rutin dilaksanakan oleh masyarakat Desa Ngenep sebagai wujud rasa syukur kepada Tuhan Yang Maha Esa dan menjadi bagian dari rangkaian peringatan Bulan Suro (1 Muharram).',
      'Pelaksanaan Barikan diawali dengan arak-arakan hasil bumi yang diikuti oleh masyarakat dari berbagai dusun, kemudian dilanjutkan dengan doa bersama.'
    ]
  },
  {
    id: 2,
    slug: 'ngenep-night-carnival-meriah',
    title: 'Ngenep Night Carnival Pukau Ribuan Pengunjung dengan Gemerlap Lampu Hias',
    category: 'Sosial',
    date: '10 Juli 2026',
    excerpt: 'Ngenep Night Carnival merupakan salah satu rangkaian perayaan tahunan Desa Ngenep yang melibatkan seluruh RW.',
    image: nightCarnivalImg,
    link: '#',
    author: 'Karang Taruna Desa Ngenep',
    imageCaption: 'FOTO: Arak-arakan ogoh-ogoh berhiaskan lampu LED memeriahkan Ngenep Night Carnival.',
    content: [
      'Ngenep Night Carnival merupakan salah satu rangkaian perayaan tahunan Desa Ngenep yang melibatkan seluruh RW dalam menampilkan berbagai kreasi dan pertunjukan.',
      'Kegiatan ini menjadi ajang untuk menunjukkan kreativitas, kekompakan, dan semangat kebersamaan masyarakat, sekaligus menghadirkan hiburan yang meriah serta menarik perhatian pengunjung dari berbagai daerah.'
    ]
  },
  {
    id: 3,
    slug: 'grebeg-suro-desa-ngenep',
    title: 'Grebeg Suro Desa Ngenep: Kirab Hasil Bumi Berlangsung Khidmat',
    category: 'Sosial',
    date: '5 Juli 2026',
    excerpt: 'Grebeg Suro merupakan salah satu tradisi budaya yang rutin diselenggarakan oleh masyarakat Desa Ngenep.',
    image: grebegSuroImg,
    link: '#',
    author: 'Lembaga Adat Desa Ngenep',
    imageCaption: 'FOTO: Arak-arakan gunungan hasil bumi dikawal oleh barisan pemuda berpakaian lurik adat Jawa.',
    content: [
      'Grebeg Suro merupakan salah satu tradisi budaya yang rutin diselenggarakan oleh masyarakat Desa Ngenep dalam rangka menyambut Tahun Baru Islam 1 Muharram atau 1 Suro.'
    ]
  },
  {
    id: 4,
    slug: 'pelatihan-ai-kader-posyandu',
    title: 'Transformasi Digital melalui Pelatihan AI bagi Kader Posyandu',
    category: 'Kesehatan',
    date: '18 Juli 2026',
    excerpt: 'Mahasiswa KKN menyelenggarakan pelatihan pemanfaatan Artificial Intelligence (AI) seperti Gemini AI dan Canva AI bagi kader Posyandu.',
    image: posyanduImg,
    link: '#',
    author: 'KKN Desa Ngenep',
    imageCaption: 'FOTO: Kader Posyandu Desa Ngenep antusias mengikuti pelatihan pemanfaatan Gemini AI.',
    content: [
      'Transformasi digital kini mulai hadir di Desa Ngenep melalui pelatihan pemanfaatan Artificial Intelligence (AI) yang diselenggarakan oleh mahasiswa Kuliah Kerja Nyata (KKN) bagi ibu-ibu kader Posyandu.',
      'Dalam upaya meningkatkan literasi digital sekaligus mengikuti perkembangan teknologi, pelatihan ini memperkenalkan penggunaan Gemini AI dan Canva AI sebagai alat bantu untuk mempermudah desain media informasi, kampanye kesehatan, serta penyebaran informasi kepada masyarakat secara lebih efektif, menarik, dan kreatif.',
      'Kegiatan diikuti oleh kader Posyandu dari Dusun Ngenep, Dusun Lowoksari, dan Dusun Genitri. Pelatihan berlangsung dengan antusias, terlihat dari tingginya partisipasi para kader dalam mengikuti setiap sesi, berdiskusi, serta mencoba langsung berbagai fitur Gemini AI yang diperkenalkan.'
    ]
  },
  {
    id: 5,
    slug: 'pelatihan-eco-pounding-kreatif',
    title: 'Eksplorasi Kreativitas Anak Melalui Pelatihan Eco Pounding',
    category: 'Pendidikan',
    date: '17 Juli 2026',
    excerpt: 'Pelatihan Eco Pounding yang diadakan oleh mahasiswa KKN mengajak anak-anak Desa Ngenep berkreasi menggunakan pigmen alami.',
    image: ecopoundImg,
    link: '#',
    author: 'KKN Desa Ngenep',
    imageCaption: 'FOTO: Karya seni Eco Pounding buatan anak-anak Desa Ngenep dari bahan dedaunan alami.',
    content: [
      'Eco Pounding merupakan suatu kegiatan kreatif yang memanfaatkan pigmen alami dari daun dan bunga untuk menciptakan motif pada kain.',
      'Melalui kegiatan yang diselenggarakan oleh mahasiswa KKN, anak-anak Desa Ngenep belajar mengenal teknik Eco Pounding sekaligus memahami pentingnya memanfaatkan sumber daya alam secara bijak.',
      'Antusiasme dari peserta selama proses pembuatan karya berlangsung interaktif dan menyenangkan.'
    ]
  },
  {
    id: 6,
    slug: 'pemberdayaan-keluarga-pkk',
    title: 'Pemberdayaan Keluarga Melalui Program PKK Desa Ngenep',
    category: 'Sosial',
    date: '16 Juli 2026',
    excerpt: 'Kegiatan rutinan mingguan Tim Penggerak PKK Desa Ngenep aktif berjalan untuk mempererat silaturahmi warga.',
    image: pkkImg,
    link: '#',
    author: 'TP PKK Desa Ngenep',
    imageCaption: 'FOTO: Pertemuan rutin bulanan ibu-ibu PKK tingkat Desa Ngenep.',
    content: [
      'PKK Desa Ngenep bergerak aktif memberdayakan keluarga lewat agenda rutin mingguan seperti kegiatan dibak dan tahlilan guna mempererat silaturahmi warga.',
      'Melalui koordinasi berkala antar-dusun, kelompok PKK terus berupaya meningkatkan kesejahteraan ekonomi keluarga melalui aneka program ketahanan pangan mandiri serta pelatihan kerajinan kreatif.'
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

