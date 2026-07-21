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
    value: 'Rp 2.967.161.000,00',
    subtitle: 'APBDes Desa Ngenep TA 2025',
    color: 'border-navy'
  },
  {
    title: 'Total Belanja',
    value: 'Rp 2.846.953.232,00',
    subtitle: 'APBDes Desa Ngenep TA 2025',
    color: 'border-terracotta'
  },
  {
    title: 'Pembiayaan Netto',
    value: 'Rp (120.207.768,00)',
    subtitle: 'Penerimaan: Rp 199.792.232 | Pengeluaran: Rp 320.000.000',
    color: 'border-amber-600'
  }
];

export const pendapatanKomposisi: PendapatanKomposisiItem[] = [
  { label: 'Dana Desa [DD]', percentage: 53.8, valStr: 'Rp 1.597.305.000,00', color: 'bg-navy' },
  { label: 'Alokasi Dana Desa [ADD]', percentage: 34.8, valStr: 'Rp 1.033.998.000,00', color: 'bg-emerald-600' },
  { label: 'Pendapatan Asli Desa [PADesa]', percentage: 6.4, valStr: 'Rp 188.508.000,00', color: 'bg-amber-600' },
  { label: 'Bagi Hasil Pajak [PBH]', percentage: 4.7, valStr: 'Rp 140.150.000,00', color: 'bg-terracotta' },
  { label: 'Pendapatan Lainnya [DLL]', percentage: 0.2, valStr: 'Rp 7.200.000,00', color: 'bg-slate-500' }
];

export const alokasiBelanja: AlokasiBelanjaItem[] = [
  { code: 'Bdg 1', label: 'Pemerintah Desa', valStr: 'Rp 1.413.142.616,-', pct: 'w-[49.6%]', pctValue: 49.6 },
  { code: 'Bdg 2', label: 'Pembangunan Desa', valStr: 'Rp 1.005.027.716,-', pct: 'w-[35%]', pctValue: 35.0 },
  { code: 'Bdg 3', label: 'Pembinaan Kemasyarakatan', valStr: 'Rp 154.472.000,-', pct: 'w-[5.4%]', pctValue: 5.4 },
  { code: 'Bdg 4', label: 'Pemberdayaan Masyarakat', valStr: 'Rp 192.810.900,-', pct: 'w-[6.7%]', pctValue: 6.7 },
  { code: 'Bdg 5', label: 'Penanggulangan Bencana & Darurat', valStr: 'Rp 81.500.000,-', pct: 'w-[2.8%]', pctValue: 2.8 }
];

export const rincianAnggaran: RincianAnggaranItem[] = [
  {
    bidang: 'Bidang 1',
    uraian: 'Bidang Pemerintah Desa',
    pagu: 'Rp 1.413.142.616,-',
    persentase: '49,6%',
    progressWidth: 'w-[49.6%]',
    subBidang: [
      { nama: 'Penyelenggaraan Belanja Siltap, Tunjangan dan Operasional Pemerintah Desa', nominal: 'Rp 1.275.177.616,-' },
      { nama: 'Penyediaan Sarpras Pemdes', nominal: 'Rp 20.246.000,-' },
      { nama: 'Pengelolaan Administrasi Kependudukan', nominal: 'Rp 36.415.500,-' },
      { nama: 'Penyelenggaraan Tata Praja Pemerintahan, Pencatatan Sipil, Statistik dan Kearsipan', nominal: 'Rp 27.303.500,-' },
      { nama: 'Sub Bidang Pertanahan', nominal: 'Rp 54.000.000,-' }
    ]
  },
  {
    bidang: 'Bidang 2',
    uraian: 'Bidang Pembangunan Desa',
    pagu: 'Rp 1.005.027.716,-',
    persentase: '35%',
    progressWidth: 'w-[35%]',
    subBidang: [
      { nama: 'Sub Bidang Pendidikan', nominal: 'Rp 109.037.526,-' },
      { nama: 'Sub Bidang Kesehatan', nominal: 'Rp 399.085.500,-' },
      { nama: 'Sub Bidang Pekerjaan Umum dan Penataan Ruang', nominal: 'Rp 467.285.500,-' },
      { nama: 'Sub Bidang Kawasan Pemukiman', nominal: 'Rp 15.219.190,-' },
      { nama: 'Sub Bidang Perhubungan, Komunikasi dan Informatika', nominal: 'Rp 14.400.000,-' }
    ]
  },
  {
    bidang: 'Bidang 3',
    uraian: 'Bidang Pembinaan Kemasyarakatan',
    pagu: 'Rp 154.472.000,-',
    persentase: '5,4%',
    progressWidth: 'w-[5.4%]',
    subBidang: [
      { nama: 'Sub Bidang Ketenteraman Ketertiban Umum dan Perlindungan Masyarakat', nominal: 'Rp 34.595.000,-' },
      { nama: 'Sub Bidang Kebudayaan dan Keagamaan', nominal: 'Rp 89.877.000,-' },
      { nama: 'Sub Bidang Kepemudaan & Olahraga', nominal: 'Rp 20.000.000,-' },
      { nama: 'Sub Bidang Kelembagaan Masy.', nominal: 'Rp 10.000.000,-' }
    ]
  },
  {
    bidang: 'Bidang 4',
    uraian: 'Bidang Pemberdayaan Masyarakat',
    pagu: 'Rp 192.810.900,-',
    persentase: '6,7%',
    progressWidth: 'w-[6.7%]',
    subBidang: [
      { nama: 'Sub Bidang Kelautan dan Perikanan', nominal: 'Rp 58.122.000,-' },
      { nama: 'Sub Bidang Pertanian dan Peternakan', nominal: 'Rp 73.617.000,-' },
      { nama: 'Sub Bidang Pemberdayaan Perempuan Aparatur Desa', nominal: 'Rp 32.972.400,-' },
      { nama: 'Sub Bidang Pemberdayaan Perempuan Perlindungan Anak, dan Keluarga', nominal: 'Rp 25.722.000,-' },
      { nama: 'Sub Bidang Dukungan Penanaman Modal', nominal: 'Rp 2.377.500,-' }
    ]
  },
  {
    bidang: 'Bidang 5',
    uraian: 'Bidang Penanggulangan Bencana, Keadaan Darurat & Mendesak',
    pagu: 'Rp 81.500.000,-',
    persentase: '2,8%',
    progressWidth: 'w-[2.8%]',
    subBidang: [
      { nama: 'Sub Bidang Penanggulangan Bencana', nominal: 'Rp 15.000.000,-' },
      { nama: 'Sub Bidang Keadaan Darurat', nominal: 'Rp 12.500.000,-' }
    ]
  }
];

export const dokumenList: DokumenItem[] = [];
