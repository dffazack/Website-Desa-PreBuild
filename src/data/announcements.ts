import type { AnnouncementItem } from './types';
import posterMusrenbang from '../assets/images/poster_musrenbang.png';
import posterBlt from '../assets/images/poster_blt.png';

export const announcements: AnnouncementItem[] = [
  {
    id: 1,
    title: 'Pengumuman Jadwal Musyawarah Perencanaan Pembangunan Desa (Musrenbangdes) Tahun Anggaran 2025',
    date: '10 Juli 2025',
    image: posterMusrenbang
  },
  {
    id: 2,
    title: 'Jadwal Penyaluran Bantuan Langsung Tunai (BLT) Dana Desa Tahap III Tahun Anggaran 2025',
    date: '8 Juli 2025',
    image: posterBlt
  }
];
