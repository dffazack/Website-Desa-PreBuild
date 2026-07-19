import type { GaleriItem } from './types';
import musyawarahDesa from '../assets/images/musyawarah_desa.png';
import posyanduImg from '../assets/images/posyandu.png';
import perbaikanJalan from '../assets/images/perbaikan_jalan.png';
import heroBg from '../assets/images/hero_bg.png';

export const galeriItems: GaleriItem[] = [
  {
    title: 'Musyawarah Rencana Pembangunan Desa 2025',
    image: musyawarahDesa,
    kategori: 'Kegiatan Desa'
  },
  {
    title: 'Pemeriksaan Kesehatan Anak di Posyandu Melati',
    image: posyanduImg,
    kategori: 'Kesehatan'
  },
  {
    title: 'Pekerjaan Pengaspalan Jalan Dusun Timur',
    image: perbaikanJalan,
    kategori: 'Infrastruktur'
  },
  {
    title: 'Keindahan Persawahan Hijau Desa Ngenep',
    image: heroBg,
    kategori: 'Lingkungan'
  },
  {
    title: 'Pelaksanaan Musyawarah Penetapan APBDes 2025',
    image: musyawarahDesa,
    kategori: 'Pemerintahan'
  },
  {
    title: 'Pemeriksaan Balita Gratis Rutin Bulanan',
    image: posyanduImg,
    kategori: 'Kesehatan'
  }
];
