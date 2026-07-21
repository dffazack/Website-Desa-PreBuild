export interface MenuItem {
  name: string;
  href: string;
}

export interface LayananItem {
  title: string;
  time: string;
  icon: string;
}

export interface NewsItem {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: any; // Can be string or imported ImageMetadata
  link: string;
  author: string;
  imageCaption?: string;
  content: string[];
}


export interface OrganisasiItem {
  name: string;
  role: string;
  photo?: any; // Imported ImageMetadata
}

export interface IklanItem {
  id: number;
  slug: string;
  name: string;
  category: string;
  phone: string;
  color: string;
  price: string;
  rating: number;
  reviewsCount: number;
  description: string;
  images: any[]; // Array of imported ImageMetadata or strings
}


export interface APBDesSummaryItem {
  title: string;
  value: string;
  subtitle: string;
  progress?: string;
  color: string;
}

export interface PendapatanKomposisiItem {
  label: string;
  percentage: number;
  valStr?: string;
  color: string;
}

export interface AlokasiBelanjaItem {
  code: string;
  label: string;
  valStr: string;
  pct: string;
  pctValue: number;
}

export interface SubBidangItem {
  nama: string;
  nominal: string;
}

export interface RincianAnggaranItem {
  bidang: string;
  uraian: string;
  pagu: string;
  persentase: string;
  progressWidth: string;
  subBidang: SubBidangItem[];
}

export interface DokumenItem {
  title: string;
  info: string;
  link: string;
}

export interface ProdukHukumItem {
  nomor: string;
  judul: string;
  info: string;
  kategori: string;
  link?: string;
}

export interface GaleriItem {
  title: string;
  image: any; // Imported ImageMetadata
  kategori: string;
}

export interface AnnouncementItem {
  id: number;
  title: string;
  date: string;
  image: any; // Imported ImageMetadata
}

