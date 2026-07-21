import type { GaleriItem } from './types';
import posyanduKesehatanAnak from '../assets/images/posyandu_kesehatan_anak.jpg';
import perkumpulanIbuPkk from '../assets/images/perkumpulan_ibu_pkk.jpg';
import persawahanNgenep from '../assets/images/hero_bg.png';

export const galeriItems: GaleriItem[] = [
  {
    title: 'Pemeriksaan kesehatan anak di Posyandu',
    image: posyanduKesehatanAnak,
    kategori: 'Kesehatan'
  },
  {
    title: 'Perkumpulan ibu-ibu PKK',
    image: perkumpulanIbuPkk,
    kategori: 'Kegiatan Masyarakat'
  },
  {
    title: 'Keindahan Persawahan Hijau Desa Ngenep',
    image: persawahanNgenep,
    kategori: 'Lingkungan'
  }
];
