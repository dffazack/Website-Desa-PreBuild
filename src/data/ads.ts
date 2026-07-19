import type { IklanItem } from './types';
import batikOriginal from '../assets/images/Batik.webp';
import susuSegar from '../assets/images/susu_segar.png';
import tahuJayaSari from '../assets/images/tahu_jaya_sari.png';
import makananOriginal from '../assets/images/Makanan.webp';
import makanan2Original from '../assets/images/Makanan-2.webp';

export const iklanList: IklanItem[] = [
  {
    id: 1,
    slug: 'batik-krajan-dw',
    name: 'Batik Krajan DW',
    category: 'Kriya',
    phone: '0855-4906-6704',
    color: 'bg-navy text-white',
    price: 'Rp150.000 - Rp250.000',
    rating: 5,
    reviewsCount: 14,
    description: 'Batik Krajan DW dirintis oleh Ibu Dewi sejak 2019 secara mandiri. Kami menyediakan aneka produk batik tulis, batik cap, jumputan, ecoprint, dan shibori dengan kualitas premium. Ciri khas dan ikon utama dari Batik Krajan DW adalah motif Buah Pepaya yang mengangkat komoditas pertanian unggulan Desa Ngenep. Produk terlaris kami adalah batik cap yang memiliki desain elegan and modern namun tetap sarat nilai budaya lokal.',
    images: [batikOriginal]
  },
  {
    id: 2,
    slug: 'peternakan-sapi-perah-susu',
    name: 'Peternakan Sapi Perah (Susu Segar)',
    category: 'Peternakan',
    phone: '0851-4250-5492',
    color: 'bg-emerald-950 text-white',
    price: 'Harga KUD',
    rating: 4.8,
    reviewsCount: 22,
    description: 'Peternakan sapi perah mandiri dikelola oleh Bapak Tolib yang telah memulai usahanya sejak tahun 2008. Sektor peternakan sapi perah di Desa Ngenep memiliki sejarah panjang sejak masa Presiden Soeharto melalui program angsuran KUD. Proses pemerahan susu dilakukan 2 kali sehari dengan standar kebersihan dan sanitasi yang sangat ketat menggunakan milk can steril. Seluruh hasil produksi disetorkan ke KUD Ngenep setiap pagi (06.30 WIB) dan sore (15.30 WIB). KUD Ngenep melakukan Quality Control (QC) ketat untuk memasok kebutuhan bahan baku PT Nestlé Indonesia sekaligus melayani pembelian eceran susu segar berkualitas tinggi bagi warga lokal.',
    images: [susuSegar]
  },
  {
    id: 3,
    slug: 'pabrik-tahu-ud-jaya-sari',
    name: 'Pabrik Tahu "UD Jaya Sari"',
    category: 'Kuliner',
    phone: '0812-3234-4492',
    color: 'bg-[#8c6239] text-white',
    price: 'Harga Terjangkau',
    rating: 4.9,
    reviewsCount: 31,
    description: 'UD Jaya Sari dimiliki oleh Abah Ladi & Ibu Umi, memproduksi tahu putih, tahu goreng, tahu bulat, dan tahu sutra yang lezat, gurih, dan bebas bahan pengawet kimia berbahaya. Pabrik beroperasi setiap hari mulai pukul 07.30 hingga 15.30 WIB. Sebagai wujud kepedulian terhadap lingkungan dan efisiensi bahan pangan, produk sisa diolah kembali menjadi tahu goreng matang untuk meminimalisir pemborosan. Wilayah pemasaran konvensional kami menjangkau pasar-pasar utama di Kota Malang seperti Pasar Gadang (permintaan tertinggi), Pasar Blimbing, dan Pasar Kebalen.',
    images: [tahuJayaSari]
  },
  {
    id: 4,
    slug: 'olahan-pangan-cahaya-pkk',
    name: 'Olahan Pangan "UMKM Cahaya PKK"',
    category: 'Kuliner',
    phone: '0822-3059-7518',
    color: 'bg-amber-600 text-white',
    price: 'Sistem Pre-Order',
    rating: 5,
    reviewsCount: 19,
    description: 'UMKM Cahaya PKK merupakan inisiasi olahan pangan kreatif yang dipimpin oleh Ibu Isna Indrawati. Sentra pengolahan kami berpusat di kediaman Ibu Ulum, Jl. Melati, Dusun Curah Kembar, Desa Ngenep. Sistem penjualan kami menggunakan sistem Pre-Order (PO) dengan jam operasional yang fleksibel. Produk unggulan kami meliputi Tepung Mocaf (Modified Cassava Flour) yang bebas gluten, aneka kue kering (cookies), dan Brownies Fudgy yang sangat disukai dengan kapasitas produksi mencapai 50 pcs per hari. Produk olahan kami dipasarkan secara offline di berbagai Pusat Oleh-oleh Kota Batu dan secara online melalui media sosial resmi kami.',
    images: [makananOriginal, makanan2Original]
  }
];
