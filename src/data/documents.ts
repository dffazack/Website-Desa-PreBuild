import type { 
  APBDesSummaryItem, 
  PendapatanKomposisiItem, 
  AlokasiBelanjaItem, 
  RincianAnggaranItem, 
  DokumenItem 
} from './types';

export const apbdesSummary: APBDesSummaryItem[] = [
  {
    title: 'Total Pendapatan',
    value: 'Rp 1.600.000.000',
    subtitle: 'APBDes TA 2025',
    color: 'border-navy'
  },
  {
    title: 'Total Belanja',
    value: 'Rp 1.600.000.000',
    subtitle: 'APBDes TA 2025',
    color: 'border-terracotta'
  },
  {
    title: 'Realisasi Pendapatan',
    value: '68,4%',
    subtitle: 'Per Semester I 2025',
    progress: 'w-[68.4%]',
    color: 'border-emerald-700'
  }
];

export const pendapatanKomposisi: PendapatanKomposisiItem[] = [
  { label: 'Dana Desa (APBN)', percentage: 60, valStr: 'Rp 960.000.000', color: 'bg-navy' },
  { label: 'Alokasi Dana Desa (ADD)', percentage: 25, valStr: 'Rp 400.000.000', color: 'bg-navy-light' },
  { label: 'Pendapatan Asli Desa (PAD)', percentage: 10, valStr: 'Rp 160.000.000', color: 'bg-amber-600' },
  { label: 'Bantuan Prov/Kab', percentage: 5, valStr: 'Rp 80.000.000', color: 'bg-terracotta' }
];

export const alokasiBelanja: AlokasiBelanjaItem[] = [
  { code: 'Bdg 1', label: 'Pemerintahan', val: 380, pct: 'w-[23.7%]' },
  { code: 'Bdg 2', label: 'Pembangunan', val: 680, pct: 'w-[42.5%]' },
  { code: 'Bdg 3', label: 'Pembinaan', val: 150, pct: 'w-[9.4%]' },
  { code: 'Bdg 4', label: 'Pemberdayaan', val: 290, pct: 'w-[18.1%]' },
  { code: 'Bdg 5', label: 'Kebencanaan', val: 100, pct: 'w-[6.3%]' }
];

export const rincianAnggaran: RincianAnggaranItem[] = [
  {
    bidang: 'Bidang 1',
    uraian: 'Penyelenggaraan Pemerintahan Desa',
    pagu: 'Rp 380.000.000',
    realisasi: 'Rp 258.400.000',
    persentase: '68%',
    progressWidth: 'w-[68%]'
  },
  {
    bidang: 'Bidang 2',
    uraian: 'Pembangunan Desa',
    pagu: 'Rp 680.000.000',
    realisasi: 'Rp 544.000.000',
    persentase: '80%',
    progressWidth: 'w-[80%]'
  },
  {
    bidang: 'Bidang 3',
    uraian: 'Pembinaan Kemasyarakatan',
    pagu: 'Rp 150.000.000',
    realisasi: 'Rp 97.500.000',
    persentase: '65%',
    progressWidth: 'w-[65%]'
  },
  {
    bidang: 'Bidang 4',
    uraian: 'Pemberdayaan Masyarakat',
    pagu: 'Rp 290.000.000',
    realisasi: 'Rp 174.000.000',
    persentase: '60%',
    progressWidth: 'w-[60%]'
  },
  {
    bidang: 'Bidang 5',
    uraian: 'Penanggulangan Bencana & Kedaruratan',
    pagu: 'Rp 100.000.000',
    realisasi: 'Rp 62.000.000',
    persentase: '62%',
    progressWidth: 'w-[62%]'
  }
];

export const dokumenList: DokumenItem[] = [
  {
    title: 'APBDes Tahun Anggaran 2025',
    info: 'PDF · 1.2 MB · Diterbitkan Jan 2025',
    link: '#'
  },
  {
    title: 'Laporan Realisasi APBDes Semester I 2025',
    info: 'PDF · 840 KB · Diterbitkan Jul 2025',
    link: '#'
  },
  {
    title: 'Rencana Kerja Pemerintah Desa (RKPDes) 2025',
    info: 'PDF · 2.1 MB · Diterbitkan Des 2024',
    link: '#'
  },
  {
    title: 'Laporan Keterangan Penyelenggaraan Pemerintah Desa 2024',
    info: 'PDF · 3.4 MB · Diterbitkan Jan 2025',
    link: '#'
  },
  {
    title: 'Profil Desa Ngenep 2026',
    info: 'PDF · 5.6 MB · Diterbitkan Feb 2026',
    link: '#'
  }
];
